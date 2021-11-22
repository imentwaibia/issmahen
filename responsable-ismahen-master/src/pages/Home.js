import React from "react";
import { Link } from "react-router-dom";
import {  Nav, NavDropdown } from "react-bootstrap";
//import Button from "components/CustomButtons/Button.js";
export const Home = () => {
  return (
    <div  style={{backgroundColor: "#f8bbd0"}}>
      <header
        style={{
          backgroundColor: "#bbb5c3",
          padding: "50px",
          fontsize: "25px",
         
        }}
      >
        
          <Link 
            to="/"
            style={{
              paddingRight: "10%",
              fontWeight: "bolder",
              color: "#304ffe",
              flexDirection: "ligne",
            }}
          >
            Acceuil
          </Link>
       
        <Nav
          className="me-auto"
          style={{
            paddingLeft: "90%",
            fontWeight: "bolder",
            color: "#273746",
            flexDirection: "ligne",
            
          }}
        >
          <NavDropdown title="Connexion" style={{color: "#273746"}}>
          <div>
          <Link to="/Login">
            Accées Responsable 
            </Link>
            </div>
            <div>
            <Link to="/Loginmagasin">Accées Magasinier</Link>
            </div>
          </NavDropdown>
        </Nav>
        
      </header>
    </div>
  );
};
export default Home;
