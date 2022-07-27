import React, { createContext} from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Cart from './components/Cart/Cart';

export const Context = createContext ()

const App = () => {
  const [cart, setCart] = useState ([])
  console.log(cart)

  const addItem = (productToAdd) => {
    setCart([...cart, productToAdd])
  }

  const getQuantity = () => {
    let accu = 0
    cart.forEach(prod => {
      accu += prod.quantity
    })

    return accu
  }

  return (
    <div className="App">
      <Context.Provider value={{ cart, addItem, getQuantity}}>
        <BrowserRouter>
          <NavBar/>
          <Routes>
          <Route path='/' element={<ItemListContainer greeting="Lista de Productos"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos por categoría"/>}/>
            <Route path='/item/:productId'  element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>       
        </BrowserRouter>   
      </Context.Provider> 
    </div>
  );
}

export default App;
