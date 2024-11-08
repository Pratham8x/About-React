
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email === 'Pratham8x@gmail.com' && password === '1234') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Wrong email or password');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center',alignItem:'center', paddingHorizontal: 20 , backgroundColor:'lightblue',paddingVertical:50,}}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 130, paddingTop:50, marginTop:-300,marginLeft:80}}>
        ACCOUNT LOGIN
      </Text>
      
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
          marginTop:20,
        }}
      />
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
          marginTop:20,
        }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 90 }}>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={{ fontSize: 16 }}>{showPassword ? 'Hide' : 'Show'} Password</Text>
        </TouchableOpacity>
      </View>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"skyblue" }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, }}>
        Welcome Back Pratham 😺
      </Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
