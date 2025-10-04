function Pagination({ currentPage, totalPages = 10, onPageChange }) {
  function generateNoOfPages() {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {/* Prev button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md border transition 
          ${
            currentPage === 1
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-gray-700 border-gray-600"
          }`}
      >
        Prev
      </button>

      {/* Page numbers */}
      {generateNoOfPages().map((pageNo) => (
        <button
          key={pageNo}
          onClick={() => onPageChange(pageNo)}
          className={`px-3 py-1 rounded-md border transition 
            ${
              currentPage === pageNo
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-600"
            }`}
        >
          {pageNo}
        </button>
      ))}

      {/* Next button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md border transition 
          ${
            currentPage === totalPages
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gray-800 text-white hover:bg-gray-700 border-gray-600"
          }`}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
