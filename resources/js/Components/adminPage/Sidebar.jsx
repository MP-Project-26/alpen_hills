import MenuDashboard from "@/utils/MenuDashboard";
import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

const Sidebar = ({ isSidebarOpen, auth }) => {
    const [activeMenu, setActiveMenu] = useState(null);

    useEffect(() => {
        const active = MenuDashboard.find((menu) =>
            window.location.pathname.startsWith(menu.url)
        );
        setActiveMenu(active);
    }, []);

    return (
        <aside
            className={`h-screen lg:w-80 shadow-md  w-[100%] lg:relative absolute z-10 ${
                isSidebarOpen
                    ? "transform translate-x-0 "
                    : "lg:translate-x-0  transform -translate-x-full"
            } lg:flex transition-transform duration-300 ease-in-out`}
        >
            <div className="lg:w-full md:w-[40%] w-[75%] bg-white h-full">
                <div className="px-5 py-5">
                    <ul className="flex flex-col gap-3 w-full">
                        {MenuDashboard &&
                            MenuDashboard.map((menu, index) => (
                                <Link
                                    key={index}
                                    href={menu.url}
                                    className="cursor-pointer"
                                >
                                    <li
                                        className={`font-medium w-full rounded-md text-gray-700 p-2 flex gap-2 items-center ${
                                            menu === activeMenu
                                                ? "text-gray-900  bg-blue-gray-200"
                                                : "hover:text-black hover:bg-blue-gray-200"
                                        }`}
                                    >
                                        <i
                                            className={`text-xl ${menu.icon}`}
                                        ></i>
                                        {menu.name}
                                    </li>
                                </Link>
                            ))}
                        <hr />

                        {auth.user?.role === 1 ? (
                            <Link href="/admin/user" className="cursor-pointer">
                                <li className="font-medium w-full rounded-md text-gray-700 p-2 flex gap-2 items-center hover:text-gray-900 hover:bg-gray-200">
                                    <i className="text-xl fas fa-users"></i>
                                    User Management
                                </li>
                            </Link>
                        ) : (
                            ""
                        )}
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
