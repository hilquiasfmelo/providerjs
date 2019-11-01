import React, { Component } from "react";

import Firebase from "../config/Firebase";
import back from "../assets/back.jpeg";

import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground
} from "react-native";

import Logo from "../assets/logo.png";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    mensagem: ""
  };

  login() {
    this.setState({ loading: true });

    const loginUserSucess = user => {
      this.props.navigation.navigate("User");
    };

    Firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(loginUserSucess)
      .catch(error => {
        if (error.code === "auth/user-not-found") {
          Alert.alert(
            "Usuário não encontrado",
            "Deseja criar um usuário com as informações inseridas?",
            [
              {
                text: "Não",
                onPress: () => console.log("Usuário não quer criar cadastro")
              },
              {
                text: "Sim",
                onPress: () => {
                  Firebase.auth()
                    .createUserWithEmailAndPassword(
                      this.state.email,
                      this.state.password
                    )
                    .then(loginUserSucess)
                    .catch(error =>
                      this.setState({ mensagem: this.getMensagem(error.code) })
                    );
                }
              }
            ],
            {
              cancelable: false
            }
          );
        } else {
          this.setState({ mensagem: this.getMensagem(error.code) });
        }
      })
      .then(() => {
        this.setState({ loading: false });
      });
  }

  getMensagem(codigoErro) {
    let msg = "";

    if (codigoErro === "auth/invalid-email") {
      msg = "Email inválido";
    } else if (codigoErro === "auth/user-disabled") {
      msg = "Usuário desabilitado";
    } else if (codigoErro === "auth/user-not-found") {
      msg = "Usuário não econtrado";
    } else if (codigoErro === "auth/wrong-password") {
      msg = "Senha inválida";
    } else {
      msg = "Aconteceu um erro inesperado";
    }

    return msg;
  }

  updateField(field, value) {
    this.setState({
      [field]: value
    });
  }

  renderBuntton() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" />;
    } else {
      return <Button title="Entrar" onPress={() => this.login()} />;
    }
  }

  renderMessage() {
    return (
      <View style={styles.message}>
        <Text style={styles.texto}>{this.state.mensagem}</Text>
      </View>
    );
  }

  render() {
    return (
      <ImageBackground source={back} style={styles.containerMain}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Image style={styles.logo} source={Logo} />

          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://img.icons8.com/ultraviolet/40/000000/new-post.png"
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Digite sua email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => this.updateField("email", value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://img.icons8.com/ultraviolet/40/000000/lock-2.png"
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Digite sua senha"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={value => this.updateField("password", value)}
            />
          </View>

          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.login()}
          >
            <Text style={styles.loginText}>Entrar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100
  },
  logo: {
    height: 160,
    width: 160,
    marginBottom: 61
  },
  inputContainer: {
    width: 300,
    height: 45,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 20,
    borderColor: "#069",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#069"
  },
  loginText: {
    color: "white"
  }
});
