import React from "react";
import { WebView } from "react-native";

const ProviderFood = ({ navigation }) => (
  <WebView source={{ uri: "https://www.martinsatacado.com.br/" }} />
);
// navigation.state.params.provider.website

ProviderFood.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.provider.name
});

export default ProviderFood;
