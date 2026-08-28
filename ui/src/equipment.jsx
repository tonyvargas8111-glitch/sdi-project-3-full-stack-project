import { useState } from "react";

function Equipment({ equipment }) {
    const [search, setSearch] = useState("");

    const filteredEquipment = equipment.filter((item) =>
      item.equipment_type.toLowerCase().includes(search.toLowerCase()) ||
      item.model.toLowerCase().includes(search.toLowerCase()) ||
      item.serial_number.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className="p-8">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Equipment
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Equipment currently in the system
        </p>

        <input 
           type="text"
           placeholder="Search equipment..."
           value={search}
           onChange={(event) => setSearch(event.target.value)}
           className="mt-4 w-full rounded-lg border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-500" />
      </div>

      <div className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200">

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  ID
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Equipment Type
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Model
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Serial Number
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Status
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Location
                </th>

              </tr>
            </thead>

            <tbody>

              {filteredEquipment.map((item) => (

                <tr
                  key={item.equipment_id}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {item.equipment_id}
                  </td>

                  <td className="px-6 py-4 text-sm font-medium text-slate-800">
                    {item.equipment_type}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {item.model}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {item.serial_number}
                  </td>

                  <td className="px-6 py-4">
                    <span 
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                       item.status === "Available"
                       ?"bg-green-100 text-green-700"
                       : item.status === "Issued"
                       ?"bg-orange-100 text-orange-700"
                       : item.status === "Maintenance"
                       ?"bg-yellow-100 text-yellow-700"
                       : item.status === "Non-Operational"
                       ?"bg-red-100 text-red-700"
                       : item.status === "Lost"
                       ?"bg-red-100 text-red-700"
                       :"bg-slate-100 text-slate-700"
                    }`}
                    >
                        ● {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {item.location}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Equipment;