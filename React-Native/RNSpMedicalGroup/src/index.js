import cadastroConsulta from './pages/cadastrarConsulta';
import listaConsulta from './pages/listarConsulta';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const consultaNavigator = createBottomTabNavigator(
  {
      cadastroConsulta,
      listaConsulta
  },
  {
      initialRouteName: "cadastroConsulta",
      tabBarOptions: {
          showLabel: false ,
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