import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import postReducer from "./components/redux/postReducer";

const rootReducers = combineReducers({
  post: postReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
