import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { createStackNavigator } from 'react-navigation';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Aboutme from './components/Aboutme';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Aboutme />
      <h2>Petit jeu de Qui es-tu ?</h2>
      <Button
        // onPress={() => Alert.alert('Simple Button pressed')}
          // onPress={() => navigation.push('Qui')}

        onPress={() => navigation.navigate('Qui')}
        // onPress={() => this.props.navigation.push('Qui')}
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