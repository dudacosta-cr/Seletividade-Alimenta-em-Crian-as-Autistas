import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importe as telas que criamos (certifique-se de que os caminhos estão corretos)
import Welcome from './src/screens/Welcome';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4bcffa', // Cor de fundo da barra superior
          },
          headerTintColor: '#fff', // Cor do botão "Voltar" e do título
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Tela de Bem-vindo (Não exibe a barra superior por estética) */}
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{ headerShown: false }} 
        />
        
        {/* Tela de Login */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Entrar' }}
        />
        
        {/* Tela de Cadastro */}
        <Stack.Screen 
          name="Cadastro" 
          component={RegisterScreen} 
          options={{ title: 'Nova Conta' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
