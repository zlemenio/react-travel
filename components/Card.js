import React from 'react'

export default function Card(props){
        return(
                <div className='card'>
                        <img className="card-featured-img"src={props.imageUrl}/>
                        <div className='card-info'>
                                <div className='card-info-point'>
                                        <img alt={props.location} className="card-info-point-icon" src='./static/img/pin-local-icon.png'/>
                                        <p className='card-info-point-location'>{props.location}</p>
                                        <p className='card-info-point-view-location'><a href={props.imageUrl}>View on Google Maps</a></p>
                                </div>
                                <div className='card-info-title bold'>
                                        <h2>{props.title}</h2>
                                </div>

                                <div className='card-info-content'>
                                        <p className='bold'>{props.startDate} - {props.endDate}</p>
                                        <p className='card-info-content-desc'>{props.description}</p>
                                </div>

                        </div>
                </div>
        )
}