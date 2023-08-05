import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ContentBlog from "@/Components/blog/ContentBlog";
import PopularBlog from "@/Components/blog/PopularBlog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RecentPost from "@/Components/blog/RecentPost";

export default function Blog({ dataBlog: datas, dataPopular: allDataBlog }) {
    const [data, setData] = useState([]);
    const [recent, setRecent] = useState([]);
    const [pupular, setPupular] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [itemOffset, setItemOffset] = useState(0);
    // console.log(pupular);

    useEffect(() => {
        const dataPopularBlog = [...allDataBlog.data].sort(
            (a, b) => b.views - a.views
        );
        setPupular(dataPopularBlog.slice(0, 3));
    }, [datas.data]);

    useEffect(() => {
        // buatkan useEffect untuk mengambil data dan membandingkan terbaru
        const dataRecent = [...datas.data].sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setRecent(dataRecent.slice(0, 3));
    }, [datas.data]);

    const handelData = async () => {
        setLoading(true);
        setData(datas.data);
        setLoading(false);
    };

    useEffect(() => {
        if (!search) {
            handelData();
        }
    }, [loading]);

    const onSearch = async (e) => {
        e.preventDefault();

        setLoading(true);
        const response = await axios.post(
            `/blog/search`,
            {
                search: search,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        setItemOffset(0);
        setData(response.data.data.data);
        setLoading(false);
    };
    return (
        <GuestLayout title="Blog">
            <div className="w-full py-[10rem] px-0 lg:px-[6rem] bg-white">
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="text-6xl font-extrabold flex flex-col items-center gap-6 -mt-5 mb-4">
                        <div>
                            <span className="text-primary-custom">OUR</span>{" "}
                            BLOG
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row  w-full  justify-between gap-[5rem] columns-2">
                        <ContentBlog
                            data={data}
                            setItemOffset={setItemOffset}
                            itemOffset={itemOffset}
                        />

                        {/* kanan */}
                        <div className="px-5 flex flex-col gap-10 w-full lg:w-[35%] sticky top-0 ">
                            <div className=" border-green-custom border-[2px] rounded-2xl flex flex-row p-5 bg-white shadow-xl">
                                <input
                                    className="w-full px-4 py-2"
                                    type="text"
                                    name="search"
                                    id="search"
                                    placeholder="search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />{" "}
                                <button
                                    onClick={onSearch}
                                    type="sumbit"
                                    className=" bg-primary-custom flex justify-center items-center px-5 text-white"
                                >
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                            {/* Popular Posts */}
                            <PopularBlog data={pupular} />
                            <RecentPost data={recent} />
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
