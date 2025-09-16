import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUser, setFilteredUser] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        user && user.length
          ? user.filter((item) => item.toLowerCase().includes(query))
          : [];
      setFilteredUser(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data && data.users && data.users.length) {
        setUser(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      setError(error);
    }
  }

  const handleClick = (e) => {
    setShowDropDown(false);
    setSearchParam(e.target.innerText);
    setFilteredUser([]);
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-10 relative">
      {loading ? (
        <h1 className="text-center text-gray-600 font-medium">
          Loading Data, please wait...
        </h1>
      ) : (
        <input
          type="text"
          name="search-users"
          placeholder="Search users here..."
          value={searchParam}
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     text-gray-800"
        />
      )}
      {showDropDown && (
        <Suggestions handleClick={handleClick} data={filteredUser} />
      )}
    </div>
  );
};

export default SearchAutoComplete;
