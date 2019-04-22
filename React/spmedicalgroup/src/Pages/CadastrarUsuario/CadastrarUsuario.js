import React, { Component } from 'react';
import '../../Assets/Css/CadastrarUsuario.css';
import logo from '../../Assets/Img/icon-login.png';

class CadastrarUsuario extends Component{

    constructor(){
        super();
        
        this.state = {
            email : "",
            senha : "",
            tipoUsuario : "",
        }
        
        this.atualizaEstadoEmail = this.atualizaEstadoEmail.bind(this);
        this.atualizaEstadoSenha = this.atualizaEstadoSenha.bind(this);
        this.atualizaEstadoTipoUsuario = this.atualizaEstadoTipoUsuario.bind(this);
    }
    
    atualizaEstadoEmail(event){
        this.setState({email : event.target.value});
    }
    atualizaEstadoSenha(event){
        this.setState({senha : event.target.value});
    }
    atualizaEstadoTipoUsuario(event){
        this.setState({tipoUsuario : event.target.value});
    }

    cadastraUsuario(event){
        event.preventDefault();
    fetch('http://localhost:5000/api/Usuarios/Cadastrar',{
        method : 'POST',
        body : JSON.stringify({email : this.state.email, senha : this.state.senha, IdTipoUsuario : this.state.tipoUsuario}),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    .then(response => response)
    .catch(erro => console.log(erro))
    }

    
render() {
    return (
      <nav>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
      <div className="barra-up"></div>
      <img src={logo} id="logo" className="rounded mx-auto d-block" alt="logo"></img>

      <form onSubmit={this.cadastraUsuario.bind(this)}>
        <div className="text-center" id="login">

          <div className="form-group">
            <input type="email" value={this.state.email} onChange={this.atualizaEstadoEmail} className="form-control" id="email" placeholder="Email"></input>
          </div>

            <div className="form-group">
                <input type="password" value={this.state.senha} onChange={this.atualizaEstadoSenha} className="form-control" id="senha" placeholder="Senha"></input>
            </div>

            <div id="paciente" className="form-check form-check-inline">
                <input className="form-check-input" type="radio" value={this.state.tipoUsuario} onClick={this.atualizaEstadoTipoUsuario} name="inlineRadioOptions" id="inlineRadio1" value="3"></input>
                <label className="form-check-label" htmlFor="inlineRadio1">Paciente</label>
            </div>
                    
                        <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" value={this.state.tipoUsuario} onClick={this.atualizaEstadoTipoUsuario} name="inlineRadioOptions" id="inlineRadio2" value="2"></input>
                <label className="form-check-label" htmlFor="inlineRadio2">Médico</label>
            </div>

                    <div ref="adm" className="form-check form-check-inline">
                <input className="form-check-input" type="radio" value={this.state.tipoUsuario} onClick={this.atualizaEstadoTipoUsuario} name="inlineRadioOptions" id="inlineRadio3" value="1"></input>
                <label className="form-check-label" htmlFor="inlineRadio2">Administrador</label>
            </div>

            </div>
            
            <div className="text-center" id="cadastrar">
              <button type="submit" id="botao" className="btn btn-secondary">Cadastrar</button>
            </div>
      </form>

      <script>
              if (localStorage.GetItem('tipoUsuario') != 'Administrador') {

            }
      </script>
      
        <div id="footer">
          &copy; All rights reserved
    </div>
    </nav>
    );
    }
}

export default CadastrarUsuario;