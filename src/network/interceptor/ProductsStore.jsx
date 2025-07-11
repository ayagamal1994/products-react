import axios from "axios";

export const ProductsStore = axios.create({
    baseURL: "https://dummyjson.com",

})