import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import NaoEncontrada from "./Pages/NaoEncontrada/NaoEncontrada";
import App from './Pages/App/App';
import CadastrarUsuario from './Pages/CadastrarUsuario/CadastrarUsuario';
import CadastrarConsulta from './Pages/CadastrarConsulta/CadastrarConsulta';
import Firebase from './Pages/Firebase/Firebase';
import Listar from './Pages/Listar/Listar';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import {usuarioAutenticado} from './services/auth';
import {usuarioAutenticadoAdm} from './services/auth';

const Permissao = ({component : Component}) => (
    <Route
    render = {props => usuarioAutenticado() ?
        (<Component {...props} />) :
        (<Redirect to={{pathname :  '/',state : {from : props.location}}}/>)
    }
    />
)
;
const PermissaoAdm = ({component : Component}) => (
    <Route
    render = {props => usuarioAutenticadoAdm() ?
        (<Component {...props} />) :
        (<Redirect to={{pathname :  '/consulta/listar',state : {from : props.location}}}/>)
    }
    />
);

const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/usuario/cadastrar" component={CadastrarUsuario}/>
                <PermissaoAdm exact path="/firebase" component={Firebase}/>
                <PermissaoAdm path="/consulta/cadastrar" component={CadastrarConsulta}/>
                <Permissao path="/consulta/listar" component={Listar}/>
                <Route component={NaoEncontrada}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(rotas, document.getElementById('root'));
serviceWorker.unregister();