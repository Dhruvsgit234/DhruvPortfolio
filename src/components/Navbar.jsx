import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-18 h-18 object-contain'>
          <rect width="48" height="48" rx="8.88889" fill="white"/>
          <text x="24" y="32" fontSize="24" fontWeight="bold" textAnchor="middle" fill="url(#paint0_linear_1545_39)">DH</text>
          <defs>
            <linearGradient id="paint0_linear_1545_39" x1="8" y1="35.5" x2="38.0109" y2="10.5484" gradientUnits="userSpaceOnUse">
              <stop stopColor="#989FFF"/>
              <stop offset="1" stopColor="#29A2FF"/>
            </linearGradient>
          </defs>
        </svg>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
