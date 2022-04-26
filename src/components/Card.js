import React from 'react';
import Images from '../images';

export default function Card(props){
    return (
        <div className="card">
            <div className="img-holder">
                <img src= {props.obj.image} alt= {props.obj.alt}></img>
            </div>
            <div className="content-holder">
                <div className="rel-data">
                    <img src= {Images.locationPin}></img>
                    <h3>{props.obj.location}</h3>
                    <a href="#">View on Google Maps</a>
                </div>
                <h2>{props.obj.place}</h2>
                <span className="travel-dates">
                    {props.obj.fromDate} - {props.obj.toDate}
                </span>
                <span className="description">
                    {props.obj.description}
                </span>
            </div>
            
        </div>
    )
}