import React from "react";
import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  console.log("data :", data, "\nerror :", error, "\npending :", pending);
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h1>pending data please wait</h1> : null}
      {error ? <h1>{error}</h1> : null}
      {data && data.products && data.products.length
        ? data.products.map((item) => <p key={item.id}>{item.title}</p>)
        : null}
    </div>
  );
}
