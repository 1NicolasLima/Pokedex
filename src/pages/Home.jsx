import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React from "react";
import Navbar from "../components/NavBar";
import PokemonCard from "../components/PokemomCard";

export const Home = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0").then((res) => console.log(res)).catch((err) => console.log(err));
    return (
        <div>
            <Navbar />
            <Container maxWidth="false">
                <Grid container>
                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}