import { combineReducers } from "redux";
import sharesReducer from "./modules/shares/shares.reducer";
import connectionReducer from "./modules/connection/connection.reducer";

const RootReducer = combineReducers({
  shares: sharesReducer,
  connection: connectionReducer,
});

export default RootReducer;
