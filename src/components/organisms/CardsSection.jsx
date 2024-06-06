import React from "react";
import Card from "../molecules/Card";
import { useState } from "react";
import "./CardsSection.css";

export default function CardsSection(props) {
  return (
    <>
      <div>{/* <button onClick={handlerClick}>Cargar Datos</button> */}</div>
      <div id="main">
        <div id="cards-section">
          {props.personajes.map((personaje) => {
            return (
              <Card
                key={personaje.id}
                name={personaje.name}
                image={personaje.image}
                status={personaje.status}
                species={personaje.species}
                gender={personaje.gender}
                location={personaje.location.name}
                origin={personaje.origin.name}
              ></Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
