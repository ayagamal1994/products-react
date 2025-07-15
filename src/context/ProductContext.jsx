// import { createContext, useContext, useState, useEffect } from "react";

// const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
// const [cartProducts, setCartProducts] = useState(() => {
//   const stored = localStorage.getItem("cartProducts");
//   return stored ? JSON.parse(stored) : [];
// });
// useEffect(() => {
//   localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
// }, [cartProducts]);

// const getCount = (id) => {
//     const found = cartProducts.find((item) => item.id === id);
//     return found ? found.count : 0;
//   };

//   const increase = (e, product) => {
//     e?.stopPropagation?.();
//     setCartProducts((prev) => {
//       const existing = prev.find((p) => p.id === product.id);
//       if (existing) {
//         if (existing.count < product.stock) {
//           return prev.map((p) =>
//             p.id === product.id ? { ...p, count: p.count + 1 } : p
//           );
//         }
//         return prev;
//       } else {
//         return [...prev, { ...product, count: 1 }];
//       }
//     });
//   };

//   const decrease = (e, product) => {
//     e?.stopPropagation?.();
//     setCartProducts((prev) => {
//       const existing = prev.find((p) => p.id === product.id);
//       if (existing && existing.count > 1) {
//         return prev.map((p) =>
//           p.id === product.id ? { ...p, count: p.count - 1 } : p
//         );
//       } else if (existing && existing.count === 1) {
//         // remove from cart
//         return prev.filter((p) => p.id !== product.id);
//       }
//       return prev;
//     });
//   };

//   const removeFromCart = (productId) => {
//   setCartProducts((prev) => prev.filter((p) => p.id !== productId));
// };

//   const totalCount = cartProducts.reduce((sum, p) => sum + p.count, 0);

//   return (
//     <ProductContext.Provider
//       value={{ cartProducts, totalCount, getCount, increase, decrease, removeFromCart }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export const useProductContext = () => useContext(ProductContext);