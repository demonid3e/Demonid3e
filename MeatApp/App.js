
import MeatPanel from "./components/meat-panel/meat-panel"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MeatInput from "./components/meat-input/meat-input";

export default function App() {
  return (
    <View style={styles.container}>
      <MeatPanel/>
      <Text>Tanya</Text>
      <MeatInput/>
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
});
