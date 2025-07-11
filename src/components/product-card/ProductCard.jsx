import "./ProductCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext'; 

const ProductCard = ({product}) => {
  const { getCount, increase, decrease } = useProductContext();
  const count = getCount(product.id);

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
              <button onClick={(e)=>{decrease(e, product)}} className="decrease">-</button>
              {/* {
                count>0? <p className="count">{count}</p>: null
              } */}

              <p className="count">{count}</p>
              <button onClick={(e)=>{increase(e, product)}} className="increase">+</button>
            </div>

            {/* <button className="short-list" onClick={()=>{shortList(product.title)}}>add short list</button> */}
        </div>
    </>
  )
}

export default ProductCard