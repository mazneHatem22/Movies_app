import {AllMOVIES} from "../types/MovieType"

const initalValue={movies:[]}
export const MovieReducer=(state= initalValue , action)=>{
    switch(action.type){
        case AllMOVIES:
            return {movies: action.data}
            default:
            return state
    }

}