import React, { Component } from 'react';
import '../../Assets/Css/Cadastrar.css';
import logo from '../../Assets/Img/icon-login.png';
import banner from '../../Assets/Img/Mindful-Surgery-Banner.jpg';

class CadastrarConsulta extends Component {
  constructor() {
    super();
    this.state = {
      listaPacientes: [],
      listaMedicos: [],
      nome: "",
      DataDaConsulta: ""
    }

    this.atualizaNomeProntuario = this.atualizaNomeProntuario.bind(this);
    this.atualizaNomeMedico = this.atualizaNomeMedico.bind(this);
    this.atualizaDataConsulta = this.atualizaDataConsulta.bind(this);
  }

  atualizaNomeProntuario(event) {
    this.setState({ nome: event.target.value })
  }
  atualizaNomeMedico(event) {
    this.setState({ nome: event.target.value })
  }
  atualizaDataConsulta(event) {
    this.setState({ DataDaConsulta: event.target.value })
  }

  cadastraConsulta(event) {
    event.preventDefault();
    let token = localStorage.getItem("smg-token");
    console.log('cadastrar')
    fetch('http://localhost:5000/api/Consultas/Cadastrar', {
      method: 'POST',
      body: JSON.stringify({ IdProntuario: this.state.prontuario, IdMedico: this.state.medico, DataDaConsulta: this.state.data }),
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token
      }
    })
      .then(response => response)
      .catch(erro => console.log(erro))
  }

  buscarPacientes() {
    let token = localStorage.getItem("smg-token");
    fetch('http://localhost:5000/api/Prontuarios/Listar', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(resposta => resposta.json())
      .then(data => this.setState(({ listaPacientes: data })))
      .catch(erro => console.log(erro))
  }

  buscarMedicos() {
    let token = localStorage.getItem("smg-token");
    fetch('http://localhost:5000/api/Medicos/Listar', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(resposta => resposta.json())
      .then(data => this.setState(({ listaMedicos: data })))
      .catch(erro => console.log(erro))
  }

  componentDidMount() {
    this.buscarMedicos();
    this.buscarPacientes();
  }

  render() {
    return (
      <div>
        <div>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossOrigin="anonymous"></script>
        </div>

        <div className="barra-up"></div>

        <div className="container-fluid">
          <img src={logo} className="logo" alt="logo"></img>
          <nav className="navbar navbar-expand-lg navbar-light bg-green" id="nav">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav" id="links">
                <li className="nav-item">
                  <a className="nav-link" href="#">Clinica</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Prontuario</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Consulta
            </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="./Cadastrar.html">Cadastrar</a>
                    <a className="dropdown-item" href="./Listar.html">Listar</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <img src={banner} className="img-fluid" id="banner" alt="banner clinica"></img>
        <h2 id="h2" className="text-center">Cadastrar Consulta</h2>

        <form onSubmit={this.cadastraConsulta.bind(this)}>
          <div className="text-center">
            <div className="form-group" id="barraPaciente">
              <label htmlFor="exampleFormControlSelect1">Nome do paciente</label>
              <select className="form-control" id="exampleFormControlSelect1">
                {
                  this.state.listaPacientes.map(function (paciente) {
                    return (
                      <option key={paciente.id} value={paciente.id} onChange={paciente.atualizaNomeProntuario}>{paciente.nome}</option>
                    );
                  })
                }
              </select>
            </div>

            <div className="form-group" id="barraMedico">
              <label htmlFor="exampleFormControlSelect1">Médico responsável</label>
              <select className="form-control" id="exampleFormControlSelect1">
                {
                  this.state.listaMedicos.map(function (medico) {
                    return (
                      <option key={medico.id} value={medico.id} onChange={medico.atualizaNomeMedico}>{medico.nome}</option>
                    );
                  })
                }
              </select>
            </div>

            <label htmlFor="example-datetime-local-input" className="col-2 col-form-label">Data</label>

            <div className="form-group row" id="barraData">
              <div className="col-10">
                <input className="form-control" type="datetime" value={this.state.DataDaConsulta} onChange={this.atualizaDataConsulta} id="example-datetime-local-input"></input>
              </div>
            </div>
            <button type="submit" className="btn btn-secondary" id="botao">Cadastrar</button>
          </div>
        </form>

        <div id="footerCadastrar">
          &copy; All rights reserved
    </div>
      </div>
    );
  }
}

export default CadastrarConsulta;