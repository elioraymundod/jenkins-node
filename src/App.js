import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sistema Administrador de Ventas</h1>
        </header>

        <div className="App-white">
          <h1 className="App-vision">Visión</h1>
          <p className="App-intro">
            Somos una empresa líder en productos de tecnología e innovación, 
          </p>
          <p className="App-intro">
            buscamos ayudar a las personas a adquirir los últimos productos en tecnología.
          </p>
          <p className="App-intro">
            Somos un excelente lugar para trabajar, en donde nuestro personal puede desarrollar sus habilidades y actitudes
          </p>
          <p className="App-intro">
          dando lo mejor de sí para crecer juntos.
          </p>
        </div>

        <hr></hr>
        <div className="App-white "><br></br><br></br><br></br>
        <h1 className="App-vision">Misión</h1>
          <p className="App-intro">
            Brindar a través de nuestros productos la mejor satisfacción a todos nuestros clientes.
          </p>
          <p className="App-intro">
          Brindar los mejores productos del mercado a los mejores precios del mercado a nuestra clientela.
          </p>
        </div>

        <hr></hr>
        <div className="App-white "><br></br><br></br><br></br>
        <h1 className="App-vision">Objetivos</h1>
          <p className="App-intro">
          •	Ser la empresa lider en tecnología de Guatemala.
          </p>
          <p className="App-intro">
          •	Tener varias sucursales en los diferentes departamentos de Guatemala.
          </p>
          <p className="App-intro">
          •	Proveer empleo a los guatemaltecos más necesitados.
          </p>
          <p className="App-intro">
          •	Contribuir al desarrollo tecnológico de Guatemala.
          </p>
          <p className="App-intro">
          •	Crear productos innovadores en el mundo tecnológico.
          </p>
        </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        <div className="App-footer">
          <p>Universidad Mariano Galvez de Guatemala, Todos los derechos reservados, 2021</p>
        </div>
        
      </div>
    );
  }
}

export default App;
