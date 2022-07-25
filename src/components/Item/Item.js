
import './Item.css' 
import {Link} from 'react-router-dom'

const Item = ({id, name, price, category, img, stock, description}) => { 
    return ( 
        <div className="Item">            
            <h2>{name}</h2> 
            <img src={img} alt={category}></img> 
            <p>{description}</p> 
            <h3>${price}</h3> 
            <Link to={`/item/${id}`}>
                <button>Ver detalle</button> 
            </Link>
            
                  
            
        </div> 
    ) 
} 
export default Item