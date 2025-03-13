import React from "react";
import players from "../players";
import PlayerCard from "./PlayerCard";

const PLayerList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
{players.map((player,i)=>(
    <PlayerCard key={i} player={player}/>
))}

      </div>
  );
};

export default PLayerList;
