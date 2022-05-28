import React, {useEffect, useState, useContext} from 'react';
import { Text, Image, View, ScrollView, SafeAreaView, Button, StyleSheet  } from 'react-native';
import { getProduto } from '../servicos/ServicoProduto.js';
import { CarrinhoContexto } from '../CarrinhoContext';

export function DetalhesdoProduto({route}) {
  const { produtoId } = route.params;
  const [produto, setProduto] = useState({});

  const { addItemCarrinho } = useContext(CarrinhoContexto);

  useEffect(() => {
    setProduto(getProduto(produtoId));
  });

  function onAddCarrinho() {
    addItemCarrinho(produto.id);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.imagem}
          source={produto.imagem}
        />
        <View style={styles.informacaoContainer}>
          <Text style={styles.nome}>{produto.nome}</Text>
          <Text style={styles.preco}>$ {produto.preco}</Text>
          <Text style={styles.descricao}>{produto.descricao}</Text>
          </View>
          <View style={styles.botao}>
            <Button 
            onPress={onAddCarrinho}
            color='#DB7093'
            title="Adicionar ao Carrinho" />
           </View>
           <Image
           style={styles.imagemanuncio}
           source={require('../assets/anuncieaqui.png')}
             />
           <View style={styles.anuncieaqui}>
              
             </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  imagem: {
    height: 300,
    width: '100%'
  },
  informacaoContainer: {
    padding: 16,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 16,
    //fontWeight: '400',
    color: '#787878',
    marginBottom: -40,
  },

  botao:{
    marginTop: 0,
    marginLeft: 50,
    width: 180,
    height: 145,
    paddingLeft: 50,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',

  },
});