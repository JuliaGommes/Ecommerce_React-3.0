import React, {createContext, useState} from 'react';
import { getProduto } from './services/ServicoProduto.js';
export const CarrinhoContexto = createContext();
export function CartProvider(props) {
  const [items, setItems] = useState([]);

  function addItemToCart(id) {
    const produto = getProduto(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qtd: 1,
              produto,
              precoTotal: produto.preco 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qtd++;
              item.precoTotal += produto.preco;
            }
            return item;
          });
      }
    });
}
function getContagemItem() {
      return items.reduce((soma, item) => (soma + item.qtd), 0);
  }

  function getprecoTotal() {
      return items.reduce((soma, item) => (soma + item.precoTotal), 0);
  }  

  return (
    <CarrinhoContexto.Provider 
      value={{items, setItems, getContagemItem, addItemToCart, getprecoTotal}}>
      {props.children}
    </CarrinhoContexto.Provider>
  );
}