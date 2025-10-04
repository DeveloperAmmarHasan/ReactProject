import { useState } from "react";
import Pagination from ".";

function PaginationTest() {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(currentPage) {
    setCurrentPage(currentPage);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4 min-w-full">
      <h1 className="text-2xl font-bold text-indigo-400 mb-6">
        📦 Product List
      </h1>

      {/* Items */}
      <ul className="w-full max-w-md bg-gray-800 rounded-lg shadow-md divide-y divide-gray-700 mb-6">
        {currentListOfItems.map((listItem) => (
          <li
            key={listItem.id}
            className="px-4 py-3 hover:bg-gray-700 transition"
          >
            {listItem.name}
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default PaginationTest;
