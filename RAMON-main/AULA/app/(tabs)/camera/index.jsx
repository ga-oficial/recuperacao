import { useState, useRef } from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)

    if (!permissao) {
        return <View></View>
    }
    if (!permissao.granted) {
        return (
            <View style={style.container}> 
                <Text style={style.textoPermissao}> Voce precisa pedir permissao para usar a camera</Text>
                <Button title= 'Pedir Permissao' onPress={pedirPermissao}/>
            </View>
        )
    }

    const tirarFoto = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        })
        console.log(foto)
    }

    return (
         <CameraView facing={'back'} style={style.camera} ref={cameraRef}>
            <Button title='tirar Foto' onPress={tirarFoto} />
        </CameraView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    textoPermissao: {
        textAlign: 'center',
    },
    camera: {
        flex: 1
    }

})
