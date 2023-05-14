import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {MainReducer} from "../Reducer";
import {BasketReducer} from "../Reducer/basketReduser";
import {FavoriteReducer} from "../Reducer/FavoriteReduser";
import thunk from "redux-thunk"

export const store = createStore(combineReducers({
main: MainReducer,
    basket: BasketReducer,
    favorite: FavoriteReducer
}),composeWithDevTools(applyMiddleware(thunk)))