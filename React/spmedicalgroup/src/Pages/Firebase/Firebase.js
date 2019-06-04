import React, { Component } from 'react';
import firebase from '../../services/firebase';
import '../../Assets/Css/Firebase.css';

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
            </div>
        )
    }
}

//para converter endereço em lat e long, usar biblioteca react-geocode