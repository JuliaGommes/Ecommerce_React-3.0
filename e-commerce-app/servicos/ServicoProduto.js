const PRODUTOS = [
    {
        id: 100,
        nome: 'Headset Redragon Zeus',
        preco: 850,
        imagem: require('../assets/produtos/headset-100.jpg'),
        descricao: 'Headset Gamer Feminino Redragon Zeus sem RGB'
    },
    {
        id: 101,
        nome: 'Teclado Mecanino Preto',
        preco: 600,
        imagem: require('../assets/produtos/teclado-101.jpg'),
        descricao: 'Teclado Mecanico Preto com RGB'
    },
    {
        id: 102,
        nome: 'Mouse Gamer Redragon',
        preco: 350,
        imagem: require('../assets/produtos/mouse-102.jpg'),
        descricao: 'Mouse Gamer Redragon com RGB'
    },
    {
        id: 103,
        nome: 'Cadeira Gamer Dx Racer',
        preco: 3500,
        imagem: require('../assets/produtos/cadeira-103.jpg'),
        descricao: 'Cadeira Gamer Profissional DXRaer'
    },
    {
        id: 104,
        nome: 'Monitor Gamer',
        preco: 1200,
        imagem: require('../assets/produtos/monitor-104.jpg'),
        descricao: 'Monitor Gamer 23.6 Polegadas, Full HD, HDMI/DP, FreeSync e G-Sync'
    },

    
    {
        id: 105,
        nome: 'Gabinete Gamer com RGB',
        preco: 359,
        imagem: require('../assets/produtos/gabinete-105.jpg'),
        descricao: 'Gabinete Gamer Couga Gemini M Silver'
        
    },



];
export function getProdutos() {
    return PRODUTOS;
}
export function getProduto(id) {
    return PRODUTOS.find((produto) => (produto.id == id));
}