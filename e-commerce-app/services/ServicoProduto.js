const PRODUTOS = [
    {
        id: 100,
        nome: 'Headset Redragon Zeus',
        preco: 850,
        imagem: require('../assets/products/headset-100.jpg'),
        descricao: 'Headset Gamer Feminino Redragon Zeus sem RGB'
    },
    {
        id: 101,
        nome: 'Teclado Mecanino Preto',
        preco: 600,
        imagem: require('../assets/products/teclado-101.jpg'),
        descricao: 'Teclado Mecanico Preto com RGB'
    },
    {
        id: 102,
        nome: 'Mouse Gamer Redragon',
        preco: 350,
        imagem: require('../assets/products/mouse-102.jpg'),
        descricao: 'Mouse Gamer Redragon com RGB'
    }
];
export function getProdutos() {
    return PRODUTOS;
}
export function getProduto(id) {
    return PRODUTOS.find((produto) => (produto.id == id));
}