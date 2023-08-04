import ImageUser from "@/assets/user.png";
import moment from "moment/moment";
import React, { useRef, useState, useEffect } from "react";
import { Link, useForm } from "@inertiajs/react";
import axios from "axios";
import parse from "html-react-parser";

export default function SpesifikContentBlog({ dataContent: item }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        note: "",
        createdAt: Date.now(),
    });
    const textAreaRef = useRef(null);

    const resizeTextArea = () => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height =
            textAreaRef.current.scrollHeight + "px";
    };

    useEffect(() => {
        resizeTextArea();
    }, [data.note]);

    const onChange = (e) => {
        setData("note", e.target.value);
    };

    const SumbitComment = async (e) => {
        e.preventDefault();
        const response = await axios.put(
            `/blog/comment/${item.id}`,
            {
                id: data.id ? data.id + 1 : 1,
                name: data.name,
                note: data.note,
                createdAt: data.createdAt,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.status) {
            window.location.reload();
        }
    };
    return (
        <div className="px-5 w-full lg:w-[65%] flex flex-col gap-[5rem]">
            <div className=" space-y-7">
                <span className="text-3xl lg:text-6xl font-semibold text-green-custom">
                    {item.title}
                </span>
                <p className="text-md lg:text-xl font-semibold ">
                    {moment(item?.created_at).format("DD MMMM YYYY")}-{" "}
                    {item.author} - {"Property"}
                </p>
                <img
                    src={item.image}
                    alt=""
                    className="w-[90%] lg:w-full"
                    data-aos="fade-right"
                />
                <div
                    className="pl-8 text-lg text-justify text-black font-roboto font-medium max-w-full"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    {parse(item.content)}
                </div>
                <div className="w-full flex flex-col gap-10 lg:flex-row justify-between items-center">
                    <div className="text-green-custom flex flex-row items-center gap-5 font-semibold text-xl">
                        <p>Tags</p> <p> : </p>
                        {item.tags.map((tag, index) => (
                            <Link
                                href={`/blog/tag/${tag}`}
                                key={index}
                                className="rounded-md px-4 py-1 bg-green-custom text-white"
                            >
                                {tag}
                            </Link>
                        ))}
                    </div>
                    <div className="flex  flex-row">
                        <div className="bg-green-custom px-5 py-2 flex gap-2 justify-center items-center ">
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
                                        fill="#FFDE59"
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

                            <p className="font-roboto text-xl font-semibold text-white">
                                {item.views < 1000
                                    ? item.views
                                    : item.views / 1000 + "k"}
                            </p>
                        </div>
                        <div className="bg-green-custom px-5 py-2 flex gap-2 justify-center items-center ">
                            <svg
                                width="20"
                                height="22"
                                viewBox="0 0 20 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path
                                        d="M17.2431 5.44697H15.6086V13.6174H4.98414V15.433C4.98414 15.9323 5.35191 16.3409 5.8014 16.3409H14.7913L18.0603 19.9722V6.3548C18.0603 5.85549 17.6926 5.44697 17.2431 5.44697ZM13.974 10.8939V2.7235C13.974 2.22419 13.6063 1.81567 13.1568 1.81567H2.53235C2.08286 1.81567 1.71509 2.22419 1.71509 2.7235V15.433L4.98414 11.8017H13.1568C13.6063 11.8017 13.974 11.3932 13.974 10.8939Z"
                                        fill="#FFDE59"
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

                            <p className="font-roboto text-xl font-semibold text-white">
                                {item.comments.length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-500 w-full"></div>
                <div className="comment">
                    <div className=" space-y-5 w-[20rem] lg:w-[35rem] ">
                        {item.comments
                            ? item?.comments.map((item, i) => (
                                  <div
                                      key={i}
                                      className="w-full  bg-[#f5f4f4] shadow-xl justify-center rounded-[1rem] flex flex-col gap-6 "
                                  >
                                      <div className="flex flex-row items-center gap-4 w-full bg-teal-400  rounded-t-[1rem] px-8 py-4">
                                          <img src={ImageUser} alt="" />

                                          <div className="flex flex-col gap-1">
                                              <p className="font-roboto font-bold text-sm lg:text-lg text-white">
                                                  {item.name}
                                              </p>
                                              <p className="font-roboto font-normal text-xs text-gray-300">
                                                  {/* 10 Seccond Ago in  */}
                                                  {moment(
                                                      parseInt(item.createdAt)
                                                  ).fromNow()}
                                              </p>
                                          </div>
                                      </div>
                                      <p className=" m-0 xl:ml-14 font-roboto font-medium text-sm lg:text-lg  px-5 pb-8 break-words ">
                                          {item.note}
                                      </p>
                                  </div>
                              ))
                            : null}
                    </div>
                </div>
                <div className="contack ">
                    <h1
                        className={`font-extrabold text-lg lg:text-5xl py-[2rem] text-green-custom font-roboto ${
                            item.comments === 0 && "mt-[13rem]"
                        }`}
                    >
                        Tinggalkan Balasan
                    </h1>

                    <div className="bg-[#f5f4f4] w-[20rem] lg:w-[35rem] justify-center rounded-[2rem] flex shadow-xl flex-col">
                        <form
                            onSubmit={SumbitComment}
                            className="m-4 lg:mx-[4rem] lg:my-[4rem] flex flex-col gap-[1rem]"
                        >
                            <div className="flex items-center gap-[2.5rem]">
                                <p className="px-[1rem]">Name</p>
                                <input
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    type="text"
                                    className="w-full rounded-[1rem]"
                                />
                            </div>
                            <div className="flex items-center">
                                <p className="px-[1rem]">
                                    Notes{" "}
                                    <span className="text-red-800">
                                        optional
                                    </span>
                                </p>
                                <textarea
                                    ref={textAreaRef}
                                    value={data.note}
                                    onChange={onChange}
                                    rows={4}
                                    type="text"
                                    className="w-full h-32 rounded-[1rem] p-2 resize-none overflow-y-hidden"
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="sumbit"
                                    className="h-12 w-24 rounded-[2rem] rounded-tl-none text-white bg-[#0D7377]"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const dataComments = [
    {
        id: 1,
        name: "Unsername1",
        createdAt: 1688674447907,
        note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus tenetur ipsa? Sunt sit exercitationem aliquam excepturi molestias, provident placeat non vitae nemo dicta possimus neque, similique soluta culpa velit.",
    },
    {
        id: 2,
        name: "Unsername2",
        createdAt: 1688674447907,
        note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus tenetur ipsa? Sunt sit exercitationem aliquam excepturi molestias, provident placeat non vitae nemo dicta possimus neque, similique soluta culpa velit.",
    },
];
