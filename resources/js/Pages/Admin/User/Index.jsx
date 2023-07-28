import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";

const Index = ({ ...props }) => {
 console.log(props)
    return (
        <AdminLayout title={props.title} auth={props.auth}>
            <div className="h-full w-full">

            </div>
        </AdminLayout>
    );
};

export default Index;
