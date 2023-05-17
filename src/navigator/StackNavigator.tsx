import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';
import { Page4Screen } from '../screens/Page4Screen';

const Stack = createStackNavigator();

const StackNavigator = ( ) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page 1 Screen" component={Page1Screen} />
      <Stack.Screen name="Page 2 Screen" component={Page2Screen} />
      <Stack.Screen name="Page 3 Screen" component={Page3Screen} />
      <Stack.Screen name="Page 4 Screen" component={Page4Screen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;