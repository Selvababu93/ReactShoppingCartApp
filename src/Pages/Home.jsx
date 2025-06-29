import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductCard from "../Components/Product-Card/ProductCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) throw new Error("Error While Fetching API");
      const result = await response.json();
      console.log(result);
      setProducts(result);
    } catch (error) {
      console.log(error.message);
      setFetchError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {fetchError && <div style={{ color: "red" }}>{fetchError}</div>}
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />{" "}
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length > 0
            ? products.map((product) => <ProductCard product={product} />)
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;
