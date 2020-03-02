import React from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitud: 0,
      texto: "",

      lista: [
       
      ]
    }
  }

  calculaLongitud = (event) => {
    console.log(event.target.value)
    let numerocarac = event.target.value.length;
    let textoAreaDividido = event.target.value.split(" ");
    let numeroPalabras = textoAreaDividido.length;
    let total = numerocarac - numeroPalabras + 1;

    let arraytext = event.target.value.split("");
    this.setState({
      longitud: total,
      texto: event.target.value,
      lista:arraytext
    })

  }

  deletePersonHandler = (personIndex) => {
    //console.log(personIndex);                
    const newlista = [...this.state.lista];
    newlista.splice(personIndex, 1);
    this.setState({ lista: newlista });

    this.setState({ texto: newlista.toString() });
    
  }




  render() {
   
    let lista = null;
    lista = (
      <div>
        {this.state.lista.map((text, index) => {
          return <CharComponent
            click={() => this.deletePersonHandler(index)}
            caracter={text}
            key={text.caracter} />
        })}
      </div>
    );

    return (
      <div className="App">
        <h1>Ejercicio React 2</h1>
        <p>Jokin Sanchez</p>
        <input type="text" onChange={this.calculaLongitud} />
        {this.state.longitud}

        <ValidationComponent
          long={this.state.longitud}
        />

        {lista}
      </div>
    );

  }
}

export default App;
