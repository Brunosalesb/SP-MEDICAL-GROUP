import React, { Component } from 'react';
import firebase from '../../services/firebase';
import '../../Assets/Css/Firebase.css';
import Axios from 'axios';

export default class Firebase extends Component {

    constructor() {
        super();

        this.state = {
            listaMedicos: [],
            listaPacientes: [],
            id: '',
            NomeMedico: '',
            NomePaciente: '',
            Idade: '',
            Endereco: '',
            Doenca: '',
            Especialidade: ''
        }
    }



    componentDidMount() {
        this.listaPacientesRealTime();
        this.listaMedicosRealTime();
        this.geocode();
    }

    atualizaEstado(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    limparFormulario() {
        this.setState({
            NomeMedico: '',
            NomePaciente: '',
            Idade: '',
            Endereco: '',
            Doenca: '',
            Especialidade: ''
        })
    }


    listaPacientesRealTime() {
        firebase.firestore().collection("Pacientes")
            .onSnapshot((pacientes) => {
                let pacientesArray = [];

                pacientes.forEach((paciente) => {
                    pacientesArray.push({
                        id: paciente.id,
                        Doenca: paciente.data().Doenca,
                        Endereco: paciente.data().Endereco,
                        Idade: paciente.data().Idade,
                        NomePaciente: paciente.data().NomePaciente
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
                        id: medico.id,
                        Especialidade: medico.data().Especialidade,
                        NomeMedico: medico.data().NomeMedico
                    })
                })

                this.setState({ listaMedicos: medicosArray }, () => {
                    console.log(this.state.listaMedicos);
                })
            })
    }


    cadastrarMedico(event) {
        event.preventDefault();

        firebase.firestore().collection("Medicos")
            .add({
                NomeMedico: this.state.NomeMedico,
                Especialidade: this.state.Especialidade
            })
            .then(() => {
                alert("Médico cadastrado")
                this.limparFormulario();
            })
            .catch((erro) => {
                console.log('tag', erro)
            })
    }

    cadastrarPaciente(event) {
        event.preventDefault();

        firebase.firestore().collection("Pacientes")
            .add({
                NomePaciente: this.state.NomePaciente,
                Idade: this.state.Idade,
                Endereco: this.state.Endereco,
                Doenca: this.state.Doenca
            })
            .then(() => {
                alert("Paciente cadastrado")
                this.limparFormulario();
            })
            .catch((erro) => {
                console.log('tag', erro)
            })
    }


    excluirPorIdMedico(event) {
        event.preventDefault();

        if (window.confirm("Deseja excluir o documento realmente, não vai ter volta, tome cuidado!")) {
            firebase.firestore().collection("Medicos")
                .doc(event.target.id)
                .delete()
                .then(() => {
                    alert("Excluído com sucesso!");
                })
        }
    }

    excluirPorIdPaciente(event) {
        event.preventDefault();

        if (window.confirm("Deseja excluir o documento realmente, não vai ter volta, tome cuidado!")) {
            firebase.firestore().collection("Pacientes")
                .doc(event.target.id)
                .delete()
                .then(() => {
                    alert("Excluído com sucesso!");
                })
        }
    }



    geocode() {
        var location = this.state.Endereco;
        Axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: location,
                key: 'AIzaSyBYsRGA0hHYEZhpw1tJqGzu6tk66AP9QNY'
            }
        })

            .then(function (Response) {
                console.log(Response);
                console.log("Endereço: ", Response.data.results[0].formatted_address);
                console.log("latitude: ", Response.data.results[0].geometry.location.lat);
                console.log("longitude: ", Response.data.results[0].geometry.location.lng);
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    render() {
        return (
            <div className="fundo">
                <h1>Informações - pacientes e médicos</h1>
                <div className="medico">
                    <table className="tableMedico">
                        <thead>
                            <tr>
                                <th>Médico</th>
                                <th>Especialidade</th>
                            </tr>
                        </thead>
                        {
                            this.state.listaMedicos.map((medico) => {
                                return (

                                    <tbody key={medico.id}>
                                        <tr key={medico.id}>
                                            <td>{medico.NomeMedico}</td>
                                            <td> {medico.Especialidade}</td>
                                            <td className="delMedico" >
                                                <button className="delMedico" id={medico.id} onClick={this.excluirPorIdMedico.bind(this)}>X</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>

                <div className="paciente">
                    <table className="tablePaciente">
                        <thead>
                            <tr>
                                <th>Paciente</th>
                                <th>Idade</th>
                                <th>Latitude e longitude</th>
                                <th>Doença</th>
                            </tr>
                        </thead>
                        {
                            this.state.listaPacientes.map((paciente) => {
                                return (
                                    <tbody key={paciente.id}>
                                        <tr key={paciente.id}>
                                            <td>{paciente.NomePaciente}</td>
                                            <td>{paciente.Idade} anos</td>
                                            <td>{paciente.Endereco}</td>
                                            <td>{paciente.Doenca}</td>
                                            <td className="delPaciente">
                                                <button className="delPaciente" id={paciente.id} onClick={this.excluirPorIdPaciente.bind(this)}>X</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>

                <div className="medico2">
                    <h3>Cadastrar médico</h3>
                    <form onSubmit={this.cadastrarMedico.bind(this)}>
                        <div>
                            <input type='text' required name="NomeMedico" value={this.state.NomeMedico} onChange={this.atualizaEstado.bind(this)} placeholder="Nome" />
                        </div>
                        <div>
                            <input type="text" required name="Especialidade" value={this.state.Especialidade} onChange={this.atualizaEstado.bind(this)} placeholder="Especialidade" />
                        </div>
                        <div className="cadastrarMedico">
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>

                <div className="paciente2">
                    <h3>Cadastrar paciente</h3>
                    <form onSubmit={this.cadastrarPaciente.bind(this)}>
                        <div>
                            <input type='text' required name="NomePaciente" value={this.state.NomePaciente} onChange={this.atualizaEstado.bind(this)} placeholder="Nome" />
                            <input type="text" required name="Idade" value={this.state.Idade} onChange={this.atualizaEstado.bind(this)} placeholder="Idade" />
                            <div>
                                <input type="text" required name="Endereco" value={this.state.Endereco} onChange={this.atualizaEstado.bind(this)} placeholder="Endereço" />
                                <input type="text" required name="Doenca" value={this.state.Doenca} onChange={this.atualizaEstado.bind(this)} placeholder="Doença" />
                            </div>
                            <div className="cadastrarPaciente">
                                <button type="submit">Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}   