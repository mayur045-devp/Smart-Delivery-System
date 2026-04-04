import DeliveryCard from "../../components/DeliveryCard";

export default function CustomerDashboard() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Welcome Back 👋</h1>

      <div className="grid grid-cols-3 gap-6">
        <DeliveryCard
          orderId="1023"
          address="Nashik, Maharashtra"
          status="Pending"
        />
        <DeliveryCard
          orderId="1098"
          address="Pune, Maharashtra"
          status="Delivered"
        />
      </div>
    </div>
  );
}