import React, {useEffect, useState} from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { Link , useParams} from "react-router-dom";
import axios from 'axios';

const MovieDetals = () => {
  const param = useParams()
  const [details, setDetails]=useState([])
  
  const getAllDetails = async () => {
    const res = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${param.id}`);
    setDetails(res.data.data.movie);
  }
  useEffect(() => {
    getAllDetails();
  }, []);

  return (
    <div className='back' style={{
      backgroundImage: `url(${details.medium_cover_image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100%',
    }} >
      <Container>
    <Row className='justify-content-center'>
    <Col md="12" xs="12" sm="12" className='mt-4'>
    <div className='card-details d-flex align-items-center'>
    <img className='img-movie w-30' 
      src={details.medium_cover_image}
      alt='ooo'
    />
    <div className='justify-content-center text-center mx-auto m-5'>
    <p className='card-text-details '> Movie Title   : {details.title}</p>
    <p className='card-text-details '>Release Date  : {details.year}</p>
    <p className='card-text-details '> Genre: {details.genres}</p>
    <p className='card-text-details '>Rating : {details.rating}</p>

    </div>
    


    </div>

    </Col> 
    </Row>
    

    <Row className='justify-content-center '>
    <Col md="12" xs="12" sm="12" className='mt-3'>
      <div className='card-story d-flex flex-column align-items-start'>
        <div className='text-end p-4'>
          <p className='card-text-title '>The Story :</p>
        </div>
        <div className='text-end px-2'>
          <p className='card-text-story'>{details.description_intro}</p>
        </div>
      </div>
    </Col>

    </Row>
    <Row className='justify-content-center'>
      <Col md="12" xs="12" sm="12" className='mt-2 d-flex justify-content-center mt-3'>
      <Link to={"/"}>
        <button style={{backgroundColor:"#394650", border:"none"}} className='btn btn-primary mx-2 '>
           Back Home
        </button>
        </Link>
        <a href={details.url} target="_blank" rel="noreferrer">
        <button style={{backgroundColor:"#394650", border:"none"}} className='btn btn-primary mx-2 '>
            Watch the Movie
        </button>
        </a>
      </Col>
    </Row>
    </Container>
    </div>
  )
}

export default MovieDetals
