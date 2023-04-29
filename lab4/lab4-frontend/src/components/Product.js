import './Product.css';

function Product({ title, setTitle, description, setDescription, 
                  price, setPrice, discountPercentage, setDiscountPercentage, 
                  rating, setRating, stock, setStock, brand, setBrand, category, 
                  setCategory, thumbnail, images }) {

  return (
    <div className="Product">
      <div className="Product-Details">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="number" value={discountPercentage} onChange={(e) => setDiscountPercentage(e.target.value)} />
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
    </div>
  );
}

export default Product;
