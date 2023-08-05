import SpesifikContentBlog from "@/Components/blog/spesifik/SpesifikContentBlog";
import GuestLayout from "@/Layouts/GuestLayout";
import moment from "moment/moment";
import parse from "html-react-parser";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PopularBlog from "@/Components/blog/PopularBlog";

const dataBlog = [
    {
        author: "Jagres",
        comments: 0,
        content:
            '<ol style="list-style-type: lower-alpha;"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur dapibus eros et elementum. Nullam pellentesque vulputate sem et feugiat. Aenean rutrum libero lectus, ac mattis quam suscipit quis. Etiam viverra tristique erat. Morbi nec quam dui. Phasellus vel lorem sit amet magna aliquam varius. Ut ultricies tristique ex, nec aliquam nisi porttitor auctor. Curabitur ullamcorper odio urna, sed semper orci ultricies at. Proin semper tellus fringilla, sagittis sapien vitae, accumsan odio. Pellentesque placerat est ultricies neque imperdiet cursus tristique at lorem. Aliquam finibus gravida urna, id eleifend massa vehicula et. Cras rhoncus nulla vitae dapibus fermentum. Nunc hendrerit erat orci, id sagittis lorem vulputate quis. Fusce eget lobortis elit. Suspendisse sit amet lobortis augue. Nunc vitae orci et enim sollicitudin posuere. Mauris facilisis eros id est pellentesque accumsan. Nam tortor nisl, vulputate nec luctus nec, aliquam ut erat. Pellentesque nec enim sed mauris ornare interdum et vitae augue. Duis turpis ligula, ultricies vel commodo in, placerat tincidunt massa. Curabitur quis efficitur massa.</li></ol>',
        created_at: "2023-07-31T15:12:49.000000Z",
        id: 1,
        image: "/storage/images/content/about/about_1.png",
        tags: ["Home", "Forniture"],
        title: "awdawd",
        updated_at: "2023-07-31T15:41:36.000000Z",
        views: 2,
    },
    {
        author: "Jagres",
        comments: 0,
        content:
            '<ol style="list-style-type: lower-alpha;"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur dapibus eros et elementum. Nullam pellentesque vulputate sem et feugiat. Aenean rutrum libero lectus, ac mattis quam suscipit quis. Etiam viverra tristique erat. Morbi nec quam dui. Phasellus vel lorem sit amet magna aliquam varius. Ut ultricies tristique ex, nec aliquam nisi porttitor auctor. Curabitur ullamcorper odio urna, sed semper orci ultricies at. Proin semper tellus fringilla, sagittis sapien vitae, accumsan odio. Pellentesque placerat est ultricies neque imperdiet cursus tristique at lorem. Aliquam finibus gravida urna, id eleifend massa vehicula et. Cras rhoncus nulla vitae dapibus fermentum. Nunc hendrerit erat orci, id sagittis lorem vulputate quis. Fusce eget lobortis elit. Suspendisse sit amet lobortis augue. Nunc vitae orci et enim sollicitudin posuere. Mauris facilisis eros id est pellentesque accumsan. Nam tortor nisl, vulputate nec luctus nec, aliquam ut erat. Pellentesque nec enim sed mauris ornare interdum et vitae augue. Duis turpis ligula, ultricies vel commodo in, placerat tincidunt massa. Curabitur quis efficitur massa.</li></ol>',
        created_at: "2023-07-31T15:12:49.000000Z",
        id: 1,
        image: "/storage/images/content/about/about_1.png",
        tags: ["Home", "Forniture"],
        title: "awdawd",
        updated_at: "2023-07-31T15:41:36.000000Z",
        views: 2,
    },
    {
        author: "Jagres",
        comments: 0,
        content:
            '<ol style="list-style-type: lower-alpha;"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur dapibus eros et elementum. Nullam pellentesque vulputate sem et feugiat. Aenean rutrum libero lectus, ac mattis quam suscipit quis. Etiam viverra tristique erat. Morbi nec quam dui. Phasellus vel lorem sit amet magna aliquam varius. Ut ultricies tristique ex, nec aliquam nisi porttitor auctor. Curabitur ullamcorper odio urna, sed semper orci ultricies at. Proin semper tellus fringilla, sagittis sapien vitae, accumsan odio. Pellentesque placerat est ultricies neque imperdiet cursus tristique at lorem. Aliquam finibus gravida urna, id eleifend massa vehicula et. Cras rhoncus nulla vitae dapibus fermentum. Nunc hendrerit erat orci, id sagittis lorem vulputate quis. Fusce eget lobortis elit. Suspendisse sit amet lobortis augue. Nunc vitae orci et enim sollicitudin posuere. Mauris facilisis eros id est pellentesque accumsan. Nam tortor nisl, vulputate nec luctus nec, aliquam ut erat. Pellentesque nec enim sed mauris ornare interdum et vitae augue. Duis turpis ligula, ultricies vel commodo in, placerat tincidunt massa. Curabitur quis efficitur massa.</li></ol>',
        created_at: "2023-07-31T15:12:49.000000Z",
        id: 1,
        image: "/storage/images/content/about/about_1.png",
        tags: ["Home", "Forniture"],
        title: "awdawd",
        updated_at: "2023-07-31T15:41:36.000000Z",
        views: 2,
    },
];

