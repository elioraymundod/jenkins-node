import React, { Component } from 'react';
import logo from './logo.svg';
import iphone from './Images/Iphone13.jpg';
import airpods from './Images/Airpods.jpg';
import xiaomi from './Images/xiaomi.jpg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sistema Administrador de Ventas</h1>
        </header>
        
        <nav id="navbar-example2" class="navbar navbar-light bg-light px-3" className="navbarclass">
          <a class="navbar-brand" href="#"></a>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading1">Pagina principal</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#scrollspyHeading2">Información de productos</a>
            </li>
            <li><a class="nav-link" href="#scrollspyHeading3">Contacto</a></li>
          </ul>
        </nav>


        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
          <h4 id="scrollspyHeading1"></h4>
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
          
          <h4 id="scrollspyHeading2"></h4>

          <div className="InfoProductos">
            <header className="App-header-productos">
              <h1 className="App-title">Información de Productos</h1>
            </header>

            <nav id="navbar-example2" class="navbar navbar-light bg-light px-3" className="navbarclass">
              
              <a class="navbar-brand" href="#"></a>
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="#scrollspyHeading1">Pagina principal</a>
                </li>
                <li><a class="nav-link" href="#scrollspyHeading3">Contacto</a></li>
              </ul>
            </nav>
            <br/>
            <div className="App-info"><br></br><br></br>
              <img src={iphone} className="App-Iphone"/>        
              <img src={airpods} className="App-Airpods"/>  
              <p className="App-texto-iphone" data-toggle="modal" data-target="#iphone">Iphone 13 Pro</p>        
              <p className="App-texto-airpods" data-toggle="modal" data-target="#airpods">Airpods Pro</p> 
              <img src={xiaomi} className="App-xiaomi"/> 
              <p className="App-texto-xiaomi" data-toggle="modal" data-target="#xiaomi">Xiaomi MI 11</p> 
            </div>

            <br/><br/><br/><br/><br/>
          </div>
          
          <h4 id="scrollspyHeading3"></h4>
          <div className="contacto">
            <header className="App-header-productos">
              <h1 className="App-title">Contacto</h1>
            </header>

            <nav id="navbar-example2" class="navbar navbar-light bg-light px-3" className="navbarclass">
              <a class="navbar-brand" href="#"></a>
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" href="#scrollspyHeading1">Pagina principal</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#scrollspyHeading2">Información de productos</a>
                </li>
              </ul>
            </nav>

            <br/>

            <div className="App-info"><br></br><br></br>
                 
            </div>
          </div>

        </div>
        <div className="App-footer">
          <p>Universidad Mariano Galvez de Guatemala, Todos los derechos reservados, 2021</p>
        </div>  


        <div class="modal fade" id="iphone" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><b>Iphone 13 Pro</b></h5>
              </div>
              <div class="modal-body">
                <p>Color grafito, color oro, color plata, azul Sierra</p>
                <p>Frente de Ceramic Shield</p>
                <p>512 GB</p>
                <p>Pantalla Super Retina XDR con ProMotion</p>
                <p>Resolución de 2532 x 1170 pixeles a 460 ppi</p>
                <p><b>A tan solo Q.9500.03</b></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Ok</button>
              </div>
            </div>
          </div>
        </div>      

        <div class="modal fade" id="airpods" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><b>Airpods Pro</b></h5>
              </div>
              <div class="modal-body">
                <p>Color blanco</p>
                <p>Cancelación Activa de Ruido</p>
                <p>Dos micrófonos con tecnología beamforming</p>
                <p>Chip H1 para audífonos</p>
                <p>Resistentes al agua y al sudor (IPX4)</p>
                <p><b>A tan solo Q.1200.07</b></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Ok</button>
              </div>
            </div>
          </div>
        </div>   

        <div class="modal fade" id="xiaomi" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><b>Xiaomi MI 11 Lite</b></h5>
              </div>
              <div class="modal-body">
                <p>Color grafito, color oro, color plata, azul Sierra</p>
                <p>Pantalla 6.55</p>
                <p>Android 11</p>
                <p>Procesador Octa-core 2.4 GHz</p>
                <p>Camara de 64 MP</p>
                <p><b>A tan solo Q.3500.01</b></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Ok</button>
              </div>
            </div>
          </div>
        </div>   
      </div>

      
    );
  }

  test(){
    console.log('hola mundo')
  }
}

export default App;
