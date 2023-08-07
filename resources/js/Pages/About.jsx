import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";

export default function About() {
    return (
        <GuestLayout title="About">
            <div className="w-full bg-[#FDFDFD] flex flex-col h-auto justify-center items-center py-20 px-5 gap-0 lg:gap-20">
                {/* title */}{" "}
                <div className="flex justify-center h-auto p-1 m-4 lg:m-10">
                    <h1 className="font-sans font-bold text-3xl lg:text-5xl">
                        ABOUT <span className="text-primary-custom">US</span>
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-row w-full h-full bg-white justify-center m-0 md:px-6 lg:px-32 lg:gap-10 md:gap-10 px-4 ">
                    {/* Image */}
                    <div
                        className="flex flex-col  justify-center w-full md:w-[50%] lg:w-[50%] m-0 lg:-mt-20  lg:h-full h-full"
                        data-aos="zoom-in-down"
                    >
                        <div className="relative">
                            <div className="flex w-full justify-center mt-0 lg:mt-20">
                                <img
                                    className="w-[90%] "
                                    src="/storage/images/content/about/slide1_layer1.png"
                                    alt=""
                                />
                            </div>
                            <div className="flex w-full justify-center lg:top-[5%] lg:left-[20%] -top-[185px] left-[20%] absolute md:items-center py-8 pl-12 lg:items-center lg:pl-20 md:pl-16">
                                <img
                                    className=" w-[50%] mt-[18rem]"
                                    src="/storage/images/content/about/layer_1.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    {/* Text */}
                    <div
                        className="flex-row w-full h-full items-start justify-center mt-8 lg:mt-0 md:mt-0 lg:w-[50%] md:w-[50%]"
                        data-aos="zoom-in-down"
                    >
                        <div className="w-full  h-auto flex mb-3 ">
                            <div className="w-2 bg-primary-custom mr-2 lg:mr-5 md:mr-3"></div>
                            <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-green-custom">
                                TENTANG
                                <span className="text-black">
                                    {" "}
                                    STELLAR JARDIN
                                </span>
                            </h1>
                        </div>
                        <p className="text-justify indent-12 font-medium lg:text-xl md:text-lg ">
                            Stellar Jardin Residence adalah proyek perumahan
                            yang mengusung konsep Skandinavia yang memukau. Kami
                            mempersembahkan hunian damai dengan sentuhan elegan
                            dan kenyamanan luar biasa untuk para penghuni. Dalam
                            Stellar Jardin, kami menciptakan harmoni sempurna
                            antara desain modern yang elegan dan suasana yang
                            memanjakan.
                            {/* Dengan kemewahan alami dan desain minimalis yang memukau, kami menghadirkan pengalaman hidup tenang. Setiap rumah di Stellar Jardin dirancang dengan cermat untuk menciptakan lingkungan yang memikat dan memenuhi impian hidup para penghuninya. Stellar Jardin Recidense adalah takdir rumah impian Anda yang menawarkan gaya hidup yang unik dan prestisius. */}
                        </p>
                        <p className="text-justify indent-12 font-medium lg:text-xl md:text-lg ">
                            Dilengkapi dengan fasilitas yang lengkap, Stellar
                            Jardin Residence menawarkan gaya hidup yang mewah
                            dan nyaman bagi para penghuninya. Dalam kompleks
                            perumahan ini, Anda akan menemukan taman-taman yang
                            indah dengan pemandangan yang menakjubkan, ruang
                            hijau yang luas, dan area rekreasi yang dirancang
                            dengan baik.
                            {/* Dengan kemewahan alami dan desain minimalis yang memukau, kami menghadirkan pengalaman hidup tenang. Setiap rumah di Stellar Jardin dirancang dengan cermat untuk menciptakan lingkungan yang memikat dan memenuhi impian hidup para penghuninya. Stellar Jardin Recidense adalah takdir rumah impian Anda yang menawarkan gaya hidup yang unik dan prestisius. */}
                        </p>
                    </div>
                </div>
            </div>
            {/* Slide 2 */}
            <div className="w-full flex bg-primary-custom h-[85rem] lg:h-[45rem] justify-between py-10 my-20 px-5 lg:px-20 gap-20 flex-col lg:flex-row">
                <div className="w-full h-full flex flex-col justify-between gap-10 py-5">
                    <h1 className="font-sans font-bold text-3xl lg:text-5xl text-white">
                        Lorem, ipsum.{" "}
                        <span className="text-yellow-600">US</span>
                    </h1>
                    <p className="font-sans font-medium text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere consequatur illo in nam modi suscipit ipsum
                        impedit veniam, beatae veritatis. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Minima, quo vero,
                        amet molestias, ducimus sit modi magnam necessitatibus a
                        assumenda nostrum veritatis ab! Ut cumque nam neque
                        repellendus? Harum culpa labore placeat, reiciendis
                        molestias corporis tempore accusamus enim officia
                        facilis error tempora illo doloribus autem ad asperiores
                        repellendus quod aperiam?
                    </p>
                    <div className="flex justify-around px-5">
                        <div className=" w-full flex flex-col gap-2">
                            <h1 className="font-sans font-bold text-3xl lg:text-5xl text-white">
                                <span className="text-yellow-600">1.8 M</span>
                            </h1>
                            <p className="font-sans font-medium text-white">
                                Facere consequatur
                            </p>
                        </div>
                        <div className=" w-full flex flex-col gap-2">
                            <h1 className="font-sans font-bold text-3xl lg:text-5xl text-white">
                                <span className="text-yellow-600">1.8 M</span>
                            </h1>
                            <p className="font-sans font-medium text-white">
                                Facere consequatur
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full ">
                    <div className="relative   md:pl-20">
                        <div className="card w-[18rem] lg:w-96 bg-base-100 rounded-none z-10">
                            <figure>
                                <img
                                    src="/storage/images/content/about/slide2-layer1.png"
                                    alt="Shoes"
                                    className="w-full"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full justify-center h-full top-[40%] -left-[2%] md:-top-[16%] md:-left-[2%] lg:top-[30%] lg:left-[5%] absolute md:items-center py-8 pl-12 lg:items-center lg:pl-20 md:pl-16">
                            <div className="card w-96 bg-base-100 shadow-xl rounded-none">
                                <figure>
                                    <img
                                        src="/storage/images/content/about/slide2-layer1.png"
                                        alt="Shoes"
                                        className="w-full"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>
                                        If a dog chews shoes whose shoes does he
                                        choose?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* slide 3 */}{" "}
            <div className="w-full bg-[#FDFDFD] flex flex-col h-auto justify-center items-center py-10 px-5 gap-20 ">
                <div className="flex justify-center h-auto p-1 flex-col w-full lg:w-2/4 gap-10">
                    <h1 className="font-sans font-bold text-3xl lg:text-5xl text-center">
                        <span className="text-primary-custom">All</span> YOU
                        NEED
                    </h1>
                    <p className="text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nobis nostrum, ipsa deleniti, quaerat perferendis,
                        quibusdam delectus nisi ipsum unde tempora quidem quae
                        iste quam placeat at voluptatem ratione quo laudantium.
                    </p>
                </div>
                <div className="flex lg:flex-row flex-col flex-wrap justify-center gap-5 ">
                    {new Array(4).fill(0).map((_, i) => (
                        <div
                            className="card w-80 lg:w-96 bg-base-100 shadow-xl"
                            key={i}
                        >
                            <figure>
                                <img
                                    src="/storage/images/content/about/slide2-layer1.png"
                                    alt="Shoes"
                                    className="w-full"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">
                                        NEW
                                    </div>
                                </h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">
                                        Fashion
                                    </div>
                                    <div className="badge badge-outline">
                                        Products
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
}
