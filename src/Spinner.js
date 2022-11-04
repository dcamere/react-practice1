import React from 'react';
import './spinner.scss';

class Spinner extends React.Component {
  // state and props works at this scope
  
  constructor(props) {
    super(props);
    this.state = {
      currentValue: props.initialValue,
    }
    // console.log(this.state);
  }

  handleOperation = (operation) => {
    // if operation === true we are clicking PLUS, else we are clicking MINUS
    if (operation) {
      // If current value exceeds defined max, do nothing (break function)
      if (this.state.currentValue >= this.props.max) {
        return false;
      }
      this.setState({currentValue: this.state.currentValue + this.props.incrementBy})
    } else {
      // If current value exceeds defined min, do nothing (break function)
      if (this.state.currentValue <= this.props.min) {
        return false;
      }
      this.setState({currentValue: this.state.currentValue - this.props.incrementBy})
    }
  }

  handleOnChange = () => {
     
  };

  render () {
    return (
      <div className="spinner">
          <button 
            onClick={() => {
              this.handleOperation(false) 
            }} 
            className="spinner__minus"
          >
            -
          </button>
          <input 
            className="spinner__input" 
            type="number" 
            onChange={this.handleOnChange} 
            value={this.state.currentValue} 
          />
          <button 
            onClick={() => {
              this.handleOperation(true) 
            }} 
            className="spinner__plus"
          >
            +
          </button>
      </div>
    )
  }
}

export default Spinner;


// Crear archivo PokemonSearcher.js
// Crear archivo PokemonSearches.scss
// Vincular / importar el scss dentro del JS
// Poner el html del componente en el index.js (obviamente importarlo antes de..)
// Crear un componente stateful
// onClick del boton, agarrar el valor del input (useRef, googlealo o me preguntas si tienes problemas xd)
// hacer una función que haga el fetch pasándole como parámetro el valor del input
// En esa misma función, asignarle al state el valor de la respuesta de tu fetch
// En una caja adicional, solo vinculas el state