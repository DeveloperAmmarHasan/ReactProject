import { useState, useEffect } from 'react';

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
      }
      setLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  const handleScrollPercentage = () => {
    const scrolledValue =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolledValue / height) * 100);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage);

    return () => {
      window.removeEventListener('scroll', handleScrollPercentage);
    };
  }, []);

  if (errorMsg) {
    return <div className="text-red-600 font-semibold">{errorMsg}</div>;
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg animate-pulse min-w-screen">
        Loading data...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 min-w-screen">
      {/* Sleek progress bar at very top */}
      <div className="fixed top-0 left-0 z-50 w-full h-1.5 bg-transparent">
        <div
          className="h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-pink-500/30 rounded-r-full transition-all duration-200"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>

      {/* Page header */}
      <h1 className="mb-10 text-4xl font-extrabold text-gray-800 tracking-tight">
        Custom Scroll Indicator
      </h1>

      {/* Data list */}
      <div className="w-full max-w-3xl space-y-5">
        {data && data.length > 0
          ? data.map((dataItem, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white dark:bg-gray-900 shadow-md border border-gray-100 dark:border-gray-700 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
              >
                <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  {dataItem.title}
                </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
