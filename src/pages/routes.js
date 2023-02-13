import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import DashBoard from './DashBoard';
import Profile from './Profile';
import Vehicles from './Vehicles';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="DashBoard" component={DashBoard} />
      <Tab.Screen name="Veículos" component={Vehicles} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}