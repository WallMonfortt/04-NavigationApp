import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';
import { Page4Screen } from '../screens/Page4Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

const Stack = createStackNavigator();

const StackNavigator = ( ) => {
  return (
    <Stack.Navigator
      // initialRouteName='Page 1 Screen'
      screenOptions={{
        headerStyle: {
          elevation: 0, // remove shadow on Android
          shadowColor: 'transparent' // remove shadow on iOS
        },
        cardStyle: {
          backgroundColor: 'white'
        }

      }}
    >
      <Stack.Screen name="Page 1 Screen" options={ { title:'Pagina 1'}} component={Page1Screen} />
      <Stack.Screen name="Page 2 Screen" options={ { title:'Pagina 2'}} component={Page2Screen} />
      <Stack.Screen name="Page 3 Screen" options={ { title:'Pagina 3'}} component={Page3Screen} />
      <Stack.Screen name="Page 4 Screen" options={ { title:'Pagina 4'}} component={Page4Screen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;