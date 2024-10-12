import {AllMOVIES,MovieApi} from "../types/MovieType"
import axios from "axios";

export const getAllMovie= ()=>{
    return async(dispatch)=>{
        const res = await axios.get(MovieApi);
        dispatch({type:AllMOVIES , data:res.data.data.movies})
    }
}
export const getAllSearch= (word)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${word}`);
        dispatch({type:AllMOVIES , data:res.data.data.movies})
    }
}
export const getAllPages= (page)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${page}`);
        dispatch({type:AllMOVIES , data:res.data.data.movies})
    }
}