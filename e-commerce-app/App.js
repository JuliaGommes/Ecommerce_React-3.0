import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListadeProdutos } from './screens/ListaProduto.js';
import { DetalhesdoProduto } from './screens/DetalhesProduto.js';
import { Carrinho } from './screens/Carrinho.js';
import { IconeCarrinho } from './components/IconeCarrinho';
import { CartProvider } from './CarrinhoContext.js';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Produtos' component={ListadeProdutos} 
          options={({ navigation }) => ({
            title: 'Produtos',
            headerTitleStyle: styles.headerTitle, 
            headerRight: () => <IconeCarrinho navigation={navigation}/>
          })}/>
          <Stack.Screen name='DetalhesProduto' component={DetalhesdoProduto} 
          options={({ navigation }) => ({
            title: 'Detalhes',
            headerTitleStyle: styles.headerTitle,
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
    </CartProvider>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    marginHorizontal: 50,
    backgroundColor: '#DB7093',
    height: 45,
    padding: 10,
    borderRadius: 35 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default App;