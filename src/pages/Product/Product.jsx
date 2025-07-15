import React, { useEffect, useState } from 'react'
import "./Product.css"
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom'
import { ProductsStore } from '../../network/interceptor/ProductsStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
//import { useProductContext } from '../../context/ProductContext';
import { increase, decrease,  } from '../../store/ProductCountStore';
import { getCount } from '../../store/ProductCountStore';
const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState();
    //const { getCount, increase, decrease } = useProductContext();
    //const count = product ? getCount(product.id) : 0;
    const dispatch = useDispatch()
    const count = useSelector((state)=>getCount(state, product?.id))
    useEffect(()=>{
        ProductsStore.get(`/products/${id}`).then((res)=>{
            console.log(res.data);
            setProduct(res.data)
        })
    },[id])

  return (
    <>
        <Nav />
        {product && 
            <section className="product">
            <div className="container">
                <div className="item d-flex align-items-center gap-3">
                    <div className="item-img">
                        <img src={product.thumbnail} alt="product"/>
                    </div>
                    <div className="item-details">
                        <h3 className="title">{product.title}</h3>
                        <p className="description">{product.description}</p>
                        <p className="price">{product.price}</p>
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
                        <div className="tags d-flex align-items-center gap-2">
                            {product?.tags?.map((t)=>(
                                <p key={t}>{t}</p>
                            ))}
                        </div>
                        <p>{product.shippingInformation}</p>
                        <p>{product.warrantyInformation}</p>
                        <div className="increase-decrease d-flex align-items-center">
                            <button onClick={(e)=>{e.stopPropagation; dispatch(decrease(product))}}className="decrease">-</button>
                            {/* {
                                count>0? <p className="count">{count}</p>: null
                            } */}

                            <p className="count">{count}</p>
                            <button onClick={(e)=>{e.stopPropagation; dispatch(increase(product))}} className="increase">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        }
        <Footer />
    </>
  )
}

export default Product