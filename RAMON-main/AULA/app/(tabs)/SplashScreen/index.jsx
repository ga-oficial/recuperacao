import React, {useState} from "react"
import {Text, View, TextInput, Button, StyleSheet, Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },


})
const SplashScreen = function () {
    const logoIst = 'https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-red-circle-png-image_2381952.jpg'
    return <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#6495ED', '#87CEFA']}
                style={style.container}
    >
              <Image
            style={style.logo}
            source={{
                uri:logoIst,
            }}
           
            />
    </LinearGradient>
   
}
export default SplashScreen; 
