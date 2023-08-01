import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

const SpesifikasiProperty = ({ ...props }) => {
    console.log(props);
    return (
        <AdminLayout title={props?.title} auth={props?.auth}>
            <div className="h-full w-full ">
                <h1 className="text-xl">{props?.tipeProperty?.name}</h1>
            </div>
        </AdminLayout>
    );
};

export default SpesifikasiProperty;
