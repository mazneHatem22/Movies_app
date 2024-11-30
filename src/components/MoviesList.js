import React, {useEffect, useState} from "react";
import CardMovie from "./CardMovie";
import { Container, Row } from "react-bootstrap";
import PaginationCom from "./Pagination";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovie} from "../redux/actions/movieAction";
import NavBar from "./NavBar";

const moza= 10

const MoviesList = () => {
  const [movie, setMovie] = useState([]);

  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getAllMovie())
  }, []);

const dataMovie=useSelector((state)=> state.movies)


useEffect(() => {
  setMovie(dataMovie)
}, [dataMovie]);
  return (
    <div>
      <NavBar/>
    <Container>
    <Row className="mt-3">
      {movie?.length >= 1 ? (
        movie.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h2 className="text-center pt-5 "> There's no movies </h2>
      )}
      {movie?.length >= 1 ? (
        <PaginationCom/>
      ) : (
       ''
      )}
    </Row>
    </Container>
    </div>
  );
};

export default MoviesList;
