import { useContext } from "react"
import { cartContext } from "../../Context/cartContext"
import { Link } from 'react-router-dom'
import './Cart.css'


const Cart = () => {

    const { cart, removeItem, getQuantity, clearCart,  } = useContext (cartContext)

    if (getQuantity() === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link className='Option' to='/'>
                    <h3>Echa un vistaso a nuestros productos</h3>
                </Link>
            </div>
        )
    }
        
    return (
        <div className="carrito">
            <h1>Carrito de compras</h1>
            <div className="cartList">
                {cart.map(prod => 
                    <div>
                        <td>{prod.name}</td>
                        <td>{prod.count}</td>
                        <td>${prod.price}</td>
                        <td>${prod.price * prod.count}</td>
                        <button onClick={() => removeItem(prod.id)}>eliminar del carrito</button>
                    </div>) }
                <button onClick={() => clearCart()}>Vaciar carrito</button>

            </div>
        </div>
    )
}


export default Cart