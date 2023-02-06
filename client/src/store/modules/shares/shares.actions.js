import {
  FETCH_SHARES,
  FETCH_SHARES_FAILURE,
  FETCH_SHARES_SUCCESS,
} from "./shares.types";

export function fetchShares() {
  return { type: FETCH_SHARES };
}

export function fetchSharesFailure(errorMessage) {
  return { type: FETCH_SHARES_FAILURE, payload: errorMessage };
}

export function fetchSharesSuccess(shares) {
  return { type: FETCH_SHARES_SUCCESS, payload: shares };
}
