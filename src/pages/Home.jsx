import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import PokemonCard from "../components/PokemomCard";

export const Home = () => {

    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        var endpoints = []
        for (var i = 1; i < 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endpoints.map((endpoints) => axios.get(endpoints))).then((res) => setPokemons(res)).catch((err) => console.log(err))

        // axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0").then((res) => setPokemons(res.data.results)).catch((err) => console.log(err));
    };


    const pokemonFilter = (name) => {

        var filteredPokemons = [];
        if (name === "") {
            getPokemons()
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i])
            }
        }

        setPokemons(filteredPokemons)

    }


    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.map((pokemon, key) => (
                        <Grid item xs={3} key={key}>
                            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}