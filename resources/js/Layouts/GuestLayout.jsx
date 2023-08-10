import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head, usePage } from "@inertiajs/react";
import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const GuestLayout = ({ children, title }) => {

    const { tipeProperty } = usePage().props;
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const [scroll, setScroll] = React.useState(0);
    const scrollToTop = () => {
        const datascroll = window.scrollY;
        return datascroll > 0 ? setScroll(datascroll) : setScroll(0);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollToTop);
        return () => {
            window.removeEventListener("scroll", scrollToTop);
        };
    }, []);
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
            <Navbar  tipeProperty={tipeProperty}/>
            <main className="-mt-[5rem] relative">
                {children}
                <div
                    className={` ${
                        scroll >= 1.5 ? "sticky" : "hidden"
                    } bottom-0 right-10  flex justify-end pr-5 pb-5  lg:pr-10 lg:pb-10 z-50 `}
                >
                    <div className="  bg-white p-1 lg:p-3  rounded-lg shadow-xl border border-[#eaeaea] cursor-pointer" onClick={scrollTop}>
                        <img
                            src="/storage/images/content/logo_fixed.png"
                            className="lg:w-15 lg:h-15 w-10"
                            alt=""
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default GuestLayout;
