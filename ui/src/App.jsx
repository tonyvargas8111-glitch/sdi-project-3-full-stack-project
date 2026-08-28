import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Personnel from "./personnel";
import Equipment from "./equipment";
// import EquipmentSignedOuts from "./equipment_signed_out";
// import Maintenance from "./maintenance";


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
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100">
      <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-slate-900 text-white shadow-xl">

        {/* Logo / Title */}
        <div className="border-b border-slate-700 px-6 py-6">
          <h1 className="text-xl font-bold tracking-wide">
            S6 BATTLE BOARD
          </h1>

          <p className="mt-1 text-xs text-slate-400">
            Communications & Equipment
          </p>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6">

          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Navigation
          </p>

          <div className="space-y-2">

            {/* Dashboard */}
            <Link to="/" className="flex w-full items-center rounded-lg bg-slate-700 px-3 py-3 text-left font-medium text-white">
              <span className="mr-3 text-lg">▣</span>
              Dashboard
            </Link>

            {/* Personnel */}
            <Link to="/personnel" className="flex w-full items-center rounded-lg px-3 py-3 text-left font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
              <span className="mr-3 text-lg">♙</span>
              Personnel
            </Link>

            {/* Equipment */}
            <Link to="/equipment" className="flex w-full items-center rounded-lg px-3 py-3 text-left font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
              <span className="mr-3 text-lg">▣</span>
              Equipment
            </Link>

            {/* Sign-Outs */}
            <Link to="/equipment_signed_out" className="flex w-full items-center rounded-lg px-3 py-3 text-left font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
              <span className="mr-3 text-lg">⇄</span>
              Equipment Sign-Outs
            </Link>

            {/* Maintenance */}
            <Link to="/maintenance" className="flex w-full items-center rounded-lg px-3 py-3 text-left font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
              <span className="mr-3 text-lg">⚙</span>
              Maintenance
            </Link>

          </div>
        </nav>

        {/* Bottom of Sidebar */}
        <div className="mt-auto border-t border-slate-700 px-6 py-5">
          <p className="text-xs text-slate-500">
            S6 Communications
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Equipment Management System
          </p>
        </div>

      </aside>


      {/* Main Application Area */}
      <div className="flex min-w-0 flex-1 flex-col">
        <Routes>
          <Route path="/personnel" element={<Personnel personnel={personnel} />} />
          <Route path="/equipment" element={<Equipment equipment={equipment} />} />
          {/* <Route path="/equipment_signed_out" element={<EquipmentSignedOut equipment_signed_out={equipment_signed_out} />} />
          <Route path="/maintenance" element={<Maintenance maintenance={maintenance} />} /> */}
        <Route path="/" element={
          <>

        {/* Header */}
        <header className="bg-white shadow-sm">

          <div className="flex items-center justify-between px-8 py-5">

            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Dashboard
              </h2>

              <p className="text-sm text-slate-500">
                Overview of S6 personnel, equipment, and maintenance.
              </p>
            </div>

            {/* System Status */}
            <div className="text-right">

              <p className="text-xs text-slate-500">
                System Status
              </p>

              <p className="font-semibold text-green-600">
                ● Operational
              </p>

            </div>

          </div>

        </header>


        {/* Main Content */}
        <main className="flex-1 px-8 py-8">

          {/* Statistics Cards */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {/* Personnel */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
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
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
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


            {/* Sign-Outs */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
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
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
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


          {/* Dashboard Panels */}
          <div className="mt-8 grid gap-6 xl:grid-cols-2">

            {/* Units */}
            <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">

              <div className="mb-5">
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

                      <p className="text-sm capitalize text-slate-500">
                        {unit.unit_type}
                      </p>
                    </div>

                    <p className="text-sm font-medium text-slate-600">
                      {unit.uic}
                    </p>

                  </div>
                ))}

              </div>

            </section>


            {/* Maintenance */}
            <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">

              <div className="mb-5">
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

            </section>

          </div>

        </main>

        </>
        }
        />
        </Routes>

      </div>

    </div>

  </div>
  </BrowserRouter>
);
}

export default App;