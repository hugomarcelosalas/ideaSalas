import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../asyncmock/asyncmock"
import {useParams} from "react-router-dom"
import { getProductsByCategory } from "../asyncmock/asyncmock"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
  

    useEffect (()=> {
        
        if(!categoryId) {
            getProducts().then(response => {
                setProducts(response)
            })
        } else {
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            })
        }
    }, [categoryId])

       
    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>  
            <ItemList products={products}/>
            
        </div>
    
    )
}

export default ItemListContainer