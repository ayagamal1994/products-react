import "./ProductCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
//import { useProductContext } from '../../context/ProductContext'; 
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {  decrease, increase } from "../../store/ProductCountStore";
import { getCount } from "../../store/ProductCountStore";
const ProductCard = ({product}) => {
  //const { getCount, increase, decrease } = useProductContext();
  const count = useSelector((state )=>getCount(state, product.id));

  //Dispatch
  const dispatch = useDispatch();
  //const {count} = useSelector((state)=>state.productCount)

  const navigate = useNavigate();

  const handleClick = () => {
    
    navigate(`/product/${product.id}`);
  };

  return (
    <>
        <div className="product-card d-flex flex-column" onClick={handleClick}>
            <img src={product.thumbnail} alt="product"/>
            <p className="title">{product.title}</p>
            <p className="description">{product.description}</p>
            <p className="price">{product.price}$</p>
            <div className="rating d-flex align-items-center">
              <div className="filled-stars">
                {[...Array(Math.floor(product.rating))].map((_, i)=>(
                  <FontAwesomeIcon key={i} icon={faStar}/>
                ))}
              </div>
              {product.rating - Math.floor(product.rating !== 0) && <FontAwesomeIcon icon={faStarHalf}/>}
              {/* <div className="empty-stars">
                {[...Array(Math.round(5 - product.rating))].map((_, i)=>(
                  <FontAwesomeIcon key={i} icon={faStar}/>
                ))}
              </div> */}
              
            </div>
            <div className="increase-decrease d-flex align-items-center">
              <button onClick={(e)=>{e.stopPropagation(); dispatch(decrease(product))}} className="decrease">-</button>
              {/* {
                count>0? <p className="count">{count}</p>: null
              } */}

              <p className="count">{count}</p>
              <button onClick={(e)=>{e.stopPropagation(); dispatch(increase(product))}} className="increase">+</button>
            </div>

            {/* <button className="short-list" onClick={()=>{shortList(product.title)}}>add short list</button> */}
        </div>
    </>
  )
}

export default ProductCard

