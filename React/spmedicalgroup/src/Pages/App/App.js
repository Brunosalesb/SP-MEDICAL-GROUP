import React, { Component } from 'react';
import '../../Assets/Css/App.css';
import logo from '../../Assets/Img/icon-login.png';
import Axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state ={
      email : '',
      senha :''
    }
  }

atualizaEstadoEmail(event){
    this.setState({email : event.target.value});
}
atualizaEstadoSenha(event){
    this.setState({senha : event.target.value});
}

efetuaLogin(event){
  event.preventDefault();
  Axios.post('http://192.168.56.1:5000/api/login',{
    email : this.state.email,
    senha : this.state.senha
  })
  .then(data => {
    localStorage.setItem("smg-token", data.data.token);
    this.props.history.push('/cadastrar');
    console.log(data);
  })
  .catch(erro => {
    console.log(erro);
  })
}


  render() {
    return (
      <nav>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <div class="barra-up"></div>
      <img src={logo} id="logo" class="rounded mx-auto d-block" alt="logo"></img>

      <form onSubmit={this.efetuaLogin.bind(this)}>
        <div class="text-center" id="login">

          <div class="form-group">
            <input type="email" value={this.state.email} onChange={this.atualizaEstadoEmail.bind(this)} class="form-control" id="email" placeholder="Email"></input>
          </div>

            <div class="form-group">
              <input type="password" value={this.state.senha} onChange={this.atualizaEstadoSenha.bind(this)} class="form-control" id="senha" placeholder="Senha"></input>
            </div>
              <button type="submit" id="botao" class="btn btn-secondary">Entrar</button>

        </div>
      </form>

        <div id="footer">
          &copy; All rights reserved
    </div>
    </nav>
        );
      }
    }
    
    export default App;
