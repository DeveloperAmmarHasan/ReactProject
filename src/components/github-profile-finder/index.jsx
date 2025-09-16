import { useEffect, useState } from "react";
import User from "./User";

function GithubProfileFinder() {
  const [username, setUsername] = useState("DeveloperAmmarHasan");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSubmit = () => {
    fetchUserData();
  };

  async function fetchUserData() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();

      if (data) {
        setUserData(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold text-gray-600">
        Loading Data... Please wait!
      </div>
    );
  }

  return (
    <div className="mx-auto my-10 w-[90%] max-w-[800px] p-6 rounded-2xl shadow-lg bg-white">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mb-6">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search GitHub Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="flex-1 p-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm"
        />
        <button
          className="bg-cyan-400 hover:bg-cyan-500 text-black font-medium px-5 py-2 rounded-lg shadow-md transition duration-200"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      {userData && <User user={userData} />}
    </div>
  );
}

export default GithubProfileFinder;
