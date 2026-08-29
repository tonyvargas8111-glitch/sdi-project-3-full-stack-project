import Personnel from "./personnel";

function Maintenance({ maintenance_tickets, equipment, personnel }) {
  return (
    <div className="p-8">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Maintenance
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Equipment maintenance tickets
        </p>
      </div>

      <div className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200">

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Equipment
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Reported By
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Problem
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Priority
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Status
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-700">
                  Created
                </th>

              </tr>
            </thead>

            <tbody>

              {maintenance_tickets.map((ticket) => (

                <tr
                  key={ticket.ticket_id}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {equipment.find(
                        (item) => item.equipment_id === ticket.equipment_id)?.equipment_type}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {personnel.find(
                        (person) => person.personnel_id === ticket.reported_by)?.first_name}{" "}
                    {personnel.find(
                        (person) => person.personnel_id === ticket.reported_by)?.last_name}{" "}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {ticket.problem}
                  </td>

                  <td className="px-6 py-4">
                    <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                        ticket.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : ticket.priority === "Medium"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-green-100 text-green-700"
                    }`}
                    >
                        ● {ticket.priority}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                        ticket.status === "Open"
                        ? "bg-orange-100 text-orange-700"
                        : ticket.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                    >
                        ● {ticket.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {new Date(ticket.created_date).toLocaleDateString()}
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

export default Maintenance;