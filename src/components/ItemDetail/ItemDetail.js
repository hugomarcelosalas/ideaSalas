import './ItemDetail.css' 



const ItemDetail = ({id, name, price, category, img, stock, description}) => { 

    return ( 
         
        <div className="ItemDetail"> 
            <img src={img} alt={category}></img> 
            <div className='info'> 
                <h1>{name}</h1> 
                <p>{description}</p> 
                <h3>Precio: ${price}</h3> 
                <p>Stock: {stock}</p> 
                
            </div>          
        </div>     
    ) 
} 
export default ItemDetail