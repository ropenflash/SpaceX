import React from 'react'
import '../styles/card.css'

function Card({ flight, land }) {

    const { launch_success,
        launch_year,
        mission_name,
        flight_number,
        mission_id,
        links: { mission_patch_small } } = flight

    return (
        <div className="card" aria-labelledby="card">
            <div className="card-header" aria-labelledby="card header">
                <img className="card-image" aria-labelledby="mission image" src={mission_patch_small} alt={mission_name} />
            </div>
            <div className="card-title" aria-labelledby="Mission Title">
                {mission_name} #{flight_number}
            </div>
            <div className="card-body" aria-labelledby="Mission Details" >
                <div>Mission Ids:<span><ul>{mission_id.map(mission => (<li key={mission} aria-labelledby={mission}>{mission}</li>))}</ul> </span>   </div>
                <div>Launch Year:<span aria-labelledby={`launch year ${launch_year}`}> {launch_year}</span></div>
                <div>Successful Launch:<span aria-labelledby={`launch success ${launch_success !== null && launch_success.toString()}`}> {launch_success !== null && launch_success.toString()}</span></div>
                <div>Successful Landing:<span aria-labelledby={`launch success ${land && land.toString()}`}>{land && land.toString()}</span></div>
            </div>
        </div >
    )
}

export default Card
