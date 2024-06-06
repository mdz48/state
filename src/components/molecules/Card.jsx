import React from "react";
import './Card.css'

export default function Card(props) {
  return (
    <div id="card-content">
        <div id="picture">
            <img src={props.image} alt="" />
        </div>
        <div id="text">
            <div id="info">
                <h2>{props.name}</h2>
                <p>{props.status} - {props.species}</p>
                <p>Gender: {props.gender}</p>
                <p className="narrow">Last Known Location:</p>
                <p>{props.location}</p>
                <p className="narrow">Origin:</p>
                <p>{props.origin}</p>
            </div>
        </div>
    </div>
  );
}
