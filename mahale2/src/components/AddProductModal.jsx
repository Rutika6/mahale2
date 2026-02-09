import { useState, useEffect } from "react";

const AddProductForm = ({ addProduct, editingProduct, onCancelEdit }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [fractileQuantity, setFractileQuantity] = useState("");
  const [cellQuantity, setCellQuantity] = useState("");
  const [tierQuantity, setTierQuantity] = useState("");
  const [selectedShift, setSelectedShift] = useState("");
  const [selectedTiming, setSelectedTiming] = useState("");

  const shiftTimings = {
    morning: ["6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-1", "1-2"],
    afternoon: ["2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10"],
    night: ["10-11", "11-12", "12-1", "1-2", "2-3", "3-4", "4-5", "5-6"]
  };

  const shiftLabels = {
    morning: "🌅 Morning (6 AM - 2 PM)",
    afternoon: "☀️ Afternoon (2 PM - 10 PM)",
    night: "🌙 Night (10 PM - 6 AM)"
  };

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

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setQuantity(editingProduct.quantity);
      setFractileQuantity(editingProduct.fractileQuantity || "0");
      setCellQuantity(editingProduct.cellQuantity || "0");
      setTierQuantity(editingProduct.tierQuantity || "0");
      setSelectedTiming(editingProduct.timing || "");
      
      if (editingProduct.timing) {
        const shift = Object.entries(shiftTimings).find(([_, timings]) =>
          timings.includes(editingProduct.timing)
        )?.[0] || "";
        setSelectedShift(shift);
      }
    } else {
      clearForm();
    }
  }, [editingProduct]);

  const clearForm = () => {
    setName("");
    setQuantity("");
    setFractileQuantity("");
    setCellQuantity("");
    setTierQuantity("");
    setSelectedShift("");
    setSelectedTiming("");
  };

  const submit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;

    addProduct({ 
      name, 
      quantity,
      fractileQuantity: fractileQuantity || "0",
      cellQuantity: cellQuantity || "0",
      tierQuantity: tierQuantity || "0",
      timing: selectedTiming
    });
    clearForm();
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

          <div className="timings-container">
            <label className="timings-label">Select Shift</label>
            
            <div className="shift-dropdown-wrapper">
              <select
                value={selectedShift}
                onChange={(e) => {
                  setSelectedShift(e.target.value);
                  setSelectedTiming("");
                }}
                className="shift-select"
              >
                <option value="">Choose Shift</option>
                <option value="morning">{shiftLabels.morning}</option>
                <option value="afternoon">{shiftLabels.afternoon}</option>
                <option value="night">{shiftLabels.night}</option>
              </select>
            </div>

            {selectedShift && (
              <div className="timing-dropdown-wrapper">
                <label className="timings-label">Select Timing</label>
                <select
                  value={selectedTiming}
                  onChange={(e) => setSelectedTiming(e.target.value)}
                  className="timing-select"
                >
                  <option value="">Choose Time Slot</option>
                  {shiftTimings[selectedShift].map((timing) => (
                    <option key={timing} value={timing}>
                      {timing}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selectedTiming && (
              <div className="selected-timing-display">
                <strong>📍 Selected:</strong> {selectedTiming}
              </div>
            )}
          </div>
        </>
      )}

      <button className="add-btn" type="submit">
        {editingProduct ? "Update" : "Add"}
      </button>
      {editingProduct && (
        <button
          className="cancel-btn"
          type="button"
          onClick={() => {
            clearForm();
            onCancelEdit();
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default AddProductForm;
