import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <div>
        <h1 className="text-2xl flex justify-center">Marketplace</h1>
      </div>
      <div>
        <ProductForm products={products} setProducts={setProducts} />
      </div>
      <div>
        <ProductList products={products} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default App;
