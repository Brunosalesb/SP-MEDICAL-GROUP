import React, { Component } from "react";
import { Text, Image, StyleSheet, View, FlatList } from "react-native";

class cadastrarConsulta extends Component {
    render(){
        return(
            <View>
            <Text style={styles.titulo}>{"Desenvolvedor".toUpperCase()}</Text>
            <Text style={styles.nome}>{"Nome: Bruno Sales Bernardes"}</Text>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    titulo: {
        textAlign: "center",
        marginTop: 20
    },
    nome: {
        textAlign: "center",
        marginTop: 120
    },
    dados: {
        textAlign: "center",
        marginTop: 8
    }
})


export default cadastrarConsulta;