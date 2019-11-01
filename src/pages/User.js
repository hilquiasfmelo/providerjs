import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  Image
} from "react-native";

import Logo from "../assets/logo.png";
import Back from "../assets/back.jpeg";

export default class User extends Component {
  handleSubmitFood() {
    this.props.navigation.navigate("Food");
  }

  handleSubmitWater() {
    this.props.navigation.navigate("Water");
  }

  handleSubmitMedicine() {
    this.props.navigation.navigate("Medicine");
  }

  render() {
    return (
      <>
        <ImageBackground style={styles.containerMain} source={Back}>
          <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />

            <Text style={styles.textChoice}>SELECIONE UM FORNECEDOR:</Text>

            <TouchableOpacity
              style={styles.buttom}
              onPress={() => this.handleSubmitFood()}
            >
              <Text style={styles.buttomText}>ALIMENTOS</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttom}
              onPress={() => this.handleSubmitWater()}
            >
              <Text style={styles.buttomText}>BEBIDAS</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttom}
              onPress={() => this.handleSubmitMedicine()}
            >
              <Text style={styles.buttomText}>MEDICAMENTOS</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </>
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
    marginBottom: 80
  },
  buttom: {
    height: 45,
    width: 300,
    backgroundColor: "#069",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  buttomText: {
    color: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  logo: {
    height: 160,
    width: 160,
    marginBottom: 50
  },
  textChoice: {
    alignItems: "stretch",
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "bold"
  }
});
