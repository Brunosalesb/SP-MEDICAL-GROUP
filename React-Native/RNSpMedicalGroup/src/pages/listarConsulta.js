import React, { Component } from "react";
import { Text, Image, StyleSheet, View, FlatList } from "react-native";

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
        const resposta = await Axios.get('http://192.168.5.46:5000/api/Consultas/Listar');
        const dadosDaApi = resposta.data;
        this.setState({listaDeConsultas : dadosDaApi});
    };


    render(){
        return(
            <View>
                <View style={styles.barraTopo}></View>
                    <Image
                    source={require("../assets/img/icon-login.png")}
                    style={styles.logo}
                    />
                <View style={styles.alinhar}>
                <Text>Listar Consulta</Text>
                <FlatList
                data={this.state.listaDeConsultas}
                keyExtractor={item => item.id}
                renderItem={this.renderizaItem}
                />
                </View>
            </View>
            
        );
    }

    renderizaItem = ({item}) => (
        <View>
            <Text>{item.IdProntuario}</Text>
        </View>
    )
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
        resizeMode: 'contain',
        marginLeft: 30
    }
})


export default listarConsulta;