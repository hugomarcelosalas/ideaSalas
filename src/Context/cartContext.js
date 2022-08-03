import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();


const Provider = props => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

 const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newCart = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        quantity: prod.quantity + productToAdd.quantity
                    }
                    return newProduct
                } else {
                   return prod 
                }
            })
            setCart(newCart)
        }
    }
    
    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
          accu += prod.count
        })
    
        return accu
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getProduct = (id) => {
        return cart.find(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotal = () => {
        return cart.reduce(( total, prod) => (prod.price * prod.quantity) + total, 0 )
       
    }

  

    return(
        <cartContext.Provider value={{ cart, addItem, getQuantity, getProduct, removeItem, clearCart, getTotal,  }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default Provider;