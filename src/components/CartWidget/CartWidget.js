import './CartWidget.css'
import { useContext } from 'react'
import { cartContext } from '../../Context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const  { getQuantity } = useContext(cartContext)

    const count = getQuantity()

    return(
        <Link to='/cart' className="CartWidget" >
            <img src="/images/cart.png" alt='cart-widget' className='CartImg' style={{width: "35px"}}/>
            <span>{ count }</span>
        </Link>
    );
}

export default CartWidget