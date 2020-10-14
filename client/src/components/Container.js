import React from 'react'
import Card from './Card'
import '../styles/Container.css'

function Container({ flights, land }) {
    const items = flights.map(item => <Card key={item.flight_number} flight={item} land={land} />)

    return (
        <div className="Container">
            {items}
        </div>
    )
}

export default Container
