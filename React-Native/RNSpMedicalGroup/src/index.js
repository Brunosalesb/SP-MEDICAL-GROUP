import Cadastrar from './pages/cadastrarConsulta';
import Listar from './pages/listarConsulta';
import SignIn from './pages/signIn';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";

const AuthStack = createStackNavigator({ SignIn });

const consultaNavigator = createBottomTabNavigator(
  {
    Listar,
    //Cadastrar
  },
  {
      initialRouteName: "Listar",
      tabBarOptions: {
          showLabel: false,
          showIcon: true,
          inactiveBackgroundColor: "lightgray",
          activeBackgroundColor: "#99CC99",
          style: {
            height: 50
          }
      }
  }
);

//export default createAppContainer(consultaNavigator);

export default createAppContainer(
  createSwitchNavigator(
    {
      consultaNavigator,
      AuthStack
    },
    {
      initialRouteName: "AuthStack"
    }
  )
);
