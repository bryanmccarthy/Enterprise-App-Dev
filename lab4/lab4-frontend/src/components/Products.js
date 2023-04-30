import "./Products.css";
import Options from "./Options";
import Product from "./Product";
import Pagination from "./Pagination";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";

const URL = "http://localhost:8080";

function Products() {
  const [products, setProducts] = useState([]);

  // Current product field states
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [rating, setRating] = useState(0);
  const [stock, setStock] = useState(0);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState([]);

  // Pagination state
  const [page, setPage] = useState(0);
  
  async function getProducts() {
    const res = await axios.get(`${URL}/products`);
    
    if (res.status === 200) {
      setProducts(res.data);
      console.log(res.data); // TODO: remove

      setId(res.data[0]._id);
      setTitle(res.data[0].title);
      setDescription(res.data[0].description);
      setPrice(res.data[0].price);
      setDiscountPercentage(res.data[0].discountPercentage);
      setRating(res.data[0].rating);
      setStock(res.data[0].stock);
      setBrand(res.data[0].brand);
      setCategory(res.data[0].category);
      setThumbnail(res.data[0].thumbnail);
      setImages(res.data[0].images);
    }
  }

  const handleSetProduct = (idx) => {
    setId(products[idx]._id);
    setTitle(products[idx].title);
    setDescription(products[idx].description);
    setPrice(products[idx].price);
    setDiscountPercentage(products[idx].discountPercentage);
    setRating(products[idx].rating);
    setStock(products[idx].stock);
    setBrand(products[idx].brand);
    setCategory(products[idx].category);
    setThumbnail(products[idx].thumbnail);
    setImages(products[idx].images);
  }

  const { isLoading, error } = useQuery("products", getProducts);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="Products">
      {page}
      <Options />
      <Product 
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        price={price}
        setPrice={setPrice}
        discountPercentage={discountPercentage}
        setDiscountPercentage={setDiscountPercentage}
        rating={rating}
        setRating={setRating}
        stock={stock}
        setStock={setStock}
        brand={brand}
        setBrand={setBrand}
        category={category}
        setCategory={setCategory}
        thumbnail={thumbnail}
        images={images}
      />
      <Pagination 
        page={page} 
        setPage={setPage} 
        totalPages={products.length} 
        handleSetProduct={handleSetProduct} 
      />
    </div>
  );
}

export default Products;
