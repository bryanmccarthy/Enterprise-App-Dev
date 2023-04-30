import './Options.css';

function Options({ createProduct, updateProduct, deleteProduct }) {
  return (
    <div className="Options">
      <button className="Option-Button" onClick={createProduct}>Insert</button>
      <button className="Option-Button" onClick={updateProduct}>Update</button>
      <button className="Option-Button" onClick={deleteProduct}>Delete</button>
    </div>
  );
}

export default Options;
