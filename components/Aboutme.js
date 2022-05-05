import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image } from 'react-native';
import { View, Image } from 'react-native';

//import d'imaages
import Delphine from '../images/delphine.jpg';

export default function Aboutme(){
    return (
        <View>
            
            <h2>Hello et Bienvenue sur ma 1ère application</h2>
            <Image source={Delphine} 
            style={{ width: 60, height: 40 }}
            />
        </View>
    );
}

