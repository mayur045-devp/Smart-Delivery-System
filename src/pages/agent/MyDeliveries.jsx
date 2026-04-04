import Sidebar from "../../components/Sidebar";
import DeliveryCard from "../../components/DeliveryCard";

export default function MyDeliveries() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-2xl font-bold mb-6">My Deliveries</h1>

        <div className="grid grid-cols-3 gap-6">
          <DeliveryCard
            orderId="2345"
            address="Nashik Road, Maharashtra"
            status="Pending"
          />
          <DeliveryCard
            orderId="9876"
            address="Mumbai Central"
            status="Delivered"
          />
        </div>
      </div>
    </div>
  );
}