import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Tab } from "@headlessui/react";
import TableUser from "@/Components/adminPage/TableUser";
import FlashMessage from "@/Components/adminPage/FlashMessage";

const Index = ({ ...props }) => {
 console.log(props)
    return (
        <AdminLayout title={props.title} auth={props.auth}>
            <div className="h-full w-full">
                <div className="pb-28">
                    <FlashMessage flash={props.flash} />
                    <TableUser users={props.users} />
                </div>
            </div>
        </AdminLayout>
    );
};

export default Index;
