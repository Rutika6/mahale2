import { useState } from "react";

const AddProductForm = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [fractileQuantity, setFractileQuantity] = useState("");
  const [cellQuantity, setCellQuantity] = useState("");
  const [tierQuantity, setTierQuantity] = useState("");

  const carProducts = [
    "Engine Oil",
    "Brake Pads",
    "Air Filter",
    "Spark Plugs",
    "Car Battery",
    "Tires",
    "Transmission Fluid",
    "Coolant",
    "Fuel Filter",
    "Windshield Wipers",
    "Brake Fluid",
    "Power Steering Fluid",
    "Alternator",
    "Starter Motor",
    "Water Pump"
  ];

  const submit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;

    addProduct({ 
      name, 
      quantity,
      fractileQuantity: fractileQuantity || "0",
      cellQuantity: cellQuantity || "0",
      tierQuantity: tierQuantity || "0"
    });
    setName("");
    setQuantity("");
    setFractileQuantity("");
    setCellQuantity("");
    setTierQuantity("");
  };

  return (
    <form className="form-box" onSubmit={submit}>
      <div className="form-group">
        <label>Product</label>
        <select
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        >
          <option value="">Select Product</option>
          {carProducts.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Qty</label>
        <input
          type="number"
          placeholder="0"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="0"
        />
      </div>

      {quantity && (
        <>
          <div className="form-group">
            <label>Fractile</label>
            <input
              type="number"
              placeholder="0"
              value={fractileQuantity}
              onChange={(e) => setFractileQuantity(e.target.value)}
              min="0"
            />
          </div>

          <div className="form-group">
            <label>Cell</label>
            <input
              type="number"
              placeholder="0"
              value={cellQuantity}
              onChange={(e) => setCellQuantity(e.target.value)}
              min="0"
            />
          </div>

          <div className="form-group">
            <label>Tier</label>
            <input
              type="number"
              placeholder="0"
              value={tierQuantity}
              onChange={(e) => setTierQuantity(e.target.value)}
              min="0"
            />
          </div>
        </>
      )}

      <button className="add-btn" type="submit">Add</button>
    </form>
  );
};

export default AddProductForm;
