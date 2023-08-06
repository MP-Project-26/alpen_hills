import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import AboutUs from "@/Components/home/About";
import Carousel from "@/Components/home/Carousal";

const Home = ({ ...props }) => {
    
    return (
        <GuestLayout title={props.title}>
            <Carousel />
            <AboutUs />
        </GuestLayout>
    );
};

export default Home;
