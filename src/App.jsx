import { useState } from "react";
import "./App.css";
import DashboardCards from "./components/DashboardCards";
import ProductTable from "./components/ProductTable";
import AddProductModal from "./components/AddProductModal";
import AdminPage from "./components/AdminPage";
import Navbar from "./components/Navbar"; // 1. Import Navbar

const App = () => {
  const [products, setProducts] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      {/* 2. Add Navbar Component */}
      <Navbar setShowAdmin={setShowAdmin} />

      {showAdmin ? (
        <AdminPage onClose={() => setShowAdmin(false)} />
      ) : (
        <>
          <DashboardCards products={products} />
          <AddProductModal addProduct={addProduct} />
          <ProductTable products={products} deleteProduct={deleteProduct} />
        </>
      )}
    </div>
  );
};

export default App;