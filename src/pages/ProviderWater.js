import React from "react";
import { WebView } from "react-native";

const ProviderWater = ({ navigation }) => (
  <WebView source={{ uri: "https://www.ambev.com.br/" }} />
);
// navigation.state.params.provider.website

ProviderWater.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.provider.name
});

export default ProviderWater;
