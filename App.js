import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screen/Home";
import AddScreen from "./screen/AddScreen";
import StudentDetailScreen from "./screen/StudentDetailScreen";


const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddScreen" component={AddScreen} />
      <Stack.Screen name="StudentDetailScreen" component={StudentDetailScreen} />
    </Stack.Navigator>
  )
}


export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}