import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../asyncmock/asyncmock"

const ItemListContainer = (props) =>{
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])
    
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList products={products}/>
            <ItemCount/>
        </div>
    )
}

export default ItemListContainer