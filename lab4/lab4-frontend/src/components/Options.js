import './Options.css';

function Options({ updateProduct }) {
  return (
    <div className="Options">
      <button className="Option-Button">Insert</button>
      <button className="Option-Button" onClick={updateProduct}>Update</button>
      <button className="Option-Button">Delete</button>
    </div>
  );
}

export default Options;
