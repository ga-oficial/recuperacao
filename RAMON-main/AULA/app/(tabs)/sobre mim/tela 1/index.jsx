import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const SobreMim = () => {

    const handlePress = (section) => {
        console.log(`Navegando para a seção de ${section}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.title}>Meu App</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../../assets/images/sobreMim/eu.jpeg')}
                    style={styles.image}
                />
                <Text style={styles.texto}>Bem-vindo ao Meu App:</Text>
                <Text style={styles.informacoes}>
                    Olá! Eu me chamo Gabriel Correia, tenho 18 anos e nasci em florianopolis, SC. 
                    Neste app, vou compartilhar com Vocês os filmes e alguns bixinhos que eu que mais gosto. 
                    Espero que aproveitem e encontre algumas novas inspirações cinematográficas e vejam alguns mini fofuxos!
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
            <Link href="/sobre-mim/Tela1">
            <TouchableOpacity style={styles.button} onPress={() => handlePress('Filmes')}>
                    <Text style={styles.buttonText}>Filmes</Text>
                </TouchableOpacity>
                </Link>
                <Link href="/sobre-mim/Tela2">
                <TouchableOpacity style={styles.button} onPress={() => handlePress('animais')}>
                    <Text style={styles.buttonText}>Comidas</Text>
                </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: '#f7ede2',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        padding: 15,
    },
    cabecalho: {
        backgroundColor: '#84a59d',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        marginTop: 25,
        width: 250,
        height: 250,
        borderRadius: 125, 
    },
    texto: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 25,
    },
    informacoes: {
        fontSize: 14,
        marginTop: 10,
        padding: 15,
        textAlign: 'center', 
    },
    buttonsContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginTop: 20,
    },
    button: {
        backgroundColor: '#84a59d',
        padding: 17,
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 15, 
        fontWeight: 'bold',
    },
});

export default SobreMim;
