export default function Home() {
  const products = [
    { name: "Artisan Bread", price: 7.49 },
    { name: "Coffee Beans", price: 18.99 },
    { name: "Wireless Earbuds", price: 75.0 },
    { name: "Cotton T-Shirt", price: 29.99 },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-12 mb-10">
        <h1 className="text-5xl font-bold mb-4">
          Fresh Delivery, <br /> Right to Your Door
        </h1>
        <p className="text-lg opacity-90">
          Choose your products, pick a time slot, and we’ll handle the rest.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-8">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-6"
          >
            <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-gray-600 mb-3">${p.price}</p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
              + Add
            </button>
          </div>
        ))}
      </div>
    </>
  );
}