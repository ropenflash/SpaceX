import React from 'react'
import '../styles/card.css'

function Card({ flight }) {

    const { launch_success,
        launch_year,
        launch_landing,
        mission_name,
        flight_number,
        mission_id,
        links: { mission_patch_small } } = flight


    return (
        <div className="card">
            <div className="card-header">
                <img className="card-image" src={mission_patch_small} />
            </div>
            <div className="card-title">
                {mission_name} #{flight_number}
            </div>
            <div className="card-body" >
                <div>Mission Ids: {1}  </div>
                <div>Launch Year: {launch_year}</div>
                <div>Successful Launch: {launch_success && launch_success.toString()}</div>
                <div>Successful Landing:{launch_landing}</div>
            </div>
        </div >
    )
}

export default Card
