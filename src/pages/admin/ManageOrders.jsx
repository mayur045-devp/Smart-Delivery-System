import Sidebar from "../../components/Sidebar";

export default function ManageOrders() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-2xl font-bold mb-6">Manage Orders</h1>

        <div className="bg-white shadow rounded-2xl p-6">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3">#1024</td>
                <td>Mayur</td>
                <td className="text-yellow-600">Pending</td>
                <td>
                  <button className="bg-green-600 text-white px-4 py-1 rounded-lg">
                    Assign
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}