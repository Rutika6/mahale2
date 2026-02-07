import { useState } from "react";

const ProductTable = ({ products, deleteProduct }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-box">
      <div className="table-header">
        <h2>Product Inventory</h2>
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
        />
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="empty-state">No products found</div>
      ) : (
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Qty</th>
                <th>Fractile</th>
                <th>Cell</th>
                <th>Tier</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((p, i) => {
                const originalIndex = products.indexOf(p);
                return (
                  <tr key={i} className="product-row">
                    <td className="product-name">{p.name}</td>
                    <td className="qty">{p.quantity}</td>
                    <td className="sub-qty">{p.fractileQuantity || "-"}</td>
                    <td className="sub-qty">{p.cellQuantity || "-"}</td>
                    <td className="sub-qty">{p.tierQuantity || "-"}</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteProduct(originalIndex)}
                        title="Delete"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
