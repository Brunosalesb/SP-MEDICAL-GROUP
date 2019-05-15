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
        resizeMode: 'contain',
        marginLeft: 30
    }
})


export default listarConsulta;