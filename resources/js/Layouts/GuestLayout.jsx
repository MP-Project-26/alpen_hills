import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

const GuestLayout = ({ children, title }) => {
    return (
        <>
            {title && <Head title={title} />}
            <Navbar />
                <main className="">{children}</main>
            <Footer />
        </>
    );
};

export default GuestLayout;
