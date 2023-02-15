import React from "react";
import Card from "./PokemomCard/Card";
import Pokeinfo from "./PokemomCard/Pokeinfo";


const Main = () => {
    console.log("ola")
    return (
        <div>
            <div className="container">
                <div className="left-content">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <div className="btn-group">
                        <button>Previus</button>
                        <button>Next</button>
                    </div>
                </div>
                <div className="right-content">
                    <Pokeinfo />
                </div>
            </div>
        </div>
    )

}

export default Main;