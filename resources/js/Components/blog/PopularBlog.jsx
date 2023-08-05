import React from "react";
import { Link } from "@inertiajs/react";
import moment from "moment/moment";
import axios from "axios";

export default function PopularBlog({ data }) {
    const addViewCount = async (dataView) => {
        await axios.put(`/blog/view/${dataView.id}`, dataView, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
    return (
        <div className=" px-10 pb-5 w-full border-primary-custom border-[2px] flex flex-col gap-4 bg-white">
            <p className="bg-primary-custom w-full text-center font-medium text-2xl text-white p-2 font-roboto">
                Popular Posts
            </p>
            {data.map((item, index) => (
                <div
                    key={index}
                    className="py-3 flex flex-row gap-6 lg:gap-2 justify-center items-center"
                >
                    <img
                        src={`/storage/images/blog/${item.image}`}
                        alt=""
                        className="w-[55%]"
                    />
                    <div className="flex flex-col gap-1 w-[18rem]">
                        <p className="text-xs font-semibold font-roboto">
                            {moment(item?.created_at).fromNow()}
                        </p>
                        <p className="font-roboto text-xl font-medium paragraph-popular">
                            {item.title}
                        </p>
                        <p className="font-roboto text-md font-semibold text-primary-custom">
                            {item.category_post.name} | Property
                        </p>
                        <div className="w-full flex">
                            <p className="font-roboto text-md font-semibold text-primary-custom paragraph-popular w-[6.5rem]">
                                by {item.user_post.name}
                            </p>
                            <div className="flex flex-row gap-2 text-xs items-center">
                                <svg
                                    width="21"
                                    height="22"
                                    viewBox="0 0 21 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path
                                            d="M10.6437 4.08524C6.55739 4.08524 3.06767 6.90857 1.65381 10.8939C3.06767 14.8793 6.55739 17.7026 10.6437 17.7026C14.73 17.7026 18.2197 14.8793 19.6336 10.8939C18.2197 6.90857 14.73 4.08524 10.6437 4.08524ZM10.6437 15.433C8.38805 15.433 6.55739 13.3995 6.55739 10.8939C6.55739 8.38832 8.38805 6.3548 10.6437 6.3548C12.8993 6.3548 14.73 8.38832 14.73 10.8939C14.73 13.3995 12.8993 15.433 10.6437 15.433ZM10.6437 8.17045C9.28704 8.17045 8.19191 9.38693 8.19191 10.8939C8.19191 12.4009 9.28704 13.6174 10.6437 13.6174C12.0004 13.6174 13.0955 12.4009 13.0955 10.8939C13.0955 9.38693 12.0004 8.17045 10.6437 8.17045Z"
                                            fill="#0D7377"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_120_115">
                                            <rect
                                                x="0.836426"
                                                y="3.05176e-05"
                                                width="19.6143"
                                                height="21.7878"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="text-xs font-semibold font-roboto">
                                    {item.views < 1000
                                        ? item.views
                                        : item.views / 1000 + "k"}
                                </p>
                            </div>
                        </div>
                        <p className="font-roboto text-md font-semibold  paragraph-popular">
                            {item.body}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
