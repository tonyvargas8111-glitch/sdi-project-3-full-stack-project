function Personnel({ personnel }) {
  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">
          Personnel
        </h2>

        <p className="text-sm text-slate-500">
          View and manage S6 personnel.
        </p>
      </div>

      {/* Personnel Count */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-medium text-slate-500">
          Total Personnel
        </p>

        <p className="mt-2 text-4xl font-bold text-slate-800">
          {personnel.length}
        </p>
      </div>

      {/* Personnel Table */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="bg-slate-50 text-sm text-slate-600">
              <tr>
                <th className="px-6 py-4 font-semibold">
                  Name
                </th>

                <th className="px-6 py-4 font-semibold">
                  Rank
                </th>

                <th className="px-6 py-4 font-semibold">
                  MOS
                </th>

                <th className="px-6 py-4 font-semibold">
                  Unit
                </th>

                <th className="px-6 py-4 font-semibold">
                  Email
                </th>

                <th className="px-6 py-4 font-semibold">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">

              {personnel.map((person) => (
                <tr
                  key={person.personnel_id}
                  className="hover:bg-slate-50"
                >

                  <td className="px-6 py-4 font-medium text-slate-800">
                    {person.first_name} {person.last_name}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {person.rank}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {person.mos}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {person.unit_id}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {person.email}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {person.status}
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

export default Personnel