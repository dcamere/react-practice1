import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Spinner from './Spinner'
import PokemonSearcher from './PokemonSearcher/PokemonSearcher';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <PokemonSearcher defaultPokemon="charizard" />
    </div>
    {/* <Spinner initialValue={5} incrementBy={1} min={1} max={10}/>
    <Spinner initialValue={100} incrementBy={100} min={0} max={1000}/>
    <Spinner initialValue={50} incrementBy={50} min={0} max={100}/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
