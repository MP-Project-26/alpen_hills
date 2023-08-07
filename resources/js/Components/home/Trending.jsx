import React from "react";
import parse from "html-react-parser";
import { Link } from "@inertiajs/react";

export default function Trending({ popular }) {
    return (
        <div className="flex flex-col items-center justify-center gap-8 pt-20">
            <div className="text-6xl font-extrabold flex flex-col items-center gap-6 -mt-5 mb-4">
                <div className="text-gray-700 lg:text-7xl md:text-5xl text-4xl">
                    <span className="text-primary-custom">TRENDING</span> TOPICS
                </div>
                <div className="w-20 h-2 bg-primary-custom"></div>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-5 ">
                {popular.map((item, i) => (
                    <div
                        className="card w-80 lg:w-96 bg-base-100 shadow-xl"
                        key={i}
                    >
                        <figure>
                            <img
                                src={`/storage/images/blog/${item.image}`}
                                alt="Shoes"
                                className="w-full"
                            />
                        </figure>
                        <div className="card-body gap-4 p-3 md:p-5 lg:p-7">
                            <h2 className="card-title paragraph-title">
                                {item.title}
                            </h2>
                            <div className="card-actions justify-between px-2">
                                <div className="flex flex-row">
                                    {" "}
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
                                                fill="#878787   "
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
                                    <p className="font-roboto text-md font-medium flex items-center text-gray-600">
                                        {item.views < 1000
                                            ? item.views
                                            : item.views / 1000 + "k"}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-roboto text-md font-medium flex items-center text-gray-600">
                                        {item.category_post.name}
                                    </p>
                                </div>
                            </div>
                            <div className=" paragraph-Blog text-neutral md:text-justify">
                                {parse(item.body)}
                            </div>
                            <Link
                                href={`/blog/spesifik/${item?.id}`}
                                className="flex flex-row gap-2 items-center text-xl font-semibold cursor-pointer "
                            >
                                Read Post
                                <i
                                    className="fas fa-arrow-right text-gray-500 -rotate-45
                                            "
                                ></i>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
