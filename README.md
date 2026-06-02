import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Substitua pela URL ou caminho local da sua logo */}
        <Image 
          source={{ uri: 'https://via.placeholder.com/150' }} 
          style={styles.logo} 
        />
        <Text style={styles.title}>Olá!</Text>
        <Text style={styles.subtitle}>App para ajudar na sua alimentação!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.buttonLogin]} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonTextText}>Fazer Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.buttonRegister]} 
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={[styles.buttonTextText, styles.buttonRegisterText]}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2f3640',
  },
  subtitle: {
    fontSize: 16,
    color: '#718093',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 15, // Cria espaçamento entre os botões
  },
  button: {
    width: '100%',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonLogin: {
    backgroundColor: 'tomato',
  },
  buttonRegister: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'tomato',
  },
  buttonTextText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonRegisterText: {
    color: 'tomato',
  },
});

// Tela Bem-vindo
