import React ,{ Component } from 'react';
import logo from '../../Assets/Img/icon-login.png';
import banner from '../../Assets/Img/Mindful-Surgery-Banner.jpg';
import '../../Assets/Css/Listar.css';

class Listar extends Component{
    constructor(){
        super();
        this.state = {
            lista : []
        }
    }
      
      buscarConsultas(){
      let token = localStorage.getItem("smg-token");
      fetch('http://192.168.15.28:5000/api/Consultas/Listar',{
         method: 'GET',
         headers : {
           'Authorization': 'Bearer ' + token
         }
       })
         .then(resposta => resposta.json())
        .then(data => this.setState(({ lista : data })))
         .catch(erro => console.log(erro))
  }

    componentDidMount(){
        this.buscarConsultas();
    }
  

    render(){
        return(
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
            <a className="nav-link" href="cadastrar">Cadastrar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="listar">Listar</a>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Consulta
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="cadastrar">Cadastrar</a>
              <a className="dropdown-item" href="listar">Listar</a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  </div>
  <img src={banner} className="img-fluid" id="banner" alt="banner"></img>
  <h2 id="h2" className="text-center">Listar Consulta</h2>

<table className="table table-striped">
    <thead>
        <tr>
            <th>Paciente</th>
            <th>Médico</th>
            <th>Data</th>
            <th>Descrição</th>
            <th>Situação</th>
        </tr>
    </thead>
    <tbody>
        {
            this.state.lista.map(function(consulta){
                return(
                    <tr key={consulta.id}>
                        <td>{consulta.idProntuarioNavigation.nome}</td>
                        <td>{consulta.idMedicoNavigation.nome}</td>
                        <td>{consulta.dataDaConsulta}</td>
                        <td>{consulta.descricao}</td>
                        <td>{consulta.idSituacaoNavigation.nome}</td>
                    </tr>
                );
            })
        }
    </tbody>
</table>
<div id="footerListar">
    &copy; All rights reserved
</div>
</div>
        );
    }
}
export default Listar;