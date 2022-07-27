import './ItemDetail.css' 
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Context } from '../../App';




const ItemDetail = ({id, name, price, category, img, stock, description}) => {
    
    const [quantity, setQuantity] = useState(0)
    
    const { addItem} = useContext(Context)

    const onAdd = (count)=> {
        
        console.log(`tienes ${count} items en el carrito`)
        setQuantity(count)
       addItem({id, name, price, quantity})
    }

    return (
        
        <div className="ItemDetail">
            <img src={img} alt={category}></img>
            <div className='info'>
                <h1>{name}</h1>
                <p>{description}</p>
                <h3>Precio: ${price}</h3>
                <p>Stock: {stock}</p>
                { quantity > 0 ? <Link to='/cart'>Comprar</Link> : <ItemCount stock={stock} onConfirm={onAdd}/> }
                
            </div>         

        </div>    

    )
}


export default ItemDetail