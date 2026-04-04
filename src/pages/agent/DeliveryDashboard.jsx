export default function DeliveryDashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Delivery Dashboard</h1>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard title="Active" value="1" />
        <StatCard title="Delivered" value="3" />
        <StatCard title="Total Assigned" value="4" />
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h2 className="font-semibold mb-4">Active Deliveries</h2>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
          Mark as Picked Up
        </button>
      </div>
    </>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}