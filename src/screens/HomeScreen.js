import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import homeScreenImage from "../../assets/homeScreen.jpeg";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parentCard}>
            <ImageBackground
              source={homeScreenImage}
              resizeMode="cover"
              style={styles.image}
            >
              <View style={styles.boxText}>
                <Text style={styles.text}>Rent A Guy</Text>
              </View>
            </ImageBackground>
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parentCard: {
    flex: 1,
    backgroundColor: 'pink',
  },
//   card: {
//     flex: 1,
//     backgroundColor: 'pink',
//   },
  image: {
    flex: 1,
  },
  boxText: {
    backgroundColor: 'green',
    opacity: 0.6,
  },
  text: {
      position: 'absolute',
    backgroundColor: 'pink',
    alignSelf: "center",
    color: "white",
    marginTop: 350,
    marginLeft: 9,
    fontWeight: "bold",
    fontSize: 25,
  },
});
