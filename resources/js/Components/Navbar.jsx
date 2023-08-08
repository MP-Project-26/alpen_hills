import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { useEffect } from "react";

export default function Navbar({tipeProperty}) {

    const [open, setOpen] = React.useState(false);
    const location = window.location.pathname;

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

    return (
        <nav
            className={`w-full ${
                location === "/" && scroll <= 1.5
                    ? " bg-transparent text-white"
                    : "bg-primary-custom shadow-lg text-white"
            } lg:px-[10rem] px-0 mt-0 sticky top-0 z-50 transition-all duration-180 ease-in-out `}
        >
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] py-2 px-6 shadow bg-green-custom rounded-sm w-52"
                        >
                            <li>
                                <Link
                                    href="/"
                                    className=" font-medium text-xl "
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className=" font-medium text-xl "
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <span
                                    className=" font-medium text-xl "
                                    onClick={() => setOpen(!open)}
                                >
                                    Type
                                </span>
                                {open && (
                                    <ul className="p-2">
                                        {tipeProperty?.map((tipe, index) => (
                                        <li key={index}>
                                            <Link
                                                href={`/property/${tipe?.slug}`}
                                                className=" font-medium text-xl "
                                            >
                                                {tipe?.name}
                                            </Link>
                                        </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className=" font-medium text-xl "
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="/">
                        <img
                            src="/storage/images/content/Logo_Alpen.png"
                            alt="Logo"
                            className="w-[8rem] lg:w-[12rem] cursor-pointer filter invert"
                        />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/" className=" font-medium text-xl ">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className=" font-medium text-xl "
                            >
                                About
                            </Link>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary className=" font-medium text-xl">
                                    Type
                                </summary>
                                <ul
                                    className="p-2 z-[1200] bg-primary-custom shadow-lg rounded-sm w-52 "

                                >
                                    {tipeProperty?.map((tipe, index) => (
                                    <li key={index}>
                                        <Link
                                            href={`/property/${tipe?.slug}`}
                                            className=" font-normal text-xl "
                                        >
                                            {tipe?.name}
                                        </Link>
                                    </li>
                                    ))}
                                </ul>{" "}
                            </details>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className=" font-medium text-xl "
                            >
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
