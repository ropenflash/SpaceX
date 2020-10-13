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
                <div>Mission Ids:<span>{1} </span>   </div>
                <div>Launch Year:<span> {launch_year}</span></div>
                <div>Successful Launch:<span> {launch_success && launch_success.toString()}</span></div>
                <div>Successful Landing:<span>{launch_landing}</span></div>
            </div>
        </div >
    )
}

export default Card
