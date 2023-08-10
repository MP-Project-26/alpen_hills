import { CardImage } from "@/Components/Tipe/CardImage";
import GuestLayout from "@/Layouts/GuestLayout";
import "react-multi-carousel/lib/styles.css";
import {
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import responsive from "@/utils/Responsive";
import ModalGallery from "@/Components/Tipe/ModalGallery";
import NavMid from "@/Components/Tipe/NavMid";
import { Link } from "@inertiajs/react";
import Price from "@/Components/Tipe/Price";
import Spesifikasi from "@/Components/Tipe/Spesifikasi";

const Tipe = ({ ...props }) => {
    const [categoryNameSelected, setCategoryNameSelected] = useState("Denah");
    const [selectedGallery, setSelectedGallery] = useState([null]);
    const [transition, setTransition] = useState(false);

    console.log("props : ", props);

    const handleClikImage = (e, item) => {
        e.preventDefault();
        setTransition(true);
        setSelectedGallery([item]);
        setTimeout(() => {
            setSelectedGallery(item);
            setTransition(false);
        }, 500);
    };

    const galleryByCategory = props?.product.gallery?.filter(
        (gallery) => gallery?.category_gallery.name === categoryNameSelected
    );

    const gallery = galleryByCategory.map((item, index) => {
        return (
            <TabPanel
                key={index}
                value={item.category_gallery.name}
                className=""
            >
                <div
                    onClick={(e) => handleClikImage(e, item)}
                    className="w-auto h-20 my-1 md:h-10 lg:py-20 md:py-12 flex justify-center items-center hover:scale-110 transform transition-all duration-500 ease-in-out "
                >
                    <CardImage image={item.image} title={item.id} />
                </div>
            </TabPanel>
        );
    });

    //console.log("galleryByCategory", galleryByCategory);

    return (
        <GuestLayout title={props.title}>
            <div className="md:mt-32 mt-20  py-4">
                <div id="gallery" className="h-auto lg:px-36 md:px-16 px-4">
                    <div className="w-full flex relative justify-center  p-0 border-2 border-primary-custom border-opacity-10">
                        <div className="flex absolute w-full justify-end">
                            <h1 className="p-2 bg-primary-custom bg-opacity-60 text-white font-medium flex gap-2 items-center ">
                                {selectedGallery.name
                                    ? selectedGallery.name
                                    : props?.product?.gallery[0]?.name}
                                <i
                                    onClick={() =>
                                        window.modal_gallery.showModal()
                                    }
                                    className="fas fa-expand text-xl hover:scale-125 cursor-pointer"
                                ></i>
                            </h1>
                        </div>
                        <img
                            src={
                                selectedGallery.image
                                    ? `/storage/images/gallery/${selectedGallery.image}`
                                    : `/storage/images/gallery/${props?.product?.gallery[0]?.image}`
                            }
                            alt=""
                            className={`md:w-[70%] w-full md:my-4 my-0 ${
                                transition ? "transitioning" : ""
                            }`}
                        />
                    </div>

                    <div className="mt-4 border-b pb-5 border-black">
                        <Tabs value={categoryNameSelected}>
                            <TabsHeader
                                className="rounded-none bg-primary-custom bg-opacity-10 p-2 lg:w-2/4 md:w-3/4 w-full overflow-x-auto"
                                indicatorProps={{
                                    className:
                                        "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
                                }}
                            >
                                {props?.categoryGallery.map((item, index) => (
                                    <Tab
                                        key={index}
                                        value={item.name}
                                        onClick={() =>
                                            setCategoryNameSelected(item.name)
                                        }
                                        className={
                                            categoryNameSelected === item.name
                                                ? "text-blue-500"
                                                : ""
                                        }
                                    >
                                        {item.name}
                                    </Tab>
                                ))}
                            </TabsHeader>

                            <TabsBody>
                                <div>
                                    <Carousel
                                        responsive={responsive}
                                        infinite={true}
                                        className="image-slider z-20"
                                        renderButtonGroupOutside={true}
                                        centerSlidePercentage={75}
                                        partialVisible={false}
                                        itemClass="carousel-item"
                                    >
                                        {gallery}
                                    </Carousel>
                                </div>
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>

                <NavMid />
                <div className="w-auto flex flex-col lg:px-36 md:px-16 px-4">
                    <Price product={props.product} />
                    <Spesifikasi product={props.product} />

                    
                </div>

                {selectedGallery && (
                    <ModalGallery selectedGallery={selectedGallery} />
                )}
            </div>
        </GuestLayout>
    );
};

export default Tipe;
