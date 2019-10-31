

import React from 'react';
// Estados: son parecidos a las propiedades (son inmutables no pueden cambiar) de los componentes, como las propiedaes no puedes cambiar, los estados si son variables pero además son completamente encapsulados al componente que le corresponde.
class Saludo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: 'Alexander' // los más común es que los estados cambien a través de eventos
    }
  }

  despedirse = () => {
    this.setState({
      nombre: 'Sergio'
    })
  };
  render() {
    return (
      <h1 onClick={this.despedirse}>Hola {this.state.nombre} esta es una prueba de estados</h1>
    )
  }
}

export default Saludo;