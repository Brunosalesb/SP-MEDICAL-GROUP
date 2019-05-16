import React, { Component } from "react";
import { Text, Image, StyleSheet, View, FlatList } from "react-native";

class cadastrarConsulta extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../assets/img/add.jpg")}
                style={styles.tabNavigatorIconHome}
            />
        )
    };
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
    }
})



export default cadastrarConsulta;