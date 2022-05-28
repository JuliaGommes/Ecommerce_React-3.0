import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Produto } from '../components/Produto.js';
import { getProdutos } from '../servicos/ServicoProduto.js';
export function ListadeProdutos ({navigation}) {
function renderProduto({item: produto}) {
    return (
      <Produto {...produto} 
      onPress={() => {
        navigation.navigate('DetalhesProduto', {
          produtoId: produto.id,
        });
      }}
      />
    );
  }

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(getProdutos());
  });

  return (
    <FlatList
      style={styles.listaProdutos}
      contentContainerStyle={styles.listaProdutosContainer}
      keyExtractor={(item) => item.id.toString()}
      data={produtos}
      renderItem={renderProduto}
    />
  );
}
const styles = StyleSheet.create({
  listaProdutos: {
    backgroundColor: '#eeeeee',
  },
  listaProdutosContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});