// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Menu } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import logo from '../assets/Mcrt-logo.jpg';

// const AdminNavbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   const linkClass = ({ isActive }) =>
//     `relative text-gray-600 hover:text-primary transition-colors pb-1 
//      ${isActive ? 'text-primary font-semibold underline underline-offset-4' : ''}`;

//   return (
//     <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-10 h-20">
//       <div className="container mx-auto px-4 h-full flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <NavLink to="/" className="flex items-center">
//             <img
//               src={logo}
//               alt="Admin Logo"
//               className="h-10 w-30 object-contain hover:scale-105 transition-transform duration-300"
//             />
//           </NavLink>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-6">
//           <NavLink to="/admin-dashboard" className={linkClass}>
//             Dashboard
//           </NavLink>
//           <NavLink to="/registrations" className={linkClass}>
//             Members
//           </NavLink>
//           <NavLink to="/add-webinar-details" className={linkClass}>
//             Webinars
//           </NavLink>
//         </div>

//         {/* Desktop Button */}
//         <div className="hidden md:flex space-x-3">
//           <NavLink to="/">
//             <Button
//               variant="outline"
//               className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
//             >
//               Log Out
//             </Button>
//           </NavLink>
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-primary">
//           <Menu />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white shadow-md py-3 px-4 absolute w-full top-20">
//           <div className="flex flex-col space-y-3">
//             <NavLink to="/admin-dashboard" onClick={() => setIsMenuOpen(false)} className={linkClass}>
//               Dashboard
//             </NavLink>
//             <NavLink to="/registrations" onClick={() => setIsMenuOpen(false)} className={linkClass}>
//               Members
//             </NavLink>
//             <NavLink to="/add-webinar-details" onClick={() => setIsMenuOpen(false)} className={linkClass}>
//               Webinars
//             </NavLink>
//             <div className="flex flex-col space-y-2 pt-2">
//               <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
//                 <Button
//                   variant="outline"
//                   className="w-full border-primary text-primary hover:bg-primary hover:text-white"
//                 >
//                   Log Out
//                 </Button>
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default AdminNavbar;


import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/Mcrt-logo.jpg';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login'); // Redirect to login page
  };

  const linkClass = ({ isActive }) =>
    `relative text-gray-600 hover:text-primary transition-colors pb-1 
     ${isActive ? 'text-primary font-semibold underline underline-offset-4' : ''}`;

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-10 h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="Admin Logo"
              className="h-10 w-30 object-contain hover:scale-105 transition-transform duration-300"
            />
          </NavLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/admin-dashboard" className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/registrations" className={linkClass}>
            Members
          </NavLink>
          <NavLink to="/add-webinar-details" className={linkClass}>
            Webinars
          </NavLink>
          <NavLink to="/allpayments" className={linkClass}>
            Existing Members
          </NavLink>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex space-x-3 items-center">
  <Button
    variant="outline"
    onClick={handleLogout}
    className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
  >
    <ArrowRightOnRectangleIcon className="h-5 w-5" />
    Log Out
  </Button>
</div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-primary">
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-3 px-4 absolute w-full top-20">
          <div className="flex flex-col space-y-3">
            <NavLink to="/admin-dashboard" onClick={() => setIsMenuOpen(false)} className={linkClass}>
              Dashboard
            </NavLink>
            <NavLink to="/registrations" onClick={() => setIsMenuOpen(false)} className={linkClass}>
              Members
            </NavLink>
            <NavLink to="/add-webinar-details" onClick={() => setIsMenuOpen(false)} className={linkClass}>
              Webinars
            </NavLink>
            {/* <NavLink to="/requestdemotable" className={linkClass}>
            Existing Members
          </NavLink> */}
          <NavLink to="/allpayments" className={linkClass}>
            Existing Members
          </NavLink>
            <div className="flex flex-col space-y-2 pt-2">
              <Button
                variant="outline"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleLogout();
                }}
                className="w-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                Log Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
