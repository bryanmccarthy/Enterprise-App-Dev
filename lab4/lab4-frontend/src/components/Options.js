import './Options.css';

function Options({ createProduct, updateProduct, deleteProduct, searchProduct, setSearch }) {

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="Options">
      <button className="Option-Button" onClick={createProduct}>Insert</button>
      <button className="Option-Button" onClick={updateProduct}>Update</button>
      <button className="Option-Button" onClick={deleteProduct}>Delete</button>
      <div className="Divider"></div>
      <div className="Option-Search">
        <input className="Option-Input" type="text" placeholder="Search..." onChange={handleSearchChange} />
        <button className="Option-Button" onClick={searchProduct}>Search</button>
      </div>
    </div>
  );
}

export default Options;
