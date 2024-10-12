import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/olhretric56m938tp80k38ibk0.png"
import {useDispatch} from "react-redux";
import {getAllMovie,getAllSearch} from "../redux/actions/movieAction";


const NavBar = () => {
  const onSearch=(word)=>{
    Search(word)


  }
  const dispatch=useDispatch()

  const Search = async (word) => {
    if(word=== ""){
      dispatch(getAllMovie())
    }else{
     dispatch(getAllSearch(word))
    }
   
  }
  return (
    <div className="nav-style">
    <div  className="text-center style">
    <h1>Movie App</h1>
    </div>
    <div className="vv">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
          <a href="/">
            <img className="logo " src={logo} alt="mooz" />
            </a>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i className="fa fa-search"></i>
              <input
              onChange={(e)=> onSearch(e.target.value)}
                type="text"
                className="from-control"
                placeholder="Search..."
              ></input>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default NavBar;
