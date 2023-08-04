import React from "react";

import { Link } from "@inertiajs/react";

const AboutUs = () => {
    return (
        <div className="py-32 flex flex-col lg:flex-row md:flex-row w-full h-full bg-white justify-center mt-20 mb-10 md:px-6 lg:px-32 lg:gap-20 md:gap-10 px-4 ">
            {/* Image */}
            <div
                className="flex flex-col h-auto relative justify-center md:w-[50%] lg:w-[50%]"
                data-aos="zoom-in-down"
            >
                <div className="w-full h-full flex justify-center items-center px-6 pl-10">
                    <img
                        className="w-full"
                        src="/storage/images/content/about/bg.png"
                        alt=""
                    />
                </div>

                <div className="flex w-full justify-center h-full -top-[30%] -left-[8%] md:-top-[16%] md:-left-[12%] lg:-top-[22%] lg:-left-[10%] absolute md:items-center py-8 pl-12 lg:items-center lg:pl-20 md:pl-16">
                    <img
                        className="object-cover w-full h-[17rem] lg:h-[20rem] md:h-[14rem]"
                        src="/storage/images/content/about/about_1.png"
                        alt=""
                    />
                </div>
            </div>
            {/* Text */}
            <div
                className="flex-row w-full h-full items-start justify-center mt-8 lg:mt-0 md:mt-0 lg:w-[50%] md:w-[50%]"
                data-aos="zoom-in-down"
            >
                <div className="w-full  h-auto flex mb-3 ">
                    <div className="w-2 bg-primary-custom  mr-2 lg:mr-5 md:mr-3"></div>
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-green-custom">
                        TENTANG
                        <span className="text-black"> STELLAR JARDIN</span>
                    </h1>
                </div>
                <p className="text-justify indent-12 font-medium lg:text-xl md:text-lg ">
                    Stellar Jardin Residence adalah proyek perumahan yang
                    mengusung konsep Skandinavia yang memukau. Kami
                    mempersembahkan hunian damai dengan sentuhan elegan dan
                    kenyamanan luar biasa untuk para penghuni. Dalam Stellar
                    Jardin, kami menciptakan harmoni sempurna antara desain
                    modern yang elegan dan suasana yang memanjakan.
                    {/* Dengan kemewahan alami dan desain minimalis yang memukau, kami menghadirkan pengalaman hidup tenang. Setiap rumah di Stellar Jardin dirancang dengan cermat untuk menciptakan lingkungan yang memikat dan memenuhi impian hidup para penghuninya. Stellar Jardin Recidense adalah takdir rumah impian Anda yang menawarkan gaya hidup yang unik dan prestisius. */}
                </p>
                <div className="flex w-full h-full justify-start  lg:w-[80%] md:py-7 py-3">
                    <Link
                        href="/about"
                        className="bg-primary-custom  p-3 text-white font-medium hover:bg-blue-gray-400 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl"
                    >
                        Selengkapnya
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
