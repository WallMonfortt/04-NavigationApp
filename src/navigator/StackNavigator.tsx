import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';
import { Page4Screen } from '../screens/Page4Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams = { // This is the type of the params that we can send to the screens
  Page1Screen: undefined,
  Page2Screen: undefined,
  Page3Screen: undefined,
  Page4Screen: undefined,
  PersonaScreen: { id: number, name: string } // id and name are required params
};

const Stack = createStackNavigator<RootStackParams>();

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
      <Stack.Screen name="Page1Screen" options={ { title:'Pagina 1'}} component={Page1Screen} />
      <Stack.Screen name="Page2Screen" options={ { title:'Pagina 2'}} component={Page2Screen} />
      <Stack.Screen name="Page3Screen" options={ { title:'Pagina 3'}} component={Page3Screen} />
      <Stack.Screen name="Page4Screen" options={ { title:'Pagina 4'}} component={Page4Screen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;