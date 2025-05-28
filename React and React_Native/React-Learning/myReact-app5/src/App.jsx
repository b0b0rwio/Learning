import React from "react";
import ProductCard from "./ProductCard";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection:"row",flexWrap: "wrap", justifyContent: "center" }}>
      <ProductCard />
    </div>
  );
};

export default App;