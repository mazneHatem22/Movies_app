import { createStore , applyMiddleware} from 'redux'
import {MovieReducer} from "../reducer/movieReducer"
import {thunk} from "redux-thunk"

export const Store=createStore(MovieReducer,applyMiddleware(thunk))