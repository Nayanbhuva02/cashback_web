import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CashBackLogo from '../../assets/images/CashBackLogo.jpg'
import MenuIcon from '../../assets/svgs/menu.svg'

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDrawer = () => {
    setShowPopup(!showPopup);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src={CashBackLogo}
              className="mr-3 w-auto h-12"
              alt="Logo"
            />
          </Link>
          {/* <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div> */}
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-blue-700 font-bold' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/about'}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-blue-700 font-bold' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/contact'}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-blue-700 font-bold' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>


          <div className="md:hidden flex bg-[#ffffff] drop-shadow-md rounded-md h-8 w-8 items-center justify-center" onClick={handleDrawer}>
            <img src={MenuIcon} alt="Menu" height={24} width={24} />
          </div>

          <div className={`md:hidden ${showPopup ? 'flex transition-transform transform translate-x-0 duration-500 ease-in-out drop-shadow-md' : 'hidden transform translate-x-full'} absolute right-2 z-10 max-w-[300px] h-auto top-10`}>
            <ul className="flex flex-col mt-4 font-medium bg-slate-50 p-4 rounded-md">
              <li>
                <NavLink
                  to={'/'}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-blue-700 font-bold' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/about'}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-blue-700 font-bold' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/contact'}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-blue-700 font-bold' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header >
  )
}

export default Header
