import React, { Component } from 'react';
import '../../Assets/Css/Cadastrar.css';
import logo from '../../Assets/Img/icon-login.png';
import banner from '../../Assets/Img/Mindful-Surgery-Banner.jpg';

class Cadastrar extends Component{
    render(){
        return(
    <body>
      <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script> 
    </head>

    <div class="barra-up"></div>

    <div class="container-fluid">
    <img src={logo} class="logo" alt="logo"></img>
    <nav class="navbar navbar-expand-lg navbar-light bg-green" id="nav">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav" id="links">
          <li class="nav-item">
            <a class="nav-link" href="#">Clinica</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Prontuario</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Consulta
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="./Cadastrar.html">Cadastrar</a>
              <a class="dropdown-item" href="./Listar.html">Listar</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  
  <img src={banner} class="img-fluid" id="banner" alt="banner clinica"></img>
  <h2 id="h2" class="text-center">Cadastrar Consulta</h2>

  <div class="text-center">
    <div class="form-group" id="barraPaciente">
      <label for="exampleFormControlSelect1">Nome do paciente</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>Pedro Alves</option>
        <option>Beatriz Porto</option>
      </select>
    </div>

    <div class="form-group" id="barraMedico">
      <label for="exampleFormControlSelect1">Médico responsável</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>Doutor Paulo Rodriguez</option>
        <option>Doutora Rafaela Santos</option>
      </select>
    </div>

    <label for="example-datetime-local-input" class="col-2 col-form-label">Data</label>
    
    <div class="form-group row" id="barraData">
    <div class="col-10">
        <input class="form-control" type="datetime" id="example-datetime-local-input"></input>
    </div>
    </div>
        <button type="submit" class="btn btn-secondary" id="botao">Cadastrar</button>
    </div>

    <div id="footerCadastrar">
    &copy; All rights reserved
    </div>
    </body>
        );
    }
}

export default Cadastrar;