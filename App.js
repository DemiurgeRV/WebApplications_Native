import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import FilterScreen from './screens/FilterScreen';
import { store } from './toolkit';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: '#3b3b3b', 
              },
              headerTintColor: '#dee2e6', 
            }}>
                <Stack.Screen name='Фильтры' component={MainScreen} />
                <Stack.Screen name='Фильтр' component={FilterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
}