import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { createStackNavigator } from 'react-navigation';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Aboutme from './components/Aboutme';
import Nav from './components/Nav';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Aboutme />
      <Nav />
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