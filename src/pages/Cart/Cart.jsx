import { useProductContext } from "../../context/ProductContext";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer"
const Cart = () => {
    const { cartProducts, increase, decrease, removeFromCart } = useProductContext();
    const totalPrice = cartProducts.reduce(
    (sum, product) => sum + product.price * product.count,
    0
);
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
                    <button onClick={(e)=>{decrease(e, product)}} className="decrease">-</button>

                    <p className="count">{product.count}</p>
                    <button onClick={(e)=>{increase(e, product)}} className="increase">+</button>
                  </div>
                  <p className="price">{(product.price * product.count).toFixed(2)}$</p>
                  <div className="delete">
                    <FontAwesomeIcon icon={faTrash} onClick={()=>{removeFromCart(product.id)}}/>
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