import { useState } from "react";
import "./App.css";
import DashboardCards from "./components/DashboardCards";
import ProductTable from "./components/ProductTable";
import AddProductModal from "./components/AddProductModal";

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <div className="app-title">MAHALE INDUSTRIES</div>

      <DashboardCards products={products} />
      <AddProductModal addProduct={addProduct} />
      <ProductTable products={products} deleteProduct={deleteProduct} />
    </div>
  );
};

export default App;
