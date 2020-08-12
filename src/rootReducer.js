// принимаем набор релюсеров из нашего приложения

import {combineReducers} from "redux";
import {fetchDataReducer} from "./fetchDataReducer";

export const rootReducer = combineReducers({
     fetchDataReducer,
});

