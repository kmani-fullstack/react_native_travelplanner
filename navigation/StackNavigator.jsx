import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CreateTrip from '../screens/CreateTrip';

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();

  const AuthStack = () => {
    return <Stack.Navigator></Stack.Navigator>;
  };
  const MainStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Create"
          component={CreateTrip}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
