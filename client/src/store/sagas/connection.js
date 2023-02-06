import { call, fork, take, put } from "redux-saga/effects";
import io from "socket.io-client";
import { eventChannel } from "redux-saga";
import { fetchSharesSuccess } from "../modules/shares/shares.actions";
import {
  connectToServer,
  errorFromServer,
} from "../modules/connection/connection.actions";
import { SERVER_URL } from "../../config";

let reconnectTimer;

const createSocketChannel = (server) => {
  return eventChannel((emit) => {
    const handleReceivedData = (data) => {
      emit(fetchSharesSuccess(data));
    };

    const handleServerConnect = () => {
      emit(connectToServer());
    };

    server.on("ticker", handleReceivedData);
    server.on("connect_error", (error) =>
      serverReconnect({ emit, error, server, onReconnect: handleServerConnect })
    );

    return () => {
      server.off("ticker", handleReceivedData);
    };
  });
};

function* read(server) {
  const channel = yield call(createSocketChannel, server);

  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

function* serverConnection() {
  try {
    const server = io(SERVER_URL);

    server.on("connect", (data) => {
      server.emit("start");
    });

    server.open();
    yield fork(read, server);
  } catch (error) {
    yield put(errorFromServer(error.type));
  }
}

// function* serverDisconnection() {
//   socket.disconnect();
//   socket.close();
// }

function serverReconnect({ emit, error, server, onReconnect }) {
  emit(errorFromServer(error.type));

  reconnectTimer = setTimeout(() => {
    console.log("IM TRYING TO RECONNECT");
    server.connect();
  }, 1000);
}

export default function* watchServerConnect() {
  yield fork(serverConnection);
}
