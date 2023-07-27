import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

const Dashboard = ({ auth }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <AdminLayout title="Dashboard" auth={auth}>
            <div className="h-full w-full">
            <h1>aa</h1>
            </div>
        </AdminLayout>

    );
};

export default Dashboard;
