import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,createStackNavigator } from 'react-native';
import Aboutme from './components/Aboutme';

export default function App() {
  return (
    <View style={styles.container}>
      <Aboutme />
      <h2>Petit jeu de Qui es-tu ?</h2>
      <Button
        // onPress={() => Alert.alert('Simple Button pressed')}
        onPress={() => navigator.navigate('qui')}
        title="Click"
        color="#2196F3"
        // accessibilityLabel="Learn more about this purple button"
      />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
// const AppNavigator = createStackNavigator({
//   Qui: {
//     screen: Qui
//   }
// });