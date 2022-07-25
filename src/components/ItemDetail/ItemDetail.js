import './ItemDetail.css' 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';




const ItemDetail = ({id, name, price, category, img, stock, description}) => {
    
    const [quantity, setQuantity] = useState(0)
    

    const onAdd = (count)=> {
        
        console.log(`tienes ${count} items en el carrito`)
        setQuantity(count)
      
    }

    return (
        
        <div className="ItemDetail">
            <img src={img} alt={category}></img>
            <div className='info'>
                <h1>{name}</h1>
                <p>{description}</p>
                <h3>Precio: ${price}</h3>
                <p>Stock: {stock}</p>
                <ItemCount/>
                
                
            </div>         

        </div>    

    )
}


export default ItemDetail