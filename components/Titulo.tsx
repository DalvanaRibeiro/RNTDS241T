import React from "react";
import{Text, StyleSheet} from 'react-native' 

// Este componente mostra o título na tela
export default function Titulo() {
    return(
        <Text style={styles.texto}> Bem-vindo ao App!</Text>
    )
} 
// Estilo aplicado ao título
const styles = StyleSheet.create({
    texto:{
        fontSize: 26,
        fontWeight: 'bold', 
        color: '#2E7D32',
        marginBottom: 20,
        textAlign: 'center'

    }
})