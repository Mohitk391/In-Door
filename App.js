import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaminateScreen from './screens/Laminates/Laminates';
import WoodenScreen from './screens/Wooden/Wooden';
import HomeScreen from './screens/Homepage/Homepage';
import { ProductProvider } from './context/ProductContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='In@Door'
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FF7F50',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name="In@Door" component={HomeScreen} />
          <Stack.Screen name="Laminates" component={LaminateScreen} />
          <Stack.Screen name="Wooden" component={WoodenScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}