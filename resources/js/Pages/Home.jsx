import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import AboutUs from "@/Components/home/About";
import HeadCarousel from "@/Components/home/Carousal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Dialog } from "@headlessui/react";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import Trending from "@/Components/home/Trending";
import OurBlog from "@/Components/home/OurBlog";
import SliderImage from "@/Components/home/SliderImage";

const Home = ({ ...props }) => {
    const { dataGalery, dataBlog, dataCategory } = props;
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        const dataPopularBlog = [...dataBlog.data].sort(
            (a, b) => b.views - a.views
        );
        setPopular(dataPopularBlog.slice(0, 3));
    }, [dataBlog.data]);

    const [ourBlog, setOurBlog] = useState([]);
    useEffect(() => {
        const dataOurBlog = [...dataBlog.data].sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setOurBlog(dataOurBlog.slice(0, 1));
    }, [dataBlog.data]);
    return (
        <GuestLayout title={props.title}>
            <HeadCarousel />
            <AboutUs />
            <SliderImage galleries={dataGalery.data} category={dataCategory} />
            <OurBlog ourBlog={ourBlog[0]} />
            <Trending popular={popular} />
            {/* Slide 5 */}
            <div className="py-5 mt-10" data-aos="zoom-in-down">
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-5 ">
                        {leanmore.map((item, i) => (
                            <div className="  w-[15rem]  lg:w-80 shadow-xl" key={i}>
                                <div className="relative">
                                    <div className="absolute top-2 left-2 bg-primary-custom py-1 px-5 text-white rounded-md text-md md:text-md lg:text-2xl">
                                        Lean More
                                    </div>
                                    <div className="w-full">
                                        <img
                                            src={`/storage/images/content/home/${item.image}`}
                                            alt="Shoes"
                                            className="w-full z-10"
                                        />
                                    </div>
                                    <div className="absolute bottom-10 w-full flex justify-center ">
                                        <p className="text-white text-xl md:text-2xl lg:text-5xl font-extrabold">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Home;

const leanmore = [
    {
        id: 1,
        title: "FASILITAS",
        image: "fasilitas.png",
    },
    {
        id: 2,
        title: "ACCESS",
        image: "fasilitas.png",
    },
    {
        id: 3,
        title: "LOKASI",
        image: "fasilitas.png",
    },
];
