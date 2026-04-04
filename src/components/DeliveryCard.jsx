export default function DeliveryCard({ orderId, address, status }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Order #{orderId}</h3>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium
            ${
              status === "Delivered"
                ? "bg-green-100 text-green-600"
                : "bg-yellow-100 text-yellow-600"
            }`}
        >
          {status}
        </span>
      </div>

      <p className="text-gray-600 mt-3">{address}</p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
        View Details
      </button>
    </div>
  );
}