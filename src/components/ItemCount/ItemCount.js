import './ItemCount.css'
import {useState} from 'react';

const ItemCount = ({onConfirm, stock, initial = 0}) => {
   
    const [count, setCount] = useState(initial);
    
    const decrement = () => {
        if(count > initial)
        setCount (count - 1)

    }

    const increment = ()=> {
        if(count < stock)
        setCount(count + 1);
    }

    

    return (
        <div className="itemCount">
            <div className='controls'>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>         
            
            <button className="button" onClick={()=> onConfirm(count)}>Agregar al carrito</button>
        </div>               
    )
               
}

export default ItemCount