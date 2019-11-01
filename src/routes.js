import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./pages/Login";
import User from "./pages/User";
import Food from "./pages/Food";
import Medicine from "./pages/Medicine";
import Water from "./pages/Water";
import ProviderFood from "./pages/ProviderFood";
import ProviderWater from "./pages/ProviderWater";
import ProviderMedicine from "./pages/ProviderMedicine";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      User,
      Food,
      Water,
      Medicine,
      ProviderFood,
      ProviderWater,
      ProviderMedicine
    },
    {
      initialRouteName: "Login",
      headerLayoutPreset: "center",
      headerBackTitleVisible: false,
      mode: "modal",
      defaultNavigationOptions: {
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#069"
        }
      }
    }
  )
);

export default Routes;
