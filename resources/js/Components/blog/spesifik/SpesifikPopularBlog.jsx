import React from "react";
import moment from "moment/moment";

export default function SpesifikPopularBlog({ dataPopular }) {
    return (
        <div className=" w-full border-green-custom border-[2px] flex flex-col gap-4 bg-white">
            <p className="bg-green-custom w-full text-center font-medium text-2xl text-white p-2 font-roboto">
                Popular Posts
            </p>
            {dataPopular.map((item, index) => (
                <div
                    key={index}
                    className="p-5 flex flex-row gap-6 lg:gap-2 justify-center items-center"
                >
                    <img src={item.image} alt="" className="w-[45%]" />
                    <div className="flex flex-col gap-1">
                        <p className="font-roboto text-xl font-medium paragraph-popular">
                            {item.title}
                        </p>
                        <p className="font-roboto text-md font-semibold text-green-custom">
                            {item.author} | Property
                        </p>
                        <div className="w-[50%] flex gap-5">
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
                            <div className="flex flex-row gap-2 text-xs items-center">
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
                                            fill="#0D7377"
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
                                <p className="text-xs font-semibold font-roboto">
                                    {item.comments
                                        ? item.comments.length < 1000
                                            ? item.comments.length
                                            : item.comments.length / 1000 + "k"
                                        : 0}
                                </p>
                            </div>
                        </div>{" "}
                        <div className="flex flex-row gap-2 items-center pl-1">
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path
                                        d="M6.5 0C2.90977 0 0 2.90977 0 6.5C0 10.0902 2.90977 13 6.5 13C10.0902 13 13 10.0902 13 6.5C13 2.90977 10.0902 0 6.5 0ZM6.5 11.9158C3.50898 11.9158 1.08418 9.49102 1.08418 6.5C1.08418 3.50898 3.50898 1.08418 6.5 1.08418C9.49102 1.08418 11.9158 3.50898 11.9158 6.5C11.9158 9.49102 9.49102 11.9158 6.5 11.9158ZM7.04082 2.16582H5.95664V6.5L8.39414 8.9375L9.20664 8.125L7.04082 5.95918V2.16582Z"
                                        fill="#0D7377"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_191_148">
                                        <rect
                                            width="13"
                                            height="13"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-xs font-semibold font-roboto">
                                {moment(item.date).fromNow()}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
