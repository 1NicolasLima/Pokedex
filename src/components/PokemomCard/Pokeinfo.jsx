import React from "react";
import './Pokeinfo.css';

const Pokeinfo = () => {
    return (
        <div>
            <h1>Charmander</h1>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="" />
            <div className="abilities">
                <div className="group">
                    <h2>blaze</h2>
                </div>
                <div className="group">
                    <h2>solar-power</h2>
                </div>
            </div>
            <div className="base-stat">
                <h3>hp:30</h3>
                <h3>attack:52</h3>
                <h3>defense:43</h3>
                <h3>defense:50</h3>
                <h3>Speed</h3>
            </div>
        </div>
    )
}
export default Pokeinfo