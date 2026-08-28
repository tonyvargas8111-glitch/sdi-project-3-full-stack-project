import { useEffect, useState } from "react";

function App() {
    const [units, setUnits] = useState([]);
    const [personnel, setPersonnel] = useState([]);
    const [equipment, setEquipment] = useState([]);
    const [equipment_signed_out, setEquipmentSignedOut] = useState([]);
    const [maintenance_tickets, setMaintenanceTickets] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/units")
        .then((response) => response.json())
        .then((data) => {
          setUnits(data);
        })
        .catch((error) => {
          console.error("Error fetching units:", error);
        });

        fetch("http://localhost:3000/api/personnel")
        .then((response) => response.json())
        .then((data) => {
          setPersonnel(data);
        })
        .catch((error) => {
          console.error("Error fetching personnel:", error);
        });

        fetch("http://localhost:3000/api/equipment")
        .then((response) => response.json())
        .then((data) => {
          setEquipment(data);
        })
        .catch((error) => {
          console.error("Error fetching equipment:", error);
        });

        fetch("http://localhost:3000/api/equipment_signed_out")
        .then((response) => response.json())
        .then((data) => {
          setEquipmentSignedOut(data);
        })
        .catch((error) => {
          console.error("Error fetching equipment signed out:", error);
        });

        fetch("http://localhost:3000/api/maintenance_tickets")
        .then((response) => response.json())
        .then((data) => {
          setMaintenanceTickets(data);
        })
        .catch((error) => {
          console.error("Error fetching maintenance tickets:", error);
        });

      }, []);

    return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-3xl font-bold tracking-wide">
              S6 BATTLE BOARD
            </h1>
            <p className="text-sm text-slate-300">
              Communications & Equipment Management
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-300">System Status</p>
            <p className="font-semibold text-green-400">
              ● Operational
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">

        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Dashboard
          </h2>
          <p className="text-slate-500">
            Overview of S6 personnel, equipment, and maintenance.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Personnel */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <p className="text-sm font-medium text-slate-500">
              Personnel
            </p>
            <p className="mt-2 text-4xl font-bold text-slate-800">
              {personnel.length}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Personnel records
            </p>
          </div>

          {/* Equipment */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <p className="text-sm font-medium text-slate-500">
              Equipment
            </p>
            <p className="mt-2 text-4xl font-bold text-slate-800">
              {equipment.length}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Equipment records
            </p>
          </div>
          

          {/* Sign Outs */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <p className="text-sm font-medium text-slate-500">
              Equipment Sign-Outs
            </p>
            <p className="mt-2 text-4xl font-bold text-slate-800">
              {equipment_signed_out.length}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Sign-out records
            </p>
          </div>

          {/* Maintenance */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <p className="text-sm font-medium text-slate-500">
              Maintenance Tickets
            </p>
            <p className="mt-2 text-4xl font-bold text-slate-800">
              {maintenance_tickets.length}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Maintenance records
            </p>
          </div>

        </div>

        {/* Lower Dashboard */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Units */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-slate-800">
                Units
              </h3>
              <p className="text-sm text-slate-500">
                Units currently in the system
              </p>
            </div>

            <div className="space-y-3">
              {units.map((unit) => (
                <div
                  key={unit.unit_id}
                  className="flex items-center justify-between rounded-lg bg-slate-50 p-4"
                >
                  <div>
                    <p className="font-semibold text-slate-800">
                      {unit.unit_name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {unit.unit_type}
                    </p>
                  </div>

                  <p className="text-sm font-medium text-slate-600">
                    {unit.uic}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-slate-800">
                Maintenance
              </h3>
              <p className="text-sm text-slate-500">
                Recent maintenance activity
              </p>
            </div>

            <div className="space-y-3">
              {maintenance_tickets.slice(0, 5).map((ticket) => (
                <div
                  key={ticket.ticket_id}
                  className="rounded-lg bg-slate-50 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-800">
                      Ticket #{ticket.ticket_id}
                    </p>

                    <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
                      {ticket.priority}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    {ticket.problem}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}

export default App;