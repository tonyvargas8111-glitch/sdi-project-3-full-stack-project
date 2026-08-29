import { useState } from "react";

function EquipmentSignedOut({ equipment_signed_out, personnel, equipment }) {
  const [search, setSearch] = useState("");
  return (
    <div className="p-8">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Equipment Sign-Outs
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Equipment currently signed out or previously returned
        </p>
        {/* <p className="px-6 py-3 text-sm text-slate-500">
          Showing signed-out records
        </p> */}
        <input 
           type="text"
           placeholder="Search personnel or equipment"
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
                  Personnel
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Equipment
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Signed Out
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Returned
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Status
                </th>

              </tr>
            </thead>

            <tbody>

              {equipment_signed_out.filter((item) => {
                const person = personnel.find((person) => person.personnel_id === item.personnel_id
                 );
                const equipmentItem = equipment.find((equipmentItem) => equipmentItem.equipment_id === item.equipment_id
                 );
                const personName = `${person?.first_name || ""} ${person?.last_name || ""}`;
                const equipmentName = equipmentItem?.equipment_type || "";
                
                return (
                  personName.toLowerCase().includes(search.toLowerCase()) ||
                  equipmentName.toLowerCase().includes(search.toLowerCase())
                );
              })
              .map((item) => (

                <tr
                  key={item.sign_out_id}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {personnel.find(
                      (person) => person.personnel_id === item.personnel_id)?.first_name}{" "}
                    {personnel.find(
                      (person) => person.personnel_id === item.personnel_id)?.last_name}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {equipment.find(
                      (equipmentItem) =>
                      equipmentItem.equipment_id === item.equipment_id)?.equipment_type}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {new Date (item.signed_out_date).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {item.returned_date ? new Date (item.returned_date).toLocaleDateString() : "Not Returned"}
                  </td>

                  <td className="px-6 py-4">
                     <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                      item.signed_out_status === "Signed Out"
                      ? "bg-orange-100 text-orange-700"
                      : item.signed_out_status === "Returned"
                      ? "bg-green-100 text-green-700"
                      : item.signed_out_status === "Maintenance"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-slate-100 text-slate-700"
                       }`}
                       >
                      ● {item.signed_out_status}
                    </span>
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

export default EquipmentSignedOut;