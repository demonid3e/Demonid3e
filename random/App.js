import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import RandomShaam from './components/RandomShaam/RandomShaam';
import RandomHot from './components/RandomHot/RandomHot';
const Toby = require("./assets/toby.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Toby}/>
      <RandomShaam/>
      <RandomHot/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 100,
    marginBottom: 30
  }
});
