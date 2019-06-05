import React, { Component } from 'react';
import firebase from '../../services/firebase';
import '../../Assets/Css/Firebase.css';
import logo from '../../Assets/Img/icon-login.png';


export default class Firebase extends Component {

    constructor() {
        super();

        this.state = {
            listaMedicos: [],
            listaPacientes: [],
            Nome: '',
            Idade: '',
            Endereco: '',
            Doenca: '',
            Especialidade: ''
        }
    }

    listaPacientesRealTime() {
        firebase.firestore().collection("Pacientes")
            .onSnapshot((pacientes) => {
                let pacientesArray = [];

                pacientes.forEach((paciente) => {
                    pacientesArray.push({
                        Doenca: paciente.data().Doenca,
                        Endereco: paciente.data().Endereco,
                        Idade: paciente.data().Idade,
                        Nome: paciente.data().Nome
                    })
                })

                this.setState({ listaPacientes: pacientesArray }, () => {
                    console.log(this.state.listaPacientes);
                })
            })
    }

    listaMedicosRealTime() {
        firebase.firestore().collection("Medicos")
            .onSnapshot((medicos) => {
                let medicosArray = [];

                medicos.forEach((medico) => {
                    medicosArray.push({
                        Especialidade: medico.data().Especialidade,
                        Nome: medico.data().Nome
                    })
                })

                this.setState({ listaMedicos: medicosArray }, () => {
                    console.log(this.state.listaMedicos);
                })
            })
    }

    componentDidMount() {
        this.listaPacientesRealTime()
        this.listaMedicosRealTime();
    }

    atualizaEstado(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    cadastrarMedico(event) {
        event.preventDefault();

        firebase.firestore().collection("Medicos")
            .add({
                Nome: this.state.Nome,
                Especialidade: this.state.Especialidade
            })
            .then(() => {
                alert("Médico cadastrado")
            })
            .catch((erro) => {
                console.log('tag', erro)
            })
    }

    cadastrarPaciente(event) {
        event.preventDefault();

        firebase.firestore().collection("Pacientes")
            .add({
                Nome: this.state.Nome,
                Idade: this.state.Idade,
                Endereco: this.state.Endereco,
                Doenca: this.state.Doenca
            })
            .then(() => {
                alert("Paciente cadastrado")
            })
            .catch((erro) => {
                console.log('tag', erro)
            })
    }



    render() {
        return (
            <div className="fundo">
                <div className="medico">
                    <h2>Dados do medico</h2>
                    <ul className="listaUl">
                        {
                            this.state.listaMedicos.map((medico) => {
                                return (
                                    <li key={medico.id}>
                                        {medico.Nome} - {medico.Especialidade}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="paciente">
                    <h2>Dados do paciente</h2>
                    <ul className="listaUl">
                        {
                            this.state.listaPacientes.map((paciente) => {
                                return (
                                    <li key={paciente.id}>
                                        {paciente.Nome} - {paciente.Idade} anos - {paciente.Endereco} - {paciente.Doenca}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="medico2">
                    <h2>Cadastrar medico</h2>
                    <form onSubmit={this.cadastrarMedico.bind(this)}>
                        <div>
                            <input type='text' name="Nome" value={this.state.Nome} onChange={this.atualizaEstado.bind(this)} placeholder="Nome" />
                        </div>
                        <div>
                            <input type="text" name="Especialidade" value={this.state.Especialidade} onChange={this.atualizaEstado.bind(this)} placeholder="Especialidade" />
                        </div>
                        <div>
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>

                <div className="paciente2">
                    <h2>Cadastrar paciente</h2>
                    <form onSubmit={this.cadastrarPaciente.bind(this)}>
                        <div>
                            <input type='text' name="Nome" value={this.state.Nome} onChange={this.atualizaEstado.bind(this)} placeholder="Nome" />
                        </div>
                        <div>
                            <input type="text" name="Idade" value={this.state.Idade} onChange={this.atualizaEstado.bind(this)} placeholder="Idade" />
                        </div>
                        <div>
                            <input type="text" name="Endereco" value={this.state.Endereco} onChange={this.atualizaEstado.bind(this)} placeholder="Endereço" />
                        </div>
                        <div>
                            <input type="text" name="Doenca" value={this.state.Doenca} onChange={this.atualizaEstado.bind(this)} placeholder="Doença" />
                        </div>
                        <div>
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

//para converter endereço em lat e long, usar biblioteca react-geocode