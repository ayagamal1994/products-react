//import { useProductContext } from "../../context/ProductContext";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increase, decrease, removeFromCart } from "../../store/ProductCountStore";
const Cart = () => {
    //const { cartProducts, increase, decrease, removeFromCart } = useProductContext();
    const cartProducts = useSelector((state) => state.productCount?.cartProducts);

    const totalPrice = cartProducts.reduce(
    (sum, product) => sum + product.price * product.count,
     0
    );
const dispatch = useDispatch()
  return (
    <>
    <Nav />
      
        <section className="cart">
          <div className="container">
            {cartProducts.length>0?
            <div className="cart-items">
              {cartProducts?.map((product)=>(
                <div className="item d-flex align-items-center justify-content-between" key={product.id}>
                  <div className="item-img">
                      <img src={product.thumbnail} alt="product"/>
                  </div>
                  <p className="title">{product.title}</p>
                  <div className="increase-decrease d-flex align-items-center">
                    <button onClick={(e)=>{e.stopPropagation; dispatch(decrease(product))}} className="decrease">-</button>

                    <p className="count">{product.count}</p>
                    <button onClick={(e)=>{e.stopPropagation; dispatch(increase(product))}} className="increase">+</button>
                  </div>
                  <p className="price">{(product.price * product.count).toFixed(2)}$</p>
                  <div className="delete">
                    <FontAwesomeIcon icon={faTrash} onClick={()=>{dispatch(removeFromCart(product))}}/>
                  </div>

                </div>
              ))}
              <div className="total">
                <p>total: {totalPrice.toFixed(2)}$</p>
              </div>
            </div>:
            <div className="empty d-flex justify-content-center align-items-center">
              <p>cart is empty</p>
            </div>
            
      }
          </div>
        </section>
        
      <Footer />
    </>
  )
}

export default Cart