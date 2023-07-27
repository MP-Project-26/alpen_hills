import Header from "@/Components/adminPage/Header";
import Sidebar from "@/Components/adminPage/Sidebar";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

const AdminLayout = ({ children, title, auth }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {title && <Head title={title} />}
            <div className="h-screen w-full overflow-hidden">
                <Header auth={auth} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
                <div className="w-full h-full  flex">
                    <Sidebar isSidebarOpen={isSidebarOpen}/>
                    <main className={`h-auto overflow-auto bg-slate-100 w-full p-4 md:p-8  ${isSidebarOpen ? "blur-sm  brightness-50 " : ""}`}>
                    <h1 className="text-xl md:text-2xl font-semibold mb-5">{title}</h1>
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
