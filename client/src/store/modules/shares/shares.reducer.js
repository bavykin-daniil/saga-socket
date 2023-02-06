import {
  FETCH_SHARES,
  FETCH_SHARES_FAILURE,
  FETCH_SHARES_SUCCESS,
} from "./shares.types";

const initialState = {
  list: [],
  loading: true,
  error: null,
};

export default function sharesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHARES:
      return { ...state, loading: true, error: null };
    case FETCH_SHARES_SUCCESS:
      return { ...state, list: action.payload, loading: false };
    case FETCH_SHARES_FAILURE:
      return { ...state, loading: false, error: action.payload };
  }
  return state;
}
