import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import api from "../services/api";


class signIn extends Component {
    static navigationOptions = {
        header: null
      };

      constructor(props) {
        super(props);
        this.state = { email: "", senha: "" };
      }

      realizarLogin = async () => {
          const resposta = await api.post('http://192.168.5.46:5000/api/Login',{
              email: this.state.email,
              senha: this.state.senha
          })

          const token = resposta.data.token;
          await AsyncStorage.setItem("userToken",token);
          this.props.navigation.navigate("consultaNavigator");
        };

        render() {
            return (
            <ImageBackground style={styles.fundo} source={require('../assets/img/fundo.jpg')}>
                <View>
                    <View style={styles.centralizarInput}>
                    <Image style={styles.logo} source={require('../assets/img/icon-login.png')}></Image>
                  <TextInput
                  style={styles.email}
                    placeholder="email"
                    placeholderTextColor="#FFFFFF"
                    underlineColorAndroid="#FFFFFF"
                    onChangeText={email => this.setState({ email })}
                  />
        
                  <TextInput
                  style={styles.senha}
                    placeholder="senha"
                    placeholderTextColor="#FFFFFF"
                    password="true"
                    underlineColorAndroid="#FFFFFF"
                    onChangeText={senha => this.setState({ senha })}
                    />
                   <TouchableOpacity
                   style={styles.botao}
                    onPress={this.realizarLogin}
                    >
                    <Text>LOGIN</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                  </ImageBackground>
            );
        }
    }
            const styles = StyleSheet.create({
                fundo: {
                   height: '100%',
                   width: '100%'
                },
                logo: {
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                    marginBottom: 170
                },
                centralizarInput: {
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                email: {
                    width:"50%"
                },
                senha: {
                    width:"50%"
                },
                botao: {
                }
            })
export default signIn;