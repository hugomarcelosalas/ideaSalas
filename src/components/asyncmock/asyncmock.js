const products = [
    {
        id: '1',
        name: 'Anillo Azul',
        price: 500,
        category: 'anillos',
        img: '../images/anilloAzul.jpeg',
        stock: 10,
        description: 'Anillo de plata con piedra azul' 
    },
    {
        id: '2',
        name: 'Aritos Perla',
        price: 300,
        category: 'aritos',
        img: '/images/aritosPerla.jpeg',
        stock: 6,
        description: 'Aritos con perla' 
    },
    {
        id: '3',
        name: 'Pulsera Inicial',
        price: 1000,
        category: 'pulseras',
        img: '/images/pulseraInicial.jpeg',
        stock: 8,
        description: 'Pulsera dorada con inicial' 
    },
    {
        id: '4',
        name: 'Collar Inicial',
        price: 1500,
        category: 'collares',
        img: '/images/CollarInicial.jpeg',
        stock: 15,
        description: 'Collar dorado con inicial' 
    },

]

export const getProducts = () => { 
    return new Promise((resolve)=> { 
        setTimeout(() => { 
            resolve(products) 
        }, 2000) 
    }) 
} 

export const getItemById = (productId) => { 
    return new Promise (resolve => { 
        setTimeout (()=> { 
            resolve (products.find(prod => prod.id === productId)) 
        }, 2000) 
    }) 
} 

export const getProductsByCategory = (categoryId) => { 
    return new Promise (resolve => { 
        setTimeout (()=> { 
            resolve (products.filter(prod => prod.category === categoryId)) 
        }, 2000) 
    }) 
} 