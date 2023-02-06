import { CONNECT, CONNECTION_ERROR, DISCONNECT } from "./connection.types";

const initialState = {
  connectionStatus: "disconnected",
  connectionError: null,
};

export default function connectionReducer(state = initialState, action) {
  switch (action.type) {
    case CONNECT:
      return {
        ...state,
        connectionStatus: "connected",
      };
    case DISCONNECT:
      return {
        ...state,
        connectionStatus: "disconnected",
      };
    case CONNECTION_ERROR:
      return {
        ...state,
        connectionError: action.payload,
      };
  }
  return state;
}
