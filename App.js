import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import DT from './darkTheme'
import myDarkTheme from './darkTheme'
import RentAGuyScreen from './src/screens/RentAGuyScreen'
import AnimatableTest from './src/screens/AnimatableTest'
import ProfileSetUpScreen from './src/screens/ProfileSetUpScreen'


const HomeStack = createStackNavigator()

function HomeScreenStack({ navigation }) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="ProfileSetUpScreen"
        component={ProfileSetUpScreen}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}


function App() {
  const scheme = useColorScheme()
  const MyDarkTheme = DT()

  return (
    <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}>
      <HomeScreenStack />
    </NavigationContainer>
  )
}

export default App
