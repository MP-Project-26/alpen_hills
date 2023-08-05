import SpesifikContentBlog from "@/Components/blog/spesifik/SpesifikContentBlog";
import GuestLayout from "@/Layouts/GuestLayout";
import moment from "moment/moment";
import parse from "html-react-parser";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PopularBlog from "@/Components/blog/PopularBlog";

export default function Spesifik({
    dataContent: dataBlog,
    dataPopular: allDataBlog,
}) {
    const [pupular, setPupular] = useState([]);
    useEffect(() => {
        const dataPopularBlog = [...allDataBlog.data].sort(
            (a, b) => b.views - a.views
        );
        setPupular(dataPopularBlog.slice(0, 3));
    }, [allDataBlog]);
    return (
        <GuestLayout title="Spesifik">
            <div className="w-full py-[10rem] px-0 lg:px-[6rem] bg-white">
                <div className="flex flex-col xl:flex-row w-full justify-between gap-[5rem] columns-2">
                    <SpesifikContentBlog dataContent={dataBlog.data[0]} />
                    {/* kanan */}
                    <div className="px-5 flex flex-col gap-10 w-full xl:w-[35%] sticky top-0 pt-36">
                        {/* Popular Posts */}
                        <PopularBlog data={pupular} />
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
