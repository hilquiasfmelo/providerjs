import React from "react";
import { WebView } from "react-native";

const ProviderMedicine = ({ navigation }) => (
  <WebView source={{ uri: "https://distribuidorabrasilmed.com.br/" }} />
);
// navigation.state.params.provider.website

ProviderMedicine.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.provider.name
});

export default ProviderMedicine;
