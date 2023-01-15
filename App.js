import { View, ActivityIndicator } from 'react-native';
import React, { useState, createContext, useContext, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { onAuthStateChange } from ""
import Chat from "./screens/Chat";
import Login from './screens/Login';
import Signup from "./screens/Signup";
import Home from "./screens/Home";

const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext();

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return(
    <AuthenticatedUserContext.Provider value={[user, setUser]}>
      {children}
    </AuthenticatedUserContext.Provider>
  )
}

function ChatStack() {
  return (
    <Stack.Navigator defaultScreenOptions={Home}>
      {/* <Stack.Screen name='Home' component={Home}/> */}
      <Stack.Screen name='Chat' component={Chat}/>
    </Stack.Navigator>
  )
}

// function AuthStack() {
//     <Stack.Navigator defaultScreenOptions={Login}>
//       <Stack.Screen name='Login' component={Login}/>
//       <Stack.Screen name='Signup' component={Signup}/>
//     </Stack.Navigator>
// }

function RootNavigator() {
  // const { user, setUser } = useContext(AuthenticatedUserContext);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    // const unsubscribe = onAuthStateChanged()
  });
  return(
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  )
}

export default function App() {
  return <RootNavigator />;
}
