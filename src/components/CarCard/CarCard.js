import React from "react";
import "./CarCard.css";

const CarCard = props => (
    <div className="col-sm-3">
        <div className="card">
            <div className="img-container">
                <img alt={props.alt} src={props.image} className="img-fluid" onClick={() => props.clickCar(props.id)} />
            </div>
        </div>
    </div>
);

export default CarCard;
