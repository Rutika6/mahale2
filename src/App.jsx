import { useState } from "react";
import "./App.css"; //
import DashboardCards from "./components/DashboardCards"; //
import ProductTable from "./components/ProductTable"; //
import AddProductModal from "./components/AddProductModal"; //
import AdminPage from "./components/AdminPage"; //
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";

const App = () => {
  const [products, setProducts] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [user, setUser] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Permission check: Is the user allowed to see Admin Page?
  const canAccessAdmin = user.role === 'admin' || user.role === 'root';

  return (
    <div className="app-container">
      <Navbar setShowAdmin={setShowAdmin} user={user} setUser={setUser} />

      {/* SECURE RENDER: Only show AdminPage if showAdmin is true AND user has permission */}
      {showAdmin && canAccessAdmin ? (
        <AdminPage onClose={() => setShowAdmin(false)} user={user} />
      ) : (
        <>
          <DashboardCards products={products} />
          
          {/* ALLOW ALL LOGGED-IN USERS TO ADD PRODUCTS */}
          {/* If you want to restrict this later, add a check here like: user.role !== 'guest' */}
          <AddProductModal addProduct={addProduct} />
          
          <ProductTable products={products} deleteProduct={deleteProduct} />
        </>
      )}
    </div>
  );
};

export default App;