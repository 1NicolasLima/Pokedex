import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./PokemomCard/Card";
import Pokeinfo from "./PokemomCard/Pokeinfo";

const Main = () => {

    //states
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();

    //get   
    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        //console.log(res.data.results)

        //buttons next e previous
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previos);
        //Chamada da função getPokemon()
        getPokemon(res.data.results)
        setLoading(false)
        //console.log(pokeData)
    };

    //Function getPokemon() que irá pegar os resultados
    const getPokemon = async (res) => {
        //map criado
        res.map(async (item) => {
            //atribuindo o .get a url de todos os 20 pokemons
            const result = await axios.get(item.url)
            //console.log(result.data)
            setPokeData(state => {
                state = [...state, result.data]
                return state;
            })
        })
    }

    //useEffect in pokeFun()

    useEffect(() => {
        pokeFun()
    }, [url]);

    return (
        <div>
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} />

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