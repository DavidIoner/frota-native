import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import Home from "./Home";
import DashBoard from './DashBoard';
import Profile from './Profile';
import Vehicles from './Vehicles';
import VehicleRegistration from './Vehicles/VehicleRegistration';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="DashBoard" component={DashBoard} />
      <Tab.Screen name="Veículos" component={Vehicles} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
      <Stack.Navigator>
        {/* mudar o titulo dinamicamente */}
        <Stack.Screen name="Tabs" component={Tabs} options={{title:"FrotaBruta"}}/>
        <Stack.Screen name="VehicleRegistration" component={VehicleRegistration}/>
      </Stack.Navigator>
  );
}