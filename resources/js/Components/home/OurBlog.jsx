import moment from "moment/moment";
import React from "react";
import { Link } from "@inertiajs/react";
import parse from "html-react-parser";

export default function OurBlog({ ourBlog }) {
    return (
        <div className="w-full py-10 lg:py-20 px-0 md:px-[6rem]">
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="text-6xl font-extrabold flex flex-col items-center gap-6 ">
                    <div className="text-gray-700 lg:text-7xl md:text-5xl text-4xl">
                        <span className="text-primary-custom ">OUR</span> BLOG
                    </div>
                    <div className="w-20 h-2 bg-primary-custom"></div>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-col w-full h-full justify-center lg:gap-7 md:gap-5 px-5 lg:px-32">
                    <img
                        src="/storage/images/content/home/ourblog.png"
                        alt=""
                    />
                    <div className="flex flex-col gap-5 py-10">
                        <div className="flex flex-col gap-2">
                            <Link
                                href={`/blog/spesifik/${ourBlog?.id}`}
                                className="text-4xl font-bold "
                            >
                                LATEST POST{" "}
                                <i
                                    className="fas fa-arrow-right text-gray-500 -rotate-45
                                            cursor-pointer "
                                ></i>
                                <div className="border-b-[.2rem] border-primary-custom w-[14rem]"></div>
                            </Link>
                            <div className="text-gray-800 font-medium">
                                <span className="text-primary-custom">
                                    Posted on :
                                </span>
                                {moment(ourBlog?.created_at).format(
                                    "DD MMMM YYYY"
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-4xl font-bold">
                                {ourBlog?.title}
                            </div>
                            <div className="text-gray-700 paragraph-ourblog min-h-[5rem]">
                                {parse(`${ourBlog?.body}`)}
                            </div>
                        </div>{" "}
                        {/* buatkan class yang mana widthnya tidak full tapi mengikuti komponen yang ada */}
                        <div className="flex flex-row justify-start">
                            <div className="border border-primary-custom p-2 flex flex-row items-center gap-3">
                                <span className="bg-primary-custom px-2 py-1 font-semibold text-white">
                                    Category :
                                </span>
                                <p className="text-black ">Founiture</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-start">
                            <button className="bg-primary-custom px-5 py-2 text-white font-semibold text-2xl">
                                Read Me
                            </button>
                        </div>
                    </div>
                    <div className=" md:border-none border-b-2 border-gray-500"></div>
                </div>
            </div>
        </div>
    );
}
