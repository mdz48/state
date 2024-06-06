import { useState } from "react";
import { Helmet } from "react-helmet-async";
import React from "react"

function Home() {
  const[nombre, setNombre] = useState([]);

  const handlerClick = (e) => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
      if(response.ok)
        return response.json()
      else 
      alert('No fue posible establecer comunicación con el servidor')
    })
    .then(data => {
      setNombre(data.results);
      
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
        <button onClick={handlerClick}>Cargar Datos</button>
        <div>
          <ol>
            {nombre.map(item => <li>{item.name}</li>)}
          </ol>
        </div>
    </>
  );
}

export default Home