import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react';
import './ItemDetail.css' 



const ItemDetail = ({id, name, price, category, img, stock, description}) => { 
    const initial = 1;
  
   
    const [count, setCount] = useState(initial);

    return ( 
         
        <div className="ItemDetail"> 
            <img src={img} alt={category}></img> 
            <div className='info'> 
                <h1>{name}</h1> 
                <p>{description}</p> 
                <h3>Precio: ${price}</h3> 
                <p>Stock: {stock}</p> 
                
            </div>     
            <ItemCount count={count} setCount={setCount}/>     
        </div>   

    ) 
} 
export default ItemDetail