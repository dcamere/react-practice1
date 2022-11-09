import React, { useState, useEffect } from "react";
import './Pokeapi.scss'


function Pokeapi(props) {
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemonData, setPokemonData] = useState();
    const [pokemonType, setPokemonType] = useState();
    const [pokemonNameToUse, setPokemonNameToUse] = useState(props.defaultPokemon);
    const capitalizeString = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } 
    const searchPkm = (pokemonName) =>{
        fetch(ENDPOINT + pokemonName)
        .then(response => response.json())
        .then(data =>{
            setPokemonData(data);
            console.log(data)
            setPokemonType(data.types)
            return data;
        });

    }
    return (
        <div className="Pokeapi">
            <img className="Pokeapi__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon_logo" />
            <h1>Welcome to the virtual Pokedex!</h1>
            <h3>You can search your favorite pokemon!</h3>
            <input type="text" className="Pokeapi__input"onChange={(e)=>{
                
            }} />
            <button className="Pokeapi__searchBtn" onClick={(e)=>{
                searchPkm(e.currentTarget.closest(".Pokeapi").querySelector(".Pokeapi input").value.toLowerCase() || props.defaultPokemon)
            }}>Search!</button>
            {
                pokemonData ?
                <div className="Pokeapi__result">
                    <h3>{capitalizeString(pokemonData.name)} </h3>
                    {
                        pokemonData.sprites &&
                        <div className="Pokeapi__img">
                            <img src={pokemonData.sprites.front_default} alt="" />
                            <img src={pokemonData.sprites.back_default} alt="" />
                        </div>
                    }
                    <h3>N°: {pokemonData.order}</h3>
                    <h3>Types:</h3>
                    <ul>
                        {
                            pokemonData.types.map((item, index) =>{
                                return `${capitalizeString(item.type.name)}`;
                            }).join(" and ")
                        }
                    </ul>
                    
                 
                </div>
                :
                <div className="Pokeapi__loader"></div>
                
            }
        </div>
    )
 
    


 }
export default Pokeapi;