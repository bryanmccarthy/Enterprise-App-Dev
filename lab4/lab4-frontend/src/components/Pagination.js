import './Pagination.css';

function Pagination({ page, setPage, totalPages }) {

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  return (
    <div className="Pagination">
      <button 
        className="Pagination-Button" 
        disabled={ page === 1 ? true : false } 
        onClick={handlePrev}>
          Prev
      </button>
      <button
        className="Pagination-Button"
        disabled={ page === totalPages ? true : false } 
        onClick={handleNext}>
          Next
      </button>
    </div>
  );
}

export default Pagination;
