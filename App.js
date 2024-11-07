import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Top Bar with Login and Register */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.loginScreenButton}>
          <Text style={styles.topBarText}>{"< Login Screen"}</Text>
        </TouchableOpacity>
        <Text style={styles.topBarText1}>Register</Text>
      </View>
      <View style={styles.borderLine} />

      {/* Logo and ABOUTREACT Title */}

      <View style={styles.logoContainer}>
        <Text style={styles.logo}>AR</Text>
        <Text style={styles.subtitle}>ABOUTREACT</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.form}>
        <View style={styles.formGroup}>
          
          <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#cccccc" />
        </View>
        <View style={styles.formGroup}>
          
          <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#cccccc" keyboardType="email-address" />
        </View>
        <View style={styles.formGroup}>
          
          <TextInput style={styles.input} placeholder="Enter your age" placeholderTextColor="#cccccc" keyboardType="numeric" />
        </View>
        <View style={styles.formGroup}>
         
          <TextInput style={styles.input} placeholder="Enter your address" placeholderTextColor="#cccccc" />
        </View>
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'hsl(210, 60%, 40%)'
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  loginScreenButton: {
    marginRight:20,
    
  },
  topBarText: {
    color: '#FFFFFF',
    fontSize:18,
  },
  topBarText1: {
    color: 'white',
    fontSize: 19,
    marginRight:130,
  },
  borderLine: {
    height: 1,
    backgroundColor: 'green',
    marginVertical: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
    fontStyle:'italic',
    borderColor:'black',
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
    textShadowColor: 'grey',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    
    color: '#333',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Arial',
    letterSpacing: 2,
    lineHeight: 40,
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: 'hsl(210, 60%, 40%)',
    color: 'white',
  
  },
  form: {
    marginTop: 30,
  },
  formGroup: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    color: '#FFFFFF',
    borderRadius: 30,
    paddingLeft:25,
  },
  registerButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 5,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
