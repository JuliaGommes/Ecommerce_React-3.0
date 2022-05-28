import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListadeProdutos } from './telas/ListaProduto.js';
import { DetalhesdoProduto } from './telas/DetalhesProduto.js';
import { Carrinho } from './telas/Carrinho.js';
import { IconeCarrinho } from './components/IconeCarrinho';
import { ProvedorCarrinho } from './CarrinhoContext.js';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <ProvedorCarrinho>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Produtos' component={ListadeProdutos} 
          options={({ navigation }) => ({
            title: 'Loja Gamer',
            headerTitleStyle: styles.headerTitle, 
            headerRight: () => <IconeCarrinho navigation={navigation}/>
          })}/>
          <Stack.Screen name='DetalhesProduto' component={DetalhesdoProduto} 
          options={({ navigation }) => ({
            title: 'Detalhes',
            headerTitleStyle: styles.headerDetalhes,
            headerRight: () => <IconeCarrinho navigation={navigation}/>,
          })} />
          <Stack.Screen name='Carrinho' component={Carrinho} 
          options={({ navigation }) => ({
            title: 'Carrinho',
            headerTitleStyle: styles.headerTitle, fontSize: 10,
            headerRight: () => <IconeCarrinho navigation={navigation}/>,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProvedorCarrinho>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 50,
    backgroundColor: '#DB7093',
    height: 45,
    padding: 10,
    borderRadius: 35 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerDetalhes: {
    fontSize: 20,
    fontWeight: 'bold',
    
  }

});
export default App;