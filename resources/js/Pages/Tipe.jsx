import { CardImage } from "@/Components/Tipe/CardImage";
import NavMid from "@/Components/Tipe/NavMid";
import GuestLayout from "@/Layouts/GuestLayout";
import {
    Carousel,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

const Tipe = ({ ...props }) => {
    const [categoryIdSelected, setCategoryIdSelected] = useState("");
    const [scrollLeft, setScrollLeft] = useState(0); // Track the scroll position



    const galleryByCategory = props?.product.gallery?.filter(
        (gallery) => gallery?.category_gallery_id === categoryIdSelected
    );

    const gallery = galleryByCategory?.map((item, index) => {
        return (
            <TabPanel key={index} value={item.id}>
                <div
                    className="flex  justify-center item-img hover:scale-110 transform transition-all duration-500 ease-in-out"
                    key={index}
                    // onClick={(event) =>
                    //     handleImageClick(
                    //         event,
                    //         item.image,
                    //         item.category.category_name,
                    //         item.title
                    //     )
                    // }
                >
                    <CardImage
                        className="h-full w-full object-cover"
                        image={`/storage/images/gallery/${item.image}`}
                        title={item.name}
                    />
                </div>
            </TabPanel>
        );
    });

    console.log("gallery", galleryByCategory);

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

    return (
        <GuestLayout title={props.title}>
            <div className="h-auto mt-20 lg:px-36 md:px-16 px-4 py-4">
                <div>
                    <img
                        src="/storage/images/gallery/8bc975f390c04b854b09a8efaabcbfad.png"
                        alt=""
                    />
                </div>
                {/* <NavMid onCategoryIdSelected={handleIdCategoryChange} /> */}
                <Tabs value={categoryIdSelected}>
                    <TabsHeader
                        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 w-2/4"
                        indicatorProps={{
                            className:
                                "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
                        }}
                    >
                        {props?.category_gallery.map((item, index) => (
                            <Tab
                                key={index}
                                value={item.id}
                                onClick={() => setCategoryIdSelected(item.id)}
                                className={
                                    categoryIdSelected === item.id
                                        ? "text-blue-500"
                                        : ""
                                }
                            >
                                {item.name}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                    {categoryIdSelected? (
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

                                { props?.product.gallery?.map((item, index) => (
                                    <TabPanel key={index} value={item.id}>
                                        <div
                                            className="flex  justify-center item-img hover:scale-110 transform transition-all duration-500 ease-in-out"
                                            key={index}
                                            // onClick={(event) =>
                                            //     handleImageClick(
                                            //         event,
                                            //         item.image,
                                            //         item.category.category_name,
                                            //         item.title
                                            //     )
                                            // }
                                        >
                                            <CardImage
                                                className="h-full w-full object-cover"
                                                image={`/storage/images/gallery/${item.image}`}
                                                title={item.name}
                                            />
                                        </div>
                                    </TabPanel>
                                ))}
                            </Carousel>
                        </div>
                    ):() => <div>loading</div>}
                    </TabsBody>
                </Tabs>
            </div>
        </GuestLayout>
    );
};

export default Tipe;
