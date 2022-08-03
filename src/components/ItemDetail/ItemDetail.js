import './ItemDetail.css' 
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from '../../Context/cartContext';

const ItemDetail = ({id, name, img, category, description, price, stock }) => {
    
    
    const [count, setCount] = useState(0);   
    
    const { addItem } = useContext(cartContext);

    const handleOnAdd = (count)=> {       
        setCount(count);
        addItem({ id, name, price, count: Number(count) });
    };

    return (
        
        <div className="ItemDetail">
            <img src={img} alt={category}></img>
            <div className='info'>
                <h1>{name}</h1>
                <p>{description}</p>
                <h3>Precio: ${price}</h3>
                <p>Stock: {stock}</p>
                { count === 0 ? (
                    <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
                ) : (
                <Link to='/cart'>Ir al Carrito</Link> ) }
                
            </div>         

        </div>    

    );
};


export default ItemDetail