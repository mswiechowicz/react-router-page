import {rootReducer} from "../reducers/rootReducer";
import {applyMiddleware, createStore} from "redux";
import {validateAuthorMiddleware} from "../middleware/validateAuthorMiddleware";

const store = createStore(rootReducer, applyMiddleware(validateAuthorMiddleware));

export default store;