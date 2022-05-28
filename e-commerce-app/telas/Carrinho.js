import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { CarrinhoContexto } from '../CarrinhoContext';
export function Carrinho ({navigation}) {
const {items, getContagemItem, getprecoTotal} = useContext(CarrinhoContexto);

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getprecoTotal());
    });
    return (
      
       <View style={styles.linhaCarrinhoTotal}>
          <Text style={[styles.linhaEsquerda, styles.lineTotal]}>Total</Text>
          <Text style={styles.linhaDireita}>R$ {total}</Text>
          <View style={styles.botaofinal}>
                  <Button
             onPress={() => {
               alert('Você comprou tudo!');
             }}
             title="Comprar tudo"
             color='#DB7093'
       />
                  </View>
        </View>

    );

  }
function renderItem({item}) {
    return (
       <View style={styles.linhaCarrinho}>
          <Text style={styles.linhaEsquerda}>{item.produto.nome} x {item.qtd}</Text>
          <Text style={styles.linhaDireita}>R$ {item.precoTotal}</Text>
       </View>
       
    );
  }

  return (
    
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.produto.id.toString()}
      ListFooterComponent={Totals}
      
    />
    
  );


}
const styles = StyleSheet.create({
  linhaCarrinho: { 
    flexDirection: 'row',
  },
  linhaCarrinhoTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  linhaEsquerda: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' 
  },
  linhaDireita: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  botaofinal: {
    marginLeft: 80,
    marginTop: 5,

  }
});