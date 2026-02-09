
const DashboardCards = ({ products }) => {
  const totalQuantity = products.reduce(
    (sum, p) => sum + Number(p.quantity),
    0
  );

  const totalFractile = products.reduce(
    (sum, p) => sum + Number(p.fractileQuantity || 0),
    0
  );

  const totalCell = products.reduce(
    (sum, p) => sum + Number(p.cellQuantity || 0),
    0
  );

  const totalTier = products.reduce(
    (sum, p) => sum + Number(p.tierQuantity || 0),
    0
  );

  return (
    <div className="dashboard">
      <div className="card">
        <div className="card-title">Total Products</div>
        <div className="card-value">{products.length}</div>
      </div>

      <div className="card">
        <div className="card-title">Total Quantity</div>
        <div className="card-value">{totalQuantity}</div>
      </div>

      <div className="card">
        <div className="card-title">Total Fractile</div>
        <div className="card-value">{totalFractile}</div>
      </div>

      <div className="card">
        <div className="card-title">Total Cell</div>
        <div className="card-value">{totalCell}</div>
      </div>

      <div className="card">
        <div className="card-title">Total Tier</div>
        <div className="card-value">{totalTier}</div>
      </div>
    </div>
  );
};

export default DashboardCards;
