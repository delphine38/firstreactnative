import { StyleSheet, View, Text, Image } from 'react-native';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//les images
import Carte from '../images/carte.png';
import Actus from '../images/actu.png';

export default function Nav(){
    

    return(
        <View>
            <BrowserRouter>
          
                <Routes>
                    <Route path="/actus" element={<Actus />} />
              
                </Routes>
        </BrowserRouter>
            <Image source={Carte} 
            style={{ width: 40, height: 40, }}
            />
            <Image source={Actu} 
            style={{ width: 40, height: 40, }}
            />
        </View>
    )
};

