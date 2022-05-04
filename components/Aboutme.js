import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image } from 'react-native';
import { View, Image } from 'react-native';

//import d'images
import Delphine from '../images/delphine.jpg';

export default function Aboutme(){
    return (
        <View>
            
            <h2>A propos de moi</h2>
            <Image source={Delphine} 
            style={{ width: 60, height: 60 }}
            />
        </View>
    );
}