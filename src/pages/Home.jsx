// import { Container, Grid } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Navbar from "../components/NavBar";
// import PokemonCard from "../components/PokemomCard";
// import { Skeletons } from "../components/Skeletons";
// import './Home.css';

// export const Home = () => {

//     const [pokemons, setPokemons] = useState([]);
//     useEffect(() => {
//         getPokemons()
//     }, [])

//     const getPokemons = () => {
//         var endpoints = []
//         for (var i = 1; i < 10; i++) {
//             endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//         }
//         axios.all(endpoints.map((endpoints) => axios.get(endpoints))).then((res) => setPokemons(res)).catch((err) => console.log(err))

//         // axios.get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0").then((res) => setPokemons(res.data.results)).catch((err) => console.log(err));
//     };


//     const pokemonFilter = (name) => {

//         var filteredPokemons = [];
//         if (name === "") {
//             getPokemons()

//         }
//         for (var i in pokemons) {
//             if (pokemons[i].data.name.includes(name)) {
//                 filteredPokemons.push(pokemons[i])
//             }
//         }

//         setPokemons(filteredPokemons)

//     }


//     return (
//         <div>
//             <Navbar pokemonFilter={pokemonFilter} />
//             <div className="pokedex">
//                 <div className="left">
//                     <div className="logo"></div>
//                     <div className="bg-curve1_left"></div>
//                     <div className="bg-curve2_left"></div>
//                     <div className="curve1_left">
//                         <div className="buttonGlass">
//                             <div className="reflect"></div>
//                         </div>
//                         <div className="miniButtonGlass1"></div>
//                         <div className="miniButtonGlass2"></div>
//                         <div className="miniButtonGlass3"></div>
//                     </div>
//                     <div className="curve2_left">
//                         <div className="junction">
//                             <div className="junction1"></div>
//                             <div className="junction2"></div>
//                         </div>
//                     </div>
//                     <div className="screen">
//                         <div className="topPicture">
//                             <div className="buttontopPicture1"></div>
//                             <div className="buttontopPicture2"></div>
//                         </div>
//                         <div className="picture">

//                         </div>
//                         <div className="buttonbottomPicture"></div>
//                         <div className="speakers">
//                             <div className="sp"></div>
//                             <div className="sp"></div>
//                             <div className="sp"></div>
//                             <div className="sp"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Container maxWidth="false">
//                 <Grid container spacing={3}>
//                     {pokemons.length === 0 ? <Skeletons /> :
//                         pokemons.map((pokemon, key) => (
//                             <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
//                                 <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default}
//                                     types={pokemon.data.types} />
//                             </Grid>
//                         ))}
//                 </Grid>
//             </Container>
//         </div>
//     )
// }