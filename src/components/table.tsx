import { Eye } from "lucide-react";

const mockData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    createdAt: "2025-05-01",
    paymentMethod: "Credit Card",
    totalPrice: "$120.00",
    status: "Paid",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    createdAt: "2025-05-03",
    paymentMethod: "PayPal",
    totalPrice: "$75.00",
    status: "Pending",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    createdAt: "2025-05-05",
    paymentMethod: "Stripe",
    totalPrice: "$98.00",
    status: "Failed",
  },

];

const TableSection = () => {
  return (
    <section className="py-20 lg:py-[120px]  text-white">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full">
            <div className="max-w-full overflow-x-auto">
              <table className="table-auto w-full  ">
                <thead>
                  <tr className="text-center rounded-2xl ">
                    {[
                      "S.No",
                      "Name",
                      "Email Address",
                      "Created At",
                      "Payment Method",
                      "Total Price",
                      "Status",
                      "Action",
                    ].map((heading, index) => (
                      <th
                        key={index}
                        className="w-1/6 min-w-[160px] text-base font-semibold py-4"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((item, index) => (
                    <tr key={item.id} className="text-center bg-[#31313161] border-b-4 border-black ">
                      <td className="py-5 px-2">{index + 1}</td>
                      <td className="py-5 px-2">{item.name}</td>
                      <td className="py-5 px-2">{item.email}</td>
                      <td className="py-5 px-2">{item.createdAt}</td>
                      <td className="py-5 px-2">{item.paymentMethod}</td>
                      <td className="py-5 px-2">{item.totalPrice}</td>
                      <td className="py-5 px-2">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            item.status === "Paid"
                              ? "bg-green-600 text-white"
                              : item.status === "Pending"
                              ? "bg-yellow-500 text-white"
                              : "bg-red-600 text-white"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-5 px-2">
                        <button
                          className="inline-flex items-center justify-center p-2   rounded  transition"
                          title="View"
                        >
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableSection;
