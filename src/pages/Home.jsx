import { Helmet } from "react-helmet-async";
import React from "react"
import CardsSection from "../components/organisms/CardsSection";
import './Home.css'
import { useState } from "react";

function Home() {

  const[personajes, setPersonaje] = useState([]);


    const handlerClick = (e) => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => {
          if(response.ok)
            return response.json()
          else 
          alert('No fue posible establecer comunicación con el servidor')
        })
        .then(data => {
          setPersonaje(data.results);
          
        })
        .catch(error => {
          console.log(error);
        })
      }


  return (
    <>
        <Helmet>
            <title>State - Login</title>
        </Helmet>
        <button onClick={handlerClick}>Ver Datos</button>
        <div id="CardsSection">
          <CardsSection personajes={personajes}></CardsSection>
        </div>
    </>
  );
}

export default Home