import { useEffect, useState } from 'react';

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`,
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
      console.log(result);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [count]);
  useEffect(() => {
    if (products && products.length === 100) setDisabled(true);
  }, [products]);
  if (loading) return <div>Loading Data ! Please wait</div>;
  return (
    // container
    <div className="flex flex-col gap-5">
      {' '}
      {/* product-container */}
      <div className="grid grid-cols-[repeat(4,1fr)] gap-2.5">
        {products && products.length
          ? products.map((item) => (
              <div
                key={item.id}
                className="p-5 border border-solid flex flex-col gap-2.5"
              >
                {/* products */}
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>{' '}
      {/* button container */}
      <div className="flex justify-center">
        <button
          disabled={disabled}
          onClick={() => setCount(count + 1)}
          className={
            disabled
              ? 'bg-gray-500 rounded-2xl p-2'
              : 'bg-amber-500 rounded-2xl p-2'
          }
        >
          Load More data
        </button>
        <br />
        {disabled ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
