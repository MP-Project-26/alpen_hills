import React from "react";
import { Link } from "@inertiajs/react";
import moment from "moment";
import { useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useEffect } from "react";
import parse from "html-react-parser";
import ModalComments from "../modal/modalComments";

export default function ContentBlog({
    data: dataBlog,
    setItemOffset,
    itemOffset,
}) {
    const [dataModalComments, setDataModalComments] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [Loading, setLoading] = useState(false);

    const addViewCount = async (dataView) => {
        await axios.put(`/blog/view/${dataView.id}`, dataView, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    useEffect(() => {
        setLoading(true);
        // Fetch items from another resources.
        const endOffset = itemOffset + 2;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(dataBlog.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(dataBlog.length / 2));
        setLoading(false);
    }, [itemOffset, dataBlog]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        window.scrollTo({
            top: 60,
            behavior: "smooth",
        });

        const newOffset = (event.selected * 2) % dataBlog.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
    };
    return (
        <>
            {/* <ModalComments data={dataModalComments} /> */}
            <div className="px-5 w-full lg:w-[65%] flex flex-col gap-[5rem]">
                {currentItems.map((item, index) => (
                    <div className=" space-y-7" key={index}>
                        <div className=" relative w-full" data-aos="fade-right">
                            <img
                                src={`/storage/images/blog/${item.image}`}
                                alt=""
                                className="w-full"
                            />
                            <div className="absolute top-0 left-0 w-full h-full">
                                <div className="bg-gradient-custom w-full h-full "></div>
                            </div>
                            <div className="relative">
                                <div className="absolute bottom-[7rem] left-10 ">
                                    <span className="text-6xl font-semibold text-white">
                                        {item.title}
                                    </span>
                                </div>
                                <div className="absolute bottom-10 left-10 ">
                                    <div className="flex flex-row gap-5">
                                        <div className="border border-white p-3 flex flex-row items-center gap-3">
                                            <span className="bg-white px-3 py-1 font-semibold">
                                                Category :
                                            </span>
                                            <p className="text-white ">
                                                {item.category_post.name}
                                            </p>
                                        </div>
                                        <Link
                                            onClick={() => {
                                                addViewCount(item);
                                            }}
                                            href={`/blog/spesifik/${item.id}`}
                                            className=" bg-white flex justify-center items-center cursor-pointer"
                                        >
                                            <i
                                                className="fas fa-arrow-right text-primary-custom
                                            cursor-pointer text-3xl px-4"
                                            ></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-2 right-2 ">
                                <div className="flex  flex-row">
                                    <div className="bg-primary-custom px-5 py-2 flex gap-2 justify-center items-center ">
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
                                                    fill="#eaeaea   "
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

                                        <p className="font-roboto text-md font-medium flex items-center text-white">
                                            {item.views < 1000
                                                ? item.views
                                                : item.views / 1000 + "k"}
                                        </p>
                                    </div>
                                    <div className="bg-primary-custom px-5 py-2 flex gap-2 justify-center items-center ">
                                        <svg
                                            onClick={() => {
                                                setDataModalComments(item);
                                                window.my_modal_2.showModal();
                                            }}
                                            className="cursor-pointer"
                                            width="20"
                                            height="22"
                                            viewBox="0 0 20 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path
                                                    d="M17.2431 5.44697H15.6086V13.6174H4.98414V15.433C4.98414 15.9323 5.35191 16.3409 5.8014 16.3409H14.7913L18.0603 19.9722V6.3548C18.0603 5.85549 17.6926 5.44697 17.2431 5.44697ZM13.974 10.8939V2.7235C13.974 2.22419 13.6063 1.81567 13.1568 1.81567H2.53235C2.08286 1.81567 1.71509 2.22419 1.71509 2.7235V15.433L4.98414 11.8017H13.1568C13.6063 11.8017 13.974 11.3932 13.974 10.8939Z"
                                                    fill="#eaeaea   "
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_120_119">
                                                    <rect
                                                        x="0.0805664"
                                                        y="3.05176e-05"
                                                        width="19.6143"
                                                        height="21.7878"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <p
                                            className="font-roboto text-xl font-semibold text-white cursor-pointer"
                                            onClick={() => {
                                                setDataModalComments(item);
                                                window.my_modal_2.showModal();
                                            }}
                                        >
                                            {item.comments.length}
                                        </p>
                                    </div>
                                    {/* <ModalComments item={item} /> */}
                                </div>
                            </div>
                        </div>{" "}
                        <p className="text-xl font-semibold text-gray-600">
                            {moment(item?.created_at).format("DD MMMM YYYY")}-{" "}
                            {item.user_post.name} - {"Property"}
                        </p>
                        <div className="text-lg text-justify text-black paragraph-Blog font-roboto font-medium max-w-full">
                            {parse(item.body)}
                        </div>
                    </div>
                ))}
                <ReactPaginate
                    className="flex flex-row gap-1 w-full justify-center items-center select-none"
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel="< prev"
                    pageClassName=" text-xl bg-primary-custom p-2 rounded-md text-white"
                    pageLinkClassName=" rounded-md text-white  px-4 py-2 font-semibold font-roboto"
                    previousClassName="bg-primary-custom p-2 rounded-md text-white"
                    previousLinkClassName="text-xl p-2 bg-primary-customfont-semibold font-roboto"
                    nextClassName="bg-primary-custom p-2 rounded-md text-white"
                    nextLinkClassName="text-xl p-2  font-semibold font-roboto"
                    breakLabel="..."
                    breakClassName="bg-primary-custom p-2 rounded-md text-white"
                    breakLinkClassName="text-xl font-semibold font-roboto"
                    containerClassName="pagination"
                    activeClassName="bg-teal-500"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    );
}
