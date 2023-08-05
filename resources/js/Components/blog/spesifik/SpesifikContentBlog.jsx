// import ImageUser from "@/assets/user.png";
import React, { useRef, useState, useEffect } from "react";
import { Link, useForm } from "@inertiajs/react";
import axios from "axios";
import moment from "moment/moment";
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
    // console.log(item);
    useEffect(() => {
        resizeTextArea();
    }, [data.note]);

    const onChange = (e) => {
        setData("note", e.target.value);
    };

    // const SumbitComment = async (e) => {
    //     e.preventDefault();
    //     const response = await axios.put(
    //         `/blog/comment/${item.id}`,
    //         {
    //             id: data.id ? data.id + 1 : 1,
    //             name: data.name,
    //             note: data.note,
    //             createdAt: data.createdAt,
    //         },
    //         {
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         }
    //     );

    //     if (response.status) {
    //         window.location.reload();
    //     }
    // };
    return (
        <div className="px-5 w-full lg:w-[65%] flex flex-col gap-[5rem]">
            <div className=" space-y-7">
                <span className="text-3xl lg:text-6xl font-semibold text-primary-custom">
                    {item.title}
                </span>
                <p className="text-md lg:text-xl font-semibold text-gray-600">
                    {moment(item?.created_at).format("DD MMMM YYYY")} by{" "}
                    {item.user_post.name}
                </p>
                <div className=" relative " data-aos="fade-right">
                    <img
                        src={`/storage/images/blog/${item.image}`}
                        alt=""
                        className="w-full"
                    />{" "}
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
                        </div>
                    </div>
                </div>
                <div
                    className="pl-8 text-lg text-justify text-black font-roboto font-medium max-w-full"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    {parse(item.body)}
                </div>
                {/* <div className="border border-gray-500 w-full"></div> */}
                <div className="comment  space-y-9">
                    <h1 className="text-3xl lg:text-5xl font-semibold text-primary-custom">
                        Comments ({item?.comments?.length})
                    </h1>
                    <div className=" space-y-5 w-[20rem] lg:w-full ">
                        {item?.comments
                            ? item?.comments.map((item, i) => (
                                  <div
                                      key={i}
                                      className="w-full  bg-white justify-center flex flex-col gap-6 "
                                  >
                                      <div className="flex flex-row items-center gap-4 w-full bg-white  px-5 py-4">
                                          <img
                                              src={
                                                  "/storage/images/content/blog/logo-comment.png"
                                              }
                                              alt=""
                                          />

                                          <div className="flex flex-col gap-1">
                                              <p className="font-roboto font-bold text-sm lg:text-lg text-black">
                                                  {item.name}
                                              </p>
                                              <p className="font-roboto font-normal text-xs text-gray-500">
                                                  {/* 10 Seccond Ago in  */}
                                                  {moment(
                                                      item?.created_at
                                                  ).fromNow()}
                                              </p>
                                          </div>
                                      </div>
                                      <p className=" m-0  font-roboto font-normal text-sm lg:text-lg  px-5 pb-8 break-words ">
                                          {item?.comment}
                                      </p>
                                      <div className="px-5 -mt-5">
                                          <div className=" border-gray-500 border-b-[2px] w-full"></div>
                                      </div>
                                  </div>
                              ))
                            : null}
                    </div>
                </div>
                <div className="contack  pt-20 px-5">
                    <div className="bg-white relative w-[20rem] lg:w-full justify-center flex flex-col border-[.2rem] border-primary-custom">
                        <h1 className=" absolute -top-9 left-16 p-2 bg-white font-semibold text-5xl text-primary-custom">
                            New Comments
                        </h1>
                        <form
                            // onSubmit={SumbitComment}
                            className="m-4 lg:mx-[4rem] lg:my-[4rem] flex flex-col gap-[1rem]"
                        >
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold">
                                    Name <span className="text-red-500">*</span>
                                </p>
                                <input
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    type="text"
                                    className="w-full bg-gray-200  appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-custom"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold">
                                    Comment{" "}
                                    <span className="text-red-500">*</span>
                                </p>
                                <textarea
                                    ref={textAreaRef}
                                    value={data.note}
                                    onChange={onChange}
                                    rows={4}
                                    type="text"
                                    className="w-full h-32 p-2 resize-none overflow-y-hidden bg-gray-200  appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-custom"
                                ></textarea>
                            </div>
                            <div className="flex justify-between">
                                {/* buatkan display option anonymous */}
                                <div className="flex items-center gap-2">
                                    <input
                                        name="anonymous"
                                        id="anonymous"
                                        type="checkbox"
                                        className="h-4 w-4"
                                    />
                                    <label
                                        htmlFor="anonymous"
                                        className="font-roboto font-semibold text-md flex items-center"
                                    >
                                        Display as Anonymous ( Optional )
                                    </label>
                                </div>

                                <button
                                    type="sumbit"
                                    className="h-12 w-24 cursor-pointer rounded-tl-none text-white bg-primary-custom font-roboto font-medium"
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
