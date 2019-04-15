import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import NaoEncontrada from "./Pages/NaoEncontrada/NaoEncontrada";
import App from './Pages/App/App';
import Cadastrar from './Pages/Cadastrar/Cadastrar';
import Listar from './Pages/Listar/Listar';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import {usuarioAutenticado} from './services/auth';

const Permissao = ({component : Component}) => (
    <Route
    render = {props => usuarioAutenticado() ?
        (<Component {...props} />) :
        (<Redirect to={{pathname :  '/',state : {from : props.location}}}/>)
    }
    />
);

const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Permissao path="/cadastrar" component={Cadastrar}/>
                <Permissao path="/listar" component={Listar}/>
                <Route component={NaoEncontrada}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(rotas, document.getElementById('root'));
serviceWorker.unregister();