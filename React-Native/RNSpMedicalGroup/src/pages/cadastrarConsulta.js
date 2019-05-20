import React, { Component } from "react";
import { Text, Image, StyleSheet, View, AsyncStorage, Picker } from "react-native";
import listarConsulta from "./listarConsulta";

class cadastrarConsulta extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../assets/img/add.jpg")}
                style={styles.tabNavigatorIconHome}
            />
        )
    };

    constructor() {
        super();
        this.state = {
          listaPacientes: [],
          IdProntuario: ''
        }
    }

    componentDidMount(){
        this.carregaPaciente();
    }

    carregaPaciente = async () => {
        const token = await AsyncStorage.getItem('userToken');
        
        fetch('http://192.16.5.46:5000/Prontuarios/Listar', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(resposta => resposta.json())
        .then(data => this.setState(({ listaPacientes : data })))
        .catch(erro => console.log(erro))
    };

    renderizaTemas = ({ item }) => (
        <Picker.Item label={item.nome} value={item.id} />
    );

    render(){
        return(
            <View>
                <View style={styles.barraTopo}></View>
                <View style={styles.alinhar}>
                    <Image
                    source={require("../assets/img/icon-login.png")}
                    style={styles.logo}
                    />
                <Text>{'Cadastrar consulta'.toUpperCase()}</Text>
                <View>
                <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={this.state.IdProntuario}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ IdProntuario: itemValue })}>
                        {this.state.listaPacientes.map((Element) => (
                            <Picker.Item label={Element.nome} value={Element.id} />
                        ))}
                </Picker>
                </View>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    tabNavigatorIconHome: {
        width: 30,
        height: 30
    },
    barraTopo: {
        height: 30,
        backgroundColor: "#99CC99"
    },
    alinhar: {
        alignItems: "center"
    },
    logo: {
        width: 50,
        height: 100,
        resizeMode: 'contain'
    },
    picker: {

        backgroundColor: "#99CC99",
        textAlign: "center",
        width: 300,
        marginTop: 20,
        borderBottomWidth: 3,
        borderBottomColor: "#677FA0",
        color: "white"
    }
})



export default cadastrarConsulta;