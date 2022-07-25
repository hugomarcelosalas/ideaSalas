import './ItemCount.css'
import {useState} from 'react';

const ItemCount = ({count, setCount}) => {
    const initial = 1;
    let stock = 5;
    
    const [carrito, setCarrito] = useState(0);
    

    const decrement = () => {
        if(count > initial)
        setCount (count - 1)

    }

    const increment = ()=> {
        if(count < stock)
        setCount(count + 1);
    }

    const onAdd = ()=> {
        setCarrito(carrito + count)
        console.log(`${carrito} items en el carrito`)
        
    }

    return (
        <div className="itemCount">
            <div>
                <h3>Artículos</h3>
                <div className="controls">
                   
                    <button onClick={decrement}>-</button>
                    <span>{count}</span>
                    <button onClick={increment}>+</button>
                </div>
            
            </div>
            <div className='button'>
                <button className="addButton" onClick={onAdd} >Agregar al carrito</button>
            </div>
        </div>               
    )
               
}

export default ItemCount