const allDataBlog = [
    {
        author: "Futut",
        comments: 0,
        content:
            '<ol style="list-style-type: lower-alpha;"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur dapibus eros et elementum. Nullam pellentesque vulputate sem et feugiat. Aenean rutrum libero lectus, ac mattis quam suscipit quis. Etiam viverra tristique erat. Morbi nec quam dui. Phasellus vel lorem sit amet magna aliquam varius. Ut ultricies tristique ex, nec aliquam nisi porttitor auctor. Curabitur ullamcorper odio urna, sed semper orci ultricies at. Proin semper tellus fringilla, sagittis sapien vitae, accumsan odio. Pellentesque placerat est ultricies neque imperdiet cursus tristique at lorem. Aliquam finibus gravida urna, id eleifend massa vehicula et. Cras rhoncus nulla vitae dapibus fermentum. Nunc hendrerit erat orci, id sagittis lorem vulputate quis. Fusce eget lobortis elit. Suspendisse sit amet lobortis augue. Nunc vitae orci et enim sollicitudin posuere. Mauris facilisis eros id est pellentesque accumsan. Nam tortor nisl, vulputate nec luctus nec, aliquam ut erat. Pellentesque nec enim sed mauris ornare interdum et vitae augue. Duis turpis ligula, ultricies vel commodo in, placerat tincidunt massa. Curabitur quis efficitur massa.</li></ol>',
        created_at: "2023-07-31T15:12:49.000000Z",
        id: 1,
        image: "/storage/images/content/about/about_1.png",
        tags: ["Home", "Forniture"],
        title: "awdawd",
        updated_at: "2023-07-31T15:41:36.000000Z",
        views: 2,
    },
    {
        author: "Futut",
        comments: 0,
        content:
            '<ol style="list-style-type: lower-alpha;"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur dapibus eros et elementum. Nullam pellentesque vulputate sem et feugiat. Aenean rutrum libero lectus, ac mattis quam suscipit quis. Etiam viverra tristique erat. Morbi nec quam dui. Phasellus vel lorem sit amet magna aliquam varius. Ut ultricies tristique ex, nec aliquam nisi porttitor auctor. Curabitur ullamcorper odio urna, sed semper orci ultricies at. Proin semper tellus fringilla, sagittis sapien vitae, accumsan odio. Pellentesque placerat est ultricies neque imperdiet cursus tristique at lorem. Aliquam finibus gravida urna, id eleifend massa vehicula et. Cras rhoncus nulla vitae dapibus fermentum. Nunc hendrerit erat orci, id sagittis lorem vulputate quis. Fusce eget lobortis elit. Suspendisse sit amet lobortis augue. Nunc vitae orci et enim sollicitudin posuere. Mauris facilisis eros id est pellentesque accumsan. Nam tortor nisl, vulputate nec luctus nec, aliquam ut erat. Pellentesque nec enim sed mauris ornare interdum et vitae augue. Duis turpis ligula, ultricies vel commodo in, placerat tincidunt massa. Curabitur quis efficitur massa.</li></ol>',
        created_at: "2023-07-31T15:12:49.000000Z",
        id: 1,
        image: "/storage/images/content/about/about_1.png",
        tags: ["Home", "Forniture"],
        title: "awdawd",
        updated_at: "2023-07-31T15:41:36.000000Z",
        views: 2,
    },
    {
        author: "Futut",
        comments: 0,
        content:
            '<ol style="list-style-type: lower-alpha;"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur dapibus eros et elementum. Nullam pellentesque vulputate sem et feugiat. Aenean rutrum libero lectus, ac mattis quam suscipit quis. Etiam viverra tristique erat. Morbi nec quam dui. Phasellus vel lorem sit amet magna aliquam varius. Ut ultricies tristique ex, nec aliquam nisi porttitor auctor. Curabitur ullamcorper odio urna, sed semper orci ultricies at. Proin semper tellus fringilla, sagittis sapien vitae, accumsan odio. Pellentesque placerat est ultricies neque imperdiet cursus tristique at lorem. Aliquam finibus gravida urna, id eleifend massa vehicula et. Cras rhoncus nulla vitae dapibus fermentum. Nunc hendrerit erat orci, id sagittis lorem vulputate quis. Fusce eget lobortis elit. Suspendisse sit amet lobortis augue. Nunc vitae orci et enim sollicitudin posuere. Mauris facilisis eros id est pellentesque accumsan. Nam tortor nisl, vulputate nec luctus nec, aliquam ut erat. Pellentesque nec enim sed mauris ornare interdum et vitae augue. Duis turpis ligula, ultricies vel commodo in, placerat tincidunt massa. Curabitur quis efficitur massa.</li></ol>',
        created_at: "2023-07-31T15:12:49.000000Z",
        id: 1,
        image: "/storage/images/content/about/about_1.png",
        tags: ["Home", "Forniture"],
        title: "awdawd",
        updated_at: "2023-07-31T15:41:36.000000Z",
        views: 2,
    },
];
export default function Spesifik() {
    const [pupular, setPupular] = useState([]);
    useEffect(() => {
        const dataPopularBlog = [...allDataBlog].sort(
            (a, b) => b.views - a.views
        );
        setPupular(dataPopularBlog.slice(0, 3));
    }, [allDataBlog]);
    return (
        <GuestLayout title="Spesifik">
            <div className="w-full py-[10rem] px-0 lg:px-[6rem] bg-white">
                <div className="flex flex-col xl:flex-row w-full justify-between gap-[5rem] columns-2">
                    <SpesifikContentBlog dataContent={dataBlog[0]} />
                    {/* <div className="px-5 w-full lg:w-[65%] flex flex-col gap-[5rem]">
                        <div className=" space-y-7">
                            <span className="text-3xl lg:text-6xl font-semibold text-green-custom">
                                {dataBlog[0].title}
                            </span>
                            <p className="text-md lg:text-xl font-semibold ">
                                {moment(dataBlog[0]?.created_at).format(
                                    "DD MMMM YYYY"
                                )}
                                - {dataBlog[0].author} - {"Property"}
                            </p>
                            <img
                                src={dataBlog[0].image}
                                alt=""
                                className="w-[90%] lg:w-full"
                                data-aos="fade-right"
                            />
                            <div
                                className="pl-8 text-lg text-justify text-black font-roboto font-medium max-w-full"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                            >
                                {parse(dataBlog[0].content)}
                            </div>
                        </div>
                    </div> */}
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
