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
        nome: 'Teclado Mecanino Branco',
        preco: 600,
        imagem: require('../assets/produtos/teclado-101.jpg'),
        descricao: 'Teclado Mecanico Branco com RGB'
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
        nome: 'Cadeira Gamer Fox Racer',
        preco: 1350,
        imagem: require('../assets/produtos/cadeira-103.jpg'),
        descricao: 'Cadeira Gamer Profissional Fox Racer com RGB'
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
        nome: 'Gabinete Gamer',
        preco: 359,
        imagem: require('../assets/produtos/gabinete-105.jpg'),
        descricao: 'Gabinete Gamer Galax Andromeda com RGB'
        
    },

    {
        id: 106,
        nome: 'Mouse Pad Redragon',
        preco: 280,
        imagem: require('../assets/produtos/mousepad-106.jpg'),
        descricao: 'Mouse Pad Redragon Neptune com RGB 800x300mm'
        
    },

    {
        id: 107,
        nome: 'Carregador Wireless',
        preco: 480,
        imagem: require('../assets/produtos/carregador-107.jpg'),
        descricao: 'Carregador Wireless Trio SATECHI '
        
    },


];
export function getProdutos() {
    return PRODUTOS;
}
export function getProduto(id) {
    return PRODUTOS.find((produto) => (produto.id == id));
}