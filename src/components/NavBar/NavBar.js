
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () =>{ 
    return ( 
        <nav className='NavBar'> 
            <Link to='/' className='link'>
            <h1 className='nav-logo'>Joyería</h1> 
            </Link>
           
             
            <div className='categories'> 
                <NavLink to='/category/anillos' href=''>Anillos</NavLink>
                <NavLink to='/category/aritos'>Aritos</NavLink>
                <NavLink to='/category/pulseras'>Pulseras</NavLink>
                <NavLink to='/category/collares'>Collares</NavLink>
              
            </div> 
            <CartWidget/>
            
              
     
        </nav> 
    ) 
} 
export default NavBar