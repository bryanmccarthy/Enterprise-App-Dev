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

  // Search state
  const [search, setSearch] = useState("");
  
  async function getProducts() {
    const res = await axios.get(`${URL}/products`);
    
    if (res.status === 200) {
      setProducts(res.data);

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

  async function createProduct() {
    const res = await axios.post(`${URL}/products`, {
      title: "title",
      description: "description",
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: "brand",
      category: "category",
      thumbnail: "thumbnail",
      images: []
    });

    if (res.status === 200) {
      setProducts([...products, res.data]);
      handleSetProduct(products.length - 1);
      setPage(products.length);
    }
  }

  async function updateProduct() {
    const res = await axios.put(`${URL}/products/${id}`, {
      title: title,
      description: description,
      price: price,
      discountPercentage: discountPercentage,
      rating: rating,
      stock: stock,
      brand: brand,
      category: category,
      thumbnail: thumbnail,
      images: images
    });

    if (res.status === 200) {
      setProducts(products.map((product) => {
        if (product._id === id) {
          product.title = title;
          product.description = description;
          product.price = price;
          product.discountPercentage = discountPercentage;
          product.rating = rating;
          product.stock = stock;
          product.brand = brand;
          product.category = category;
          product.thumbnail = thumbnail;
          product.images = images;
        }
        return product;
      }));
    }
  }

  async function deleteProduct() {
    const res = await axios.delete(`${URL}/products/${id}`);

    if (res.status === 200) {
      setProducts(products.filter((product) => product._id !== id));

      if (page > 0) {
        handleSetProduct(page - 1);
        setPage(page - 1);
      } else {
        handleSetProduct(1);
        setPage(0);
      }
    }
  }

  const searchProduct = () => {
    console.log("searching for " + search); // TODO
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
      <Options
        createProduct={createProduct}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
        searchProduct={searchProduct}
        setSearch={setSearch}
      />
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
