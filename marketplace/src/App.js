import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import data from "./data.json";

function App() {
  const [categoryFilter, setCategoryFilter] = useState("");

  const productTypes = [...new Set(data.map((product) => product.type))].sort();

  const handleFilterChange = (category) => {
    setCategoryFilter(category);
  };

  return (
    <div className="App">
      <Navbar productTypes={productTypes} onFilterChange={handleFilterChange} />
      <ProductList products={data} categoryFilter={categoryFilter} />
    </div>
  );
}

export default App;
