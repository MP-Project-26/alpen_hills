import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Dialog } from "@headlessui/react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

const SliderImage = ({ galleries }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeTab, setActiveTab] = useState("Exterior");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const exteriorGallery = galleries.filter(
        (item) => item.category_gallery.name === "Exterior"
    );
    const interiorGallery = galleries.filter(
        (item) => item.category_gallery.name === "Interior"
    );
    const potonganGallery = galleries.filter(
        (item) => item.category_gallery.name === "Potongan"
    );
    const denahGallery = galleries.filter(
        (item) => item.category_gallery.name === "Denah"
    );

    const Exterior = exteriorGallery.map((item, index) => {
        return (
            <TabPanel key={item.id} value={item.category_gallery.name}>
                <div
                    className="flex  justify-center item-img  hover:scale-110 transform transition-all duration-500 ease-in-out"
                    key={index}
                    onClick={(event) => handleImageClick(event, item.image)}
                >
                    <a href={`#${item.id}`}>
                        <CardImage
                            image={`/storage/images/gallery/${item.image}`}
                            title={item.id}
                        />
                    </a>
                </div>
            </TabPanel>
        );
    });

    const Interior = interiorGallery.map((item, index) => {
        return (
            <TabPanel key={item.id} value={item.category_gallery.name}>
                <div
                    className="flex lg:gap-[3rem] justify-center item-img hover:scale-110 transform transition-all duration-500 ease-in-out"
                    key={index}
                    onClick={(event) => handleImageClick(event, item.image)}
                >
                    <a href={`#${item.id}`}>
                        <CardImage
                            image={`/storage/images/gallery/${item.image}`}
                            title={item.id}
                        />
                    </a>
                </div>
            </TabPanel>
        );
    });

    const Potongan = potonganGallery.map((item, index) => {
        return (
            <TabPanel key={item.id} value={item.category_gallery.name}>
                <div
                    className="flex  justify-center item-img hover:scale-110 transform transition-all duration-500 ease-in-out"
                    key={index}
                    onClick={(event) => handleImageClick(event, item.image)}
                >
                    <a href={`#${item.id}`}>
                        <CardImage
                            className="h-full w-auto"
                            image={`/storage/images/gallery/${item.image}`}
                            title={item.id}
                        />
                    </a>
                </div>
            </TabPanel>
        );
    });

    const Denah = denahGallery.map((item, index) => {
        return (
            <TabPanel key={item.id} value={item.category_gallery.name}>
                <div
                    className="flex  justify-center item-img hover:scale-110 transform transition-all duration-500 ease-in-out"
                    key={index}
                    onClick={(event) => handleImageClick(event, item.image)}
                >
                    <a href={`#${item.id}`}>
                        <CardImage
                            className="h-full w-auto"
                            image={`/storage/images/gallery/${item.image}`}
                            title={item.id}
                        />
                    </a>
                </div>
            </TabPanel>
        );
    });

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    const data = [
        { label: "Exterior", value: "Exterior" },
        { label: "Interior", value: "Interior" },
        { label: "Potongan", value: "Potongan" },
        { label: "Denah", value: "Denah" },
    ];

    const handleImageClick = (event, image) => {
        event.preventDefault();
        setSelectedImage(image);
        setIsModalOpen(true);
    };
    useEffect(() => {
        const imageElement = document.querySelector(".selected-image");
        if (imageElement) {
            imageElement.classList.remove("selected-image");
            setTimeout(() => {
                imageElement.classList.add("selected-image");
            }, 0);
        }
    }, [selectedImage]);

    return (
        <>
            <div className=" p-0 lg:py-5" data-aos="zoom-in-down">
                <div className="w-full  h-auto flex mb-3 lg:px-40 md:px-20 px-4">
                    <div className="w-2 bg-green-custom mr-2 lg:mr-5 md:mr-3"></div>
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-green-custom">
                        GAL
                        <span className="text-black">ERI</span>
                    </h1>
                </div>
                <div id="gallery" className="lg:px-40 md:px-20 px-4">
                    <div className="py-5">
                        <Tabs value={activeTab}>
                            <TabsHeader
                                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 w-2/4"
                                indicatorProps={{
                                    className:
                                        "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
                                }}
                            >
                                {data.map(({ label, value }) => (
                                    <Tab
                                        key={value}
                                        value={value}
                                        onClick={() => setActiveTab(value)}
                                        className={
                                            activeTab === value
                                                ? "text-blue-500"
                                                : ""
                                        }
                                    >
                                        {label}
                                    </Tab>
                                ))}
                            </TabsHeader>
                            <TabsBody className=" inset-0 z-10">
                                {activeTab === "Exterior" ? (
                                    <div>
                                        <Carousel
                                            responsive={responsive}
                                            infinite={true}
                                            className="image-slider"
                                            renderButtonGroupOutside={true}
                                            centerMode={true}
                                            centerSlidePercentage={75}
                                            partialVisible={false}
                                            itemClass="carousel-item"
                                        >
                                            {Exterior}
                                        </Carousel>
                                    </div>
                                ) : activeTab === "Interior" ? (
                                    <div>
                                        <Carousel
                                            responsive={responsive}
                                            infinite={true}
                                            className="image-slider"
                                            renderButtonGroupOutside={true}
                                            centerMode={true}
                                            centerSlidePercentage={75}
                                            partialVisible={false}
                                            itemClass="carousel-item"
                                        >
                                            {Interior}
                                        </Carousel>
                                    </div>
                                ) : activeTab === "Potongan" ? (
                                    <div>
                                        <Carousel
                                            responsive={responsive}
                                            infinite={true}
                                            className="image-slider"
                                            renderButtonGroupOutside={true}
                                            centerMode={true}
                                            centerSlidePercentage={75}
                                            partialVisible={false}
                                            itemClass="carousel-item"
                                        >
                                            {Potongan}
                                        </Carousel>
                                    </div>
                                ) : (
                                    <div>
                                        <Carousel
                                            responsive={responsive}
                                            infinite={true}
                                            className="image-slider"
                                            renderButtonGroupOutside={true}
                                            centerMode={true}
                                            centerSlidePercentage={75}
                                            partialVisible={false}
                                            itemClass="carousel-item"
                                        >
                                            {Denah}
                                        </Carousel>
                                    </div>
                                )}
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
                {/* You can open the modal using ID.showModal() method */}
            </div>

            {/* Modal */}
            {selectedImage && (
                <Dialog
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    as="div"
                    className="fixed inset-0 z-50 overflow-y-auto"
                >
                    <div className="flex items-center justify-center min-h-screen px-4 text-center">
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                        <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl ">
                            {/* Image */}
                            <img
                                src={`/storage/images/gallery/${selectedImage}`}
                                alt="Selected Image"
                                className="object-cover h-full w-full"
                                style={{ imageRendering: "auto" }}
                            />

                            {/* Close Button */}
                            <button
                                type="button"
                                className="absolute top-0 right-0 m-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:bg-gray-300"
                                onClick={() => setIsModalOpen(false)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Dialog>
            )}
        </>
    );
};

export default SliderImage;

const CardImage = ({ image, title }) => {
    return (
        <div className=" flex bg-white select-none cursor-pointer">
            <img
                src={image}
                alt={title}
                className="lg:h-[9rem] lg:w-[16rem] md:h-[7rem] md:w-[11rem] h-[5rem] w-[8rem] object-cover "
            />
        </div>
    );
};
