import React from 'react'
import PLayerList from './PLayerList'
import { Card } from "react-bootstrap";
const PlayerCard = ({player}) => {
  return (
    <div>
        <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={player.imageUrl} alt={player.name} style={{ height: "250px", objectFit: "cover" ,width:"250px" }}  />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {player.team} <br />
          <strong>Nationality:</strong> {player?.nationality} <br />
          <strong>Jersey Number:</strong> {player?.jerseyNumber} <br />
          <strong>Age:</strong> {player.age || "N/A"}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )

  
}

export default PlayerCard
