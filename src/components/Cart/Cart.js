import { useContext } from "react"
import { Context } from "../../App"
import './Cart.css'


const Cart = () => {

    const { cart } = useContext (Context)
        
    return (
        <div className="carrito">
            <h1>Carrito de compras</h1>
            <div className="cartList">
                {cart.map(prod => 
                    <div key={prod.id}>
                        {prod.name}
                        <button> Eliminar</button>
                    </div>) }
                <button>Vaciar carrito</button>

            </div>
        </div>
    )
}

export default Cart