import React, { useEffect, useRef, useState } from 'react';
import "./ProductList.css";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/product-card/ProductCard"
import { ProductsStore } from '../../network/interceptor/ProductsStore';

const handleShortList =(productName)=>{
  alert(`clicked product is ${productName}`)
}

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
  const inputSerachRef = useRef(null)
  //fetch data
  useEffect(()=>{
    ProductsStore.get("/products").then((res)=>{
      setProducts(res.data.products);
      setFilteredList(res.data.products)
      console.log(res.data.products)})
  },[])

 

  return (
    <>
    <Nav />
    <div className="products">
      <div className="container">
        <div className="products-search">
          <input className="form-control" type="text" placeholder="Search..." ref={inputSerachRef}
          onChange={()=>{
          setFilteredList(products.filter((p)=>p.title.toLowerCase().includes(inputSerachRef.current?.value.toLowerCase())))
          }}
          />

        </div>
        <div className="products-wrapper">
          {filteredList && 
            filteredList.map((product)=>(
              <ProductCard key={product.id} product={product} shortList={handleShortList}/>
            ))
          }
        </div>
      </div>
    </div> 
    <Footer />  
    </>
  )
}

export default ProductList