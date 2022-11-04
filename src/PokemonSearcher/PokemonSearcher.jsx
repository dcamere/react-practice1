import { useEffect, useState } from 'react';
import './PokemonSearcher.scss';

function PokemonSearcher (props) {
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemonData, setPokemonData] = useState();
    const [pokemonNameToUse, setPokemonNameToUse] = useState(props.defaultPokemon);

    const capitalizeString = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } 

    const getPokemons = (pokemonName) => {
        fetch(ENDPOINT + pokemonName)
        .then(response => response.json())
        .then(data => {
            setPokemonData(data);
            
            return data;
        });
    }

    useEffect(() => {
        if(!pokemonData) {
            getPokemons(pokemonNameToUse);
        }
        console.log(pokemonData);
    }, [pokemonData]);
    

    return (
        <div className="pokemon-searcher">
            <input placeholder="Write a pokemon name to search..." onChange={(e) => {
                    // Descomenta esta línea si quieres que cada vez que escribas una letra llame al pokeapi para consultar...
                    // getPokemons(e.currentTarget.value || props.defaultPokemon)
                }} 
                className="pokemon-searcher__input" 
                type="text" 
            />
            <button onClick={(e) => {
                getPokemons(e.currentTarget.closest(".pokemon-searcher").querySelector(".pokemon-searcher input").value || props.defaultPokemon)
            }} className="pokemon-searcher__button">Search!</button>
            {
                pokemonData ?
                <div className="pokemon-searcher__result">
                    <h3>{capitalizeString(pokemonData.name)}</h3>
                    {
                        pokemonData.sprites && 
                        <div className="pokemon-searcher__img">
                            <img src={pokemonData.sprites.front_default} alt="" />
                            <img src={pokemonData.sprites.back_default} alt="" />
                        </div>
                    }
                    
                    <h3>{capitalizeString(pokemonData.name)} Base Stats</h3>
                    <ul className="pokemon-searcher__block">
                        {
                            pokemonData?.stats.length && 
                            pokemonData.stats.map((item, index) => {
                                return <li key={index}>{capitalizeString(item.stat.name)}: {item.base_stat}</li>
                            })
                        }
                    </ul>
                    <h3>{capitalizeString(pokemonData.name)} Moves</h3>
                    <ul className="pokemon-searcher__moves pokemon-searcher__block">
                        {
                            pokemonData?.moves.length && 
                            pokemonData.moves.map((item, index) => {
                                return <li key={index}>{capitalizeString(item.move.name)}</li>
                            })
                        }
                    </ul>
                </div> 
                : 
                <div className="pokemon-searcher__loader"/>
            }
        </div>
    )
}

export default PokemonSearcher;