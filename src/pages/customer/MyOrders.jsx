export default function MyOrders() {
  const orders = [
    { id: "685b33", amount: 38.98, status: "Pending" },
    { id: "361f5a", amount: 18.99, status: "Pending" },
    { id: "55df32", amount: 150.0, status: "Delivered" },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      <div className="space-y-6">
        {orders.map((order, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">Order #{order.id}</h2>
              <span
                className={`text-sm px-3 py-1 rounded-full mt-2 inline-block
                  ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
              >
                {order.status}
              </span>
            </div>
            <div className="text-xl font-bold">${order.amount}</div>
          </div>
        ))}
      </div>
    </>
  );
}