import { CONNECT, CONNECTION_ERROR, DISCONNECT } from "./connection.types";

export function connectToServer() {
  return { type: CONNECT };
}

export function disconnectFromServer() {
  return { type: DISCONNECT };
}

export function errorFromServer(errorMessage) {
  return { type: CONNECTION_ERROR, payload: errorMessage };
}
