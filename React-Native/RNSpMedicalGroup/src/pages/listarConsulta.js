import React, { Component } from "react";
import { Text, Image, StyleSheet, View, FlatList, AsyncStorage, Button } from "react-native";
import api from "../services/api";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';

class listarConsulta extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../assets/img/lista.jpg")}
                style={styles.tabNavigatorIconHome}
            />
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            listaDeConsultas: []
        }
    }

    componentDidMount(){
        this.carregaConsultas();
    }

    carregaConsultas = async () => {
        // const resposta = await api.get('http://192.168.5.46:5000/api/Consultas/Listar');
        // const dadosDaApi = resposta.data;
        // this.setState({listaDeConsultas : dadosDaApi});
        
            const token = await AsyncStorage.getItem('userToken');
        
        fetch('http://192.168.5.46:5000/api/Consultas/Listar', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(resposta => resposta.json())
        .then(data => this.setState(({ listaDeConsultas : data })))
        .catch(erro => console.log(erro))
    };


    render(){
        return(
            <View>
                <View style={styles.barraTopo}>
                    <Icon style={styles.sair} size={24} name="md-exit" onPress={this.logout}></Icon>
                </View>
                <View style={styles.alinhar}>
                    <Image
                    source={require("../assets/img/icon-login.png")}
                    style={styles.logo}
                    />
                <Text style={styles.titulo}>{'Lista de consultas'.toUpperCase()}</Text>
                </View>
                <FlatList
                  onEndReachedThreshold={0.1}
                contentContainerStyle={styles.contentContainer}
                style={styles.flatlist} 
                data={this.state.listaDeConsultas}
                keyExtractor={item => item.id.toString()}
                renderItem={this.renderizaItem}
                />
            </View>
            
        );
    }

    logout = async() => {
        await AsyncStorage.clear();
        this.props.navigation.navigate("AuthStack");
    }

    renderizaItem = ({item}) => (
        <View style={styles.lista}>
            <Text style={styles.paciente}>{"Paciente: "}{item.idProntuarioNavigation.nome}</Text>
            <Text style={styles.medico}>{"Médico: "}{item.idMedicoNavigation.nome}</Text>
            <Text style={styles.descricao}>{"Descricao: "}{item.descricao}</Text>
            <Text style={styles.situacao}>{"Situação: "}{item.idSituacaoNavigation.nome}</Text>
            <Text style={styles.data}>{"Data: "}{item.dataDaConsulta}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tabNavigatorIconHome: {
        width: 30,
        height: 30
    },
    barraTopo: {
        height: 25,
        backgroundColor: "#99CC99",
        flexDirection: 'row-reverse'
    },
    alinhar: {
        alignItems: "center"
    },
    logo: {
        width: 50,
        height: 100,
        resizeMode: 'contain'
    },
    lista: {
        marginTop: 50,
        width: "80%"
    },
    contentContainer: {
        alignItems: 'center'
    },
    paciente: {
        maxWidth: "50%",
        fontSize: 15
    },
    medico: {
        maxWidth: "50%",
        fontSize: 15
    },
    descricao: {
        maxWidth: "50%",
        fontSize: 15
    },
    situacao: {
        maxWidth: "50%",
        fontSize: 15
    },
    data: {
        maxWidth: "50%",
        fontSize: 15
    },
    sair: {
        paddingRight: 20
    }
})


export default listarConsulta;