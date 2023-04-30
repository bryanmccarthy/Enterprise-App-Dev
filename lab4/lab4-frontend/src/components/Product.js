import './Product.css';

function Product({ title, setTitle, description, setDescription, 
                  price, setPrice, discountPercentage, setDiscountPercentage, 
                  rating, setRating, stock, setStock, brand, setBrand, category, 
                  setCategory, thumbnail, images }) {

  return (
    <div className="Product">
      <div className="Product-Details">
        <div className="Product-Field">
          <label htmlFor="title">Title</label>
          <input type="text" id="Product-Input" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="Product-Field">
          <label htmlFor="description">Description</label>
          <input type="text" id="Product-Input" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="Product-Field">
          <label htmlFor="price">Price</label>
          <input type="number" id="Product-Input" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="Product-Field">
          <label htmlFor="discountPercentage">Discount Percentage</label>
          <input type="number" id="Product-Input" value={discountPercentage} onChange={(e) => setDiscountPercentage(e.target.value)} />
        </div>
        <div className="Product-Field">
          <label htmlFor="rating">Rating</label>
          <input type="number" id="Product-Input" value={rating} onChange={(e) => setRating(e.target.value)} />
        </div>
        <div className="Product-Field">
          <label htmlFor="stock">Stock</label>
          <input type="number" id="Product-Input" value={stock} onChange={(e) => setStock(e.target.value)} />
        </div>
        <div className="Product-Field">
          <label htmlFor="brand">Brand</label>
          <input type="text" id="Product-Input" value={brand} onChange={(e) => setBrand(e.target.value)} />
        </div>
        <div className="Product-Field">
          <label htmlFor="category">Category</label>
          <input type="text" id="Product-Input" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className="Product-Thumbnail">
          <img id="Thumbnail" src={thumbnail} alt="thumbnail" />
        </div>
      </div>
    </div>
  );
}

export default Product;
