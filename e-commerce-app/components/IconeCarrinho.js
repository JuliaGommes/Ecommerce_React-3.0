import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CarrinhoContexto } from '../CarrinhoContext';
export function IconeCarrinho({navigation}) {
  const {getContagemItem} = useContext(CarrinhoContexto);
  return (
    <View style={styles.container}>
      <Text style={styles.texto} 
        onPress={() => {
          navigation.navigate('Carrinho');
        }}
      >Itens no Carrinho ({getContagemItem()})</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: '#FFB6C1',
    height: 50,
    padding: 5,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});