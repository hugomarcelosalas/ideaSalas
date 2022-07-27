import './CartWidget.css'
import { useContext } from 'react'
import { Context } from '../../App'

const CartWidget = () => {

    const { getQuantity } = useContext(Context)

    const quantity = getQuantity()

    return (
        <div className='cart'>
            <img src="/images/cart.png" alt="cart"/>
            <span>{quantity}</span>
        </div>
    )

    
}

export default CartWidget