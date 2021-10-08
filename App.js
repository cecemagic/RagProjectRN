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
import HomeScreen from './src/screens/HomeScreen'

// function HomeScreen() {
//   return (
//     <SafeAreaView>
//       <View>
//         <Text style={{ color: 'white' }}>Home Screen</Text>
//       </View>
//     </SafeAreaView>
//   )
// }

const HomeStack = createStackNavigator()

function HomeScreenStack({ navigation }) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
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
