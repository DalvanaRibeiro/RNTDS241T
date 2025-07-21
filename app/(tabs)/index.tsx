import React from "react";
import {View, StyleSheet} from 'react-native'
// importamos o componente criado
import Titulo from "@/components/Titulo";

export default function App(){
  return(
    <View style={styles.container}>
      {/** Título da tela  */}
      <Titulo />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  }
})