import { combineReducers, createStore } from "redux";

import utilsReducer from "./utils/utils";

export const store = createStore(combineReducers({ utils: utilsReducer }));
