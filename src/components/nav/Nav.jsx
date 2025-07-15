import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
//import { useProductContext } from '../../context/ProductContext';
import { totalCount } from "../../store/ProductCountStore";
const Nav = () => {
  //const {totalCount} = useProductContext()
  const tCount = useSelector(totalCount)
  return (
    <div className="nav">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <NavLink to="/">products</NavLink>
          </div>
          <div className="nav-links d-flex align-items-center gap-3">
            <NavLink to="/login">login</NavLink>
            <NavLink to="/register">register</NavLink>
            <div className="shopping-cart">
              <NavLink to="/cart">
                <p className="d-flex justify-content-center align-items-center">{tCount}</p>
                <FontAwesomeIcon icon={faShoppingCart}/>
              </NavLink>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Nav