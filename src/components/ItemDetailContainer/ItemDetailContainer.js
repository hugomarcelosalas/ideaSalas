import { useState, useEffect } from "react" 
import { getItem } from "../asyncmock/asyncmock"
import ItemDetail from '../ItemDetail/ItemDetail' 


const ItemDetailContainer = () => { 
    const [product, setProduct] = useState() 
   
   
    useEffect (()=> { 
      
        getItem('2').then(response => { 
            setProduct(response) 
        }) 
             
    },[]) 
     
    return ( 
        <div className="ItemDetailContainer">  
            <ItemDetail {...product}/> 
             
        </div> 
     
    ) 
} 
export default ItemDetailContainer