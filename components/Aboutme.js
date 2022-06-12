// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image } from 'react-native';
import { View, Text, Image } from 'react-native';

//import d'imaages
// import Delphine from '../images/delphine.jpg';
import LogoVazy from '../images/logovazy.png';
import CarteFrance from '../images/cartefrance.jpg';

export default function Aboutme(){
    return (
        <View>
            <Image source={LogoVazy} 
            style={{ width: 312, height: 100, }}
            />
            <Text>Bienvenue sur l'application</Text>

            <Image source={CarteFrance} 
            style={{ width: 312, height: 600, marginTop: 20 }}
            />

        </View>
    );
}



