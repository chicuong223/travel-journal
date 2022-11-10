import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--row">
                <div className="card--image-div">
                    <img src={`../images/${props.img}`} alt={props.img} />
                </div>
                <div className="card--title-div">
                    <p className="card--location">
                        <img src="../images/location.svg" alt="location-logo" />
                        <span className="card--location-name text">
                            {props.location}
                        </span>
                        <a href={props.googleMapsUrl} className="text" target='_blank' rel='noopener noreferer'>
                            View on Google Maps
                        </a>
                    </p>
                    <h1 className="card--title">{props.title}</h1>
                    <p className="card--date text">
                        {props.startDate} - {props.endDate}
                    </p>
                    <p className="card--description text">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
