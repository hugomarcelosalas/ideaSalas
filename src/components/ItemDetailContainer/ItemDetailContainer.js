import { useState, useEffect } from "react"
import { getItemById } from "../asyncmock/asyncmock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const {productId} = useParams()

    useEffect (()=> {

        getItemById(productId).then(response => {
            setProduct(response)
            console.log(product)
        })

    },)

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>

        </div>

    )
}
export default ItemDetailContainer