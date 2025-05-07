import AdminNavbar from "./AdminNavbar";

const Dashboard = () => {
  return (
    <>
      <AdminNavbar />
      
      {/* Padding top to prevent content hiding behind fixed navbar */}
      <div className="pt-20 px-6 text-center">
        <h1 className="text-3xl font-bold text-primary">Welcome Admin 👋</h1>
        <p className="mt-4 text-gray-600">You are now logged in.</p>
      </div>
    </>
  );
};

export default Dashboard;
