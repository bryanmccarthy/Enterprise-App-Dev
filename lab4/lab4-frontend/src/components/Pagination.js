import './Pagination.css';

function Pagination({ page, setPage, totalPages, handleSetProduct }) {

  const handlePrev = () => {
    if (page > 0) {
      handleSetProduct(page - 1);
      setPage(page - 1);
    }
  }

  const handleNext = () => {
    if (page < totalPages - 1) {
      handleSetProduct(page + 1);
      setPage(page + 1);
    }
  }

  return (
    <div className="Pagination">
      <button 
        className="Pagination-Button" 
        disabled={ page === 0 ? true : false } 
        onClick={handlePrev}>
          Prev
      </button>
      <div className="Pagination-Page">
        {page + 1} / {totalPages}
      </div>
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
