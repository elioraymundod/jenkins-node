import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Sistemas Operativos</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body id="page-top">
        <!-- Menu-->
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">Sistema Administrador de Ventas</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="Productos.html">Información de Productos</a></li>
                    </ul>
                </div>
            </div>
        </nav>
		
        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <!-- Imagen principal-->
                <img class="masthead-avatar mb-5" src="assets/img/s.svg" alt="..." />
                <!-- Masthead Heading-->
                <h1 class="masthead-heading text-uppercase mb-0">Administración de Ventas</h1>
                <!-- Icon Divider-->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Masthead Subheading-->
                <p class="masthead-subheading font-weight-light mb-0">Gabriela - Débora - Raúl - Elio</p>
            </div>
        </header>
        
        <!-- Sección Visión-->
        <section class="page-section" id="contact">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Visión</h2>
                <!-- Icono divisor-->
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div class="row">
								<div class="col-lg-4 ms-auto"><p class="lead">Somos una empresa líder en productos de tecnología e innovación, buscamos ayudar a las personas a adquirir los últimos productos en tecnología.</p></div>
								<div class="col-lg-4 me-auto"><p class="lead">Somos un excelente lugar para trabajar, en donde nuestro personal puede desarrollar sus habilidades y actitudes dando lo mejor de sí para crecer juntos.</p></div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
		
		 <!-- Sección Misión-->
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-white">Misión</h2>
                <!-- Icono divisor-->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ms-auto"><p class="lead">Brindar a través de nuestros productos la mejor satisfacción a todos nuestros clientes.</p></div>
                    <div class="col-lg-4 me-auto"><p class="lead">Brindar los mejores productos del mercado a los mejores precios del mercado a nuestra clientela.	</p></div>
                </div>
            </div>
        </section>
		
		<!-- Sección Objetivos-->
        <section class="page-section" id="contact">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Objetivos</h2>
                <!-- Icono divisor-->
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div class="row">
								<p class="lead">•	Ser la empresa lider en tecnología de Guatemala.</p>
								<p class="lead">•	Tener varias sucursales en los diferentes departamentos de Guatemala.</p>
								<p class="lead">•	Proveer empleo a los guatemaltecos más necesitados.</p>
								<p class="lead">•	Contribuir al desarrollo tecnológico de Guatemala.</p>
								<p class="lead">•	Crear productos innovadores en el mundo tecnológico.</p>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
		
        
        <!-- Sección de Copyright-->
        <div class="copyright py-4 text-center text-white">
            <div class="container"><small>Copyright &copy; Todos los derechos reservados, Universidad Mariano Gálvez 2021</small></div>
        </div>
        
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <!-- * *                               SB Forms JS                               * *-->
        <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
    );
  }
}

export default App;
