import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import DashBoard from './DashBoard';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="DashBoard" component={DashBoard} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}