import React from "react";
import { Link } from "@inertiajs/react";

export default function Footer() {
    const pesanWa = `Halo Stellar, Saya ingin bertanya terkait produk dan layanan yang ada di Stellar. \n
    from : https://stellarjardinresidence.com/`;
    return (
        <footer className="footer px-0 md:px-[10rem] py-[5rem] bg-primary-custom text-neutral-content flex flex-col gap-5  ">
            <div className="flex flex-col lg:flex-row w-full justify-center">
                <img
                    src={"/storage/images/content/Logo_Alpen.png"}
                    alt="Logo"
                    className="w-[17rem] lg:w-[20rem]  cursor-pointer m-0  lg:-ml-[5rem] object-contain "
                />
                <div className=" w-full lg:w-[70%] flex flex-col gap-5 lg:gap-0 lg:flex-row justify-evenly p-7 lg:p-0">
                    <div className="flex flex-col gap-2 w-[10rem] ">
                        <Link
                            href="/"
                            className="text-xl text-white font-semibold font-roboto  cursor-pointer"
                        >
                            Home
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 w-[10rem] ">
                        <Link
                            href="/about"
                            className="text-xl text-white font-semibold font-roboto  cursor-pointer"
                        >
                            About
                        </Link>
                        <Link
                            href="/about"
                            className="text-md text-gray-300 font-roboto  cursor-pointer"
                        >
                            Our Story
                        </Link>
                        <Link
                            href="/about"
                            className="text-md text-gray-300 font-roboto  cursor-pointer"
                        >
                            Why Chouse US
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 w-[10rem] ">
                        <Link
                            href="#"
                            className="text-xl text-white font-semibold font-roboto  cursor-pointer"
                        >
                            Type
                        </Link>
                        <Link
                            href="/type"
                            className="text-md text-gray-300 font-roboto  cursor-pointer"
                        >
                            Standard
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 w-[10rem] ">
                        <Link
                            href="/blog"
                            className="text-xl text-white font-semibold font-roboto  cursor-pointer"
                        >
                            Blog
                        </Link>{" "}
                        <Link
                            href="/blog"
                            className="text-md text-gray-300 font-roboto  cursor-pointer"
                        >
                            Latest news
                        </Link>
                        <Link
                            href="/blog"
                            className="text-md text-gray-300 font-roboto  cursor-pointer"
                        >
                            Top Trending
                        </Link>
                    </div>
                    <div className="flex flex-col gap-1 w-auto ">
                        <a
                            href="#"
                            className="text-xl text-white font-semibold font-roboto  cursor-pointer"
                        >
                            Contact Us
                        </a>
                        <a
                            href="mailto: stellarjardin@gmail.com"
                            className="text-md text-gray-300 font-roboto flex flex-row items-center gap-3 cursor-pointer"
                        >
                            <i className="fas fa-envelope text-xl"></i>
                            stellarjardin@gmail.com
                        </a>
                        <a
                            href={
                                `https://wa.me/6281312344843/?text=` + pesanWa
                            }
                            className="text-md text-gray-300 font-roboto flex flex-row items-center gap-3 cursor-pointer"
                        >
                            <i className="fab fa-whatsapp text-2xl"></i>
                            +62 813-1234-4843
                        </a>
                        <div className="w-full flex gap-2 mt-2">
                            <a href="https://www.instagram.com/stellarjardinresidence/">
                                <i className="fab fa-instagram text-3xl"></i>
                            </a>

                            <a href="https://www.facebook.com/profile.php?id=100092276786982">
                                <i className="fab fa-facebook-square text-3xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col p-2 lg:p-0">
                <div className="w-full flex justify-center gap-10 flex-col">
                    <a
                        href="https://goo.gl/maps/JYbJxvQRWazzVSvQ8"
                        className=" text-md lg:text-lg text-gray-300 font-roboto text-center  cursor-pointer p-5 lg:p-0"
                    >
                        Jl. Cikunir Raya No.37, RT.001/RW.002, Jaka Mulya, Kec.
                        Bekasi Sel., Kota Bks, Jawa Barat 17146
                    </a>
                    <div className="border border-[#a2a2a2]"></div>
                </div>
                <div className="w-full flex flex-row justify-between items-center pt-5">
                    <a
                        href="#"
                        className="text-xs lg:text-lg text-gray-300 font-roboto text-center flex flex-row items-center justify-center cursor-pointer"
                    >
                        Powered by{" "}
                        <img
                            src="/storage/images/content/mp-footer.png"
                            alt=""
                        />{" "}
                        PROJECT
                    </a>
                    <div className="flex gap-5">
                        <a href="#">Privacy policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
