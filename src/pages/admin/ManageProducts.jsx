import Sidebar from "../../components/Sidebar";

export default function ManageProducts() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-2xl font-bold mb-6">Manage Products</h1>

        <div className="bg-white shadow rounded-2xl p-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl mb-4">
            + Add Product
          </button>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-xl">
              <h3 className="font-semibold">Product Name</h3>
              <p className="text-gray-600">₹999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}