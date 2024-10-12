import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const CardMovie = ({ mov }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" data-aos="zoom-in" data-aos-duration="1500" className="my-2">
      <Link to={`/movie/ ${mov.id}`}>
        <div className="card">
          <img
            src={mov.medium_cover_image}
            key={mov.id}
            alt="noo"
            className="card-image"
          />
          <div className="card-overlay">
            <div className="text-overlay text-center w-100 p-2">
              <p> Movie Title :{mov.title}</p>
              <p> Release Date :{mov.year}</p>
              <p>Genre:{mov.genres}</p>
              <p>Rating :{mov.rating}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;


  /* <a style={{color:"black"}} href={mov.url} target="_blank" rel="noreferrer"></a> */

