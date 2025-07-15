
import ProductList from "./pages/products-list/ProductList";
import Login from "./pages/Login/Login";
import Signup from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  

  return (
      <BrowserRouter basename="/products-react">
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="login" element = {<Login />}></Route>
          <Route path="register" element = {<Signup />}></Route>
          <Route path="cart" 
          element=
          {
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }>
          </Route>

        </Routes>
      </BrowserRouter>
  )
}

export default App
