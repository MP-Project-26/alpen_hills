import Footer from "@/components/Footer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import { useEffect } from "react";


export default function Layout({ children, title }) {
    useEffect(() => {
        Aos.init({
            once: true,
            disable: "phone",
            duration: 1200,
            easing: "ease-out-sine",
        });
    }, []);
    return (
        <>
            {title && <Head title={title} />}
            <div className="">
hello
            </div>
            <main className="-mt-[5rem] ">{children}</main>
            {/* <Footer /> */}
        </>
    );
}
