import "./Products.css";
import Options from "./Options";
import Product from "./Product";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";

const URL = "http://localhost:8080";

function Products() {
  const [products, setProducts] = useState([]);
  
  async function getProducts() {
    const res = await axios.get(`${URL}/products`);
    
    if (res.status === 200) {
      setProducts(res.data);
    }
  }

  const { isLoading, error } = useQuery("products", getProducts);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="Products">
      <Options />
      <Product />
    </div>
  );
}

export default Products;
