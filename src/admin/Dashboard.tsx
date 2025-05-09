import AdminNavbar from "./AdminNavbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />

      {/* Main Content with mt-20 for navbar spacing */}
      <main className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20">
        {/* Welcome Header */}
        <div className="pt-6 pb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Welcome Admin <span className="text-blue-600">👋</span>
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            You are now logged in. Let's manage the system efficiently.
          </p>
        </div>

        {/* Stats Card: Total Members */}
        {/* Stats Cards */}
{/* Compact Stats Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
  {/* Total Members */}
  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 hover:shadow-md transition-shadow">
    <div className="flex items-center space-x-3">
      <div className="h-10 w-10 rounded-md bg-blue-50 flex items-center justify-center">
        <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 font-medium">Total Members</p>
        <p className="text-lg font-semibold text-gray-900">150</p>
      </div>
    </div>
  </div>

  {/* Total Webinars */}
  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 hover:shadow-md transition-shadow">
    <div className="flex items-center space-x-3">
      <div className="h-10 w-10 rounded-md bg-purple-50 flex items-center justify-center">
        <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m2 8a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14z" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 font-medium">Total Webinars</p>
        <p className="text-lg font-semibold text-gray-900">25</p>
      </div>
    </div>
  </div>
</div>


      </main>
    </div>
  );
};

export default Dashboard;
