import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css' 

const NavBar = () =>{ 
    return ( 
        <nav className='NavBar'> 
            
            <h1 className='nav-logo'>Joyería</h1> 
           
             
            <div className='categories'> 
                <a href=''>Anillos</a>
                <a href=''>Aritos</a>
                <a href=''>Pulseras</a>
                <a href=''>Collares</a>
                <a href=''>Contacto</a>
            </div> 
            <CartWidget/>
            
              
     
        </nav> 
    ) 
} 
export default NavBar