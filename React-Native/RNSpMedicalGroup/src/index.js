import Cadastrar from './pages/cadastrarConsulta';
import Listar from './pages/listarConsulta';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const consultaNavigator = createBottomTabNavigator(
  {
      Cadastrar,
      Listar
  },
  {
      initialRouteName: "Cadastrar",
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

export default createAppContainer(consultaNavigator);