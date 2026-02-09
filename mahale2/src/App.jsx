import { useState } from "react";
import "./App.css";
import DashboardCards from "./components/DashboardCards";
import ProductTable from "./components/ProductTable";
import AddProductModal from "./components/AddProductModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addProduct = (product) => {
    if (editingIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = product;
      setProducts(updatedProducts);
      setEditingIndex(null);
    } else {
      setProducts([...products, product]);
    }
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const updateProduct = (index) => {
    setEditingIndex(index);
  };

  return (
    <div className="app-container">
      <div className="app-title">MAHALE INDUSTRIES</div>

      <DashboardCards products={products} />
      <AddProductModal addProduct={addProduct} editingProduct={editingIndex !== null ? products[editingIndex] : null} onCancelEdit={() => setEditingIndex(null)} />
      <ProductTable products={products} deleteProduct={deleteProduct} updateProduct={updateProduct} />
    </div>
  );
};

export default App;
