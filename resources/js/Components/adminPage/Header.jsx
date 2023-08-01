import { Link } from "@inertiajs/react";
import React, { useState, useEffect, useRef } from "react";

const Header = ({ auth, toggleSidebar, isSidebarOpen }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Menutup dropdown ketika pengguna mengklik di luar area dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md h-auto w-full flex justify-between items-center sticky top-0 z-50 px-4">
      <div className="w-auto flex h-16 md:h-20 gap-2">
        <button onClick={toggleSidebar} className="text-3xl lg:invisible block">
          <i className={`bi ${isSidebarOpen ? "bi-x-lg text-2xl" : "bi-list"}`}></i>
        </button>
        <Link href="/admin/dashboard">
          <img
            className="h-full w-auto"
            src="/assets/img/Logo_mp.png"
            alt=""
          />
        </Link>
      </div>
      <div
        ref={dropdownRef}
        className="w-auto flex h-full justify-end items-center gap-2 relative"
        onClick={toggleDropdown}
      >
        <h1>
          Welcome,{" "}
          <span className="font-semibold">{auth.user.name}</span>
        </h1>
        <i
          className="bi bi-person-circle md:text-4xl text-2xl cursor-pointer"
          onClick={toggleDropdown}
        ></i>

        {/* Menu Dropdown */}
        {isDropdownOpen && (
          <ul className="absolute top-10 right-0 bg-white p-2 shadow">
            <li>
              <Link
                href={`/admin/profile/${auth.user.id}`}
                className="text-gray-800 hover:bg-gray-200 block px-4 py-2 rounded"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                method="post"
                href={route('logout')}
                className="text-gray-800 hover:bg-gray-200 block px-4 py-2 rounded"
                as="button"
              >
                Logout
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
