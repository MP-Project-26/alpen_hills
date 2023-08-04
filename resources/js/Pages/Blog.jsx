import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ContentBlog from "@/Components/blog/ContentBlog";
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


export default function Blog() {
     const [data, setData] = useState([]);
     const [pupular, setPupular] = useState([]);
     const [search, setSearch] = useState("");
     const [loading, setLoading] = useState(false);
     const [itemOffset, setItemOffset] = useState(0);
     console.log("dataBlog", dataBlog, "allDataBlog", allDataBlog);

     useEffect(() => {
         const dataPopularBlog = [...allDataBlog].sort(
             (a, b) => b.views - a.views
         );
         setPupular(dataPopularBlog.slice(0, 3));
     }, [dataBlog]);

     const handelData = async () => {
         setLoading(true);
         setData(dataBlog);
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
         setData(response.data.data);
         setLoading(false);
     };
    return (
        <GuestLayout title="Blog">
            <div className="w-full py-[10rem] px-0 lg:px-[6rem] bg-white">
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="text-6xl font-extrabold flex flex-col items-center gap-6 mb-6">
                        <div>
                            <span className="text-primary-custom">OUR</span> BLOG
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row   w-full  justify-between gap-[5rem] columns-2">
                        <ContentBlog
                            data={data}
                            setItemOffset={setItemOffset}
                            itemOffset={itemOffset}
                        />

                        {/* kanan */}
                        <div className="px-5 flex flex-col gap-10 w-full lg:w-[35%] sticky top-0 ">
                            <div className=" border-green-custom border-[2px] rounded-2xl flex flex-row p-5 gap-4 bg-white shadow-xl">
                                <input
                                    className="w-full px-4 py-2 rounded-xl"
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
                                    className=" rounded-xl bg-green-custom flex justify-center items-center px-5 text-white"
                                >
                                    Search
                                </button>
                            </div>
                            {/* Popular Posts */}
                            <PopularBlog data={pupular} />
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}


// import GuestLayout from '@/Layouts/GuestLayout'
// import React from 'react'

// const dataBlog = [
//     {
//         author: "Jagres",
//         comments: 0,
//         content:
//             '<ol style="list-style-type: lower-alpha;"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur dapibus eros et elementum. Nullam pellentesque vulputate sem et feugiat. Aenean rutrum libero lectus, ac mattis quam suscipit quis. Etiam viverra tristique erat. Morbi nec quam dui. Phasellus vel lorem sit amet magna aliquam varius. Ut ultricies tristique ex, nec aliquam nisi porttitor auctor. Curabitur ullamcorper odio urna, sed semper orci ultricies at. Proin semper tellus fringilla, sagittis sapien vitae, accumsan odio. Pellentesque placerat est ultricies neque imperdiet cursus tristique at lorem. Aliquam finibus gravida urna, id eleifend massa vehicula et. Cras rhoncus nulla vitae dapibus fermentum. Nunc hendrerit erat orci, id sagittis lorem vulputate quis. Fusce eget lobortis elit. Suspendisse sit amet lobortis augue. Nunc vitae orci et enim sollicitudin posuere. Mauris facilisis eros id est pellentesque accumsan. Nam tortor nisl, vulputate nec luctus nec, aliquam ut erat. Pellentesque nec enim sed mauris ornare interdum et vitae augue. Duis turpis ligula, ultricies vel commodo in, placerat tincidunt massa. Curabitur quis efficitur massa.</li></ol>',
//         created_at: "2023-07-31T15:12:49.000000Z",
//         id: 1,
//         image: "/storage/images/content/about/about_1.png",
//         tags: ["Home", "Forniture"],
//         title: "awdawd",
//         updated_at: "2023-07-31T15:41:36.000000Z",
//         views: 2,
//     },
//     {
//         author: "Jagres",
//         comments: 0,
//         content:
//             '<ol style="list-style-type: lower-alpha;"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur dapibus eros et elementum. Nullam pellentesque vulputate sem et feugiat. Aenean rutrum libero lectus, ac mattis quam suscipit quis. Etiam viverra tristique erat. Morbi nec quam dui. Phasellus vel lorem sit amet magna aliquam varius. Ut ultricies tristique ex, nec aliquam nisi porttitor auctor. Curabitur ullamcorper odio urna, sed semper orci ultricies at. Proin semper tellus fringilla, sagittis sapien vitae, accumsan odio. Pellentesque placerat est ultricies neque imperdiet cursus tristique at lorem. Aliquam finibus gravida urna, id eleifend massa vehicula et. Cras rhoncus nulla vitae dapibus fermentum. Nunc hendrerit erat orci, id sagittis lorem vulputate quis. Fusce eget lobortis elit. Suspendisse sit amet lobortis augue. Nunc vitae orci et enim sollicitudin posuere. Mauris facilisis eros id est pellentesque accumsan. Nam tortor nisl, vulputate nec luctus nec, aliquam ut erat. Pellentesque nec enim sed mauris ornare interdum et vitae augue. Duis turpis ligula, ultricies vel commodo in, placerat tincidunt massa. Curabitur quis efficitur massa.</li></ol>',
//         created_at: "2023-07-31T15:12:49.000000Z",
//         id: 1,
//         image: "/storage/images/content/about/about_1.png",
//         tags: ["Home", "Forniture"],
//         title: "awdawd",
//         updated_at: "2023-07-31T15:41:36.000000Z",
//         views: 2,
//     },
//     {
//         author: "Jagres",
//         comments: 0,
//         content:
//             '<ol style="list-style-type: lower-alpha;"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur dapibus eros et elementum. Nullam pellentesque vulputate sem et feugiat. Aenean rutrum libero lectus, ac mattis quam suscipit quis. Etiam viverra tristique erat. Morbi nec quam dui. Phasellus vel lorem sit amet magna aliquam varius. Ut ultricies tristique ex, nec aliquam nisi porttitor auctor. Curabitur ullamcorper odio urna, sed semper orci ultricies at. Proin semper tellus fringilla, sagittis sapien vitae, accumsan odio. Pellentesque placerat est ultricies neque imperdiet cursus tristique at lorem. Aliquam finibus gravida urna, id eleifend massa vehicula et. Cras rhoncus nulla vitae dapibus fermentum. Nunc hendrerit erat orci, id sagittis lorem vulputate quis. Fusce eget lobortis elit. Suspendisse sit amet lobortis augue. Nunc vitae orci et enim sollicitudin posuere. Mauris facilisis eros id est pellentesque accumsan. Nam tortor nisl, vulputate nec luctus nec, aliquam ut erat. Pellentesque nec enim sed mauris ornare interdum et vitae augue. Duis turpis ligula, ultricies vel commodo in, placerat tincidunt massa. Curabitur quis efficitur massa.</li></ol>',
//         created_at: "2023-07-31T15:12:49.000000Z",
//         id: 1,
//         image: "/storage/images/content/about/about_1.png",
//         tags: ["Home", "Forniture"],
//         title: "awdawd",
//         updated_at: "2023-07-31T15:41:36.000000Z",
//         views: 2,
//     },
// ];

// const allDataBlog = [
//     {
//         author: "Futut",
//         comments: 0,
//         content:
//             '<ol style="list-style-type: lower-alpha;"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur dapibus eros et elementum. Nullam pellentesque vulputate sem et feugiat. Aenean rutrum libero lectus, ac mattis quam suscipit quis. Etiam viverra tristique erat. Morbi nec quam dui. Phasellus vel lorem sit amet magna aliquam varius. Ut ultricies tristique ex, nec aliquam nisi porttitor auctor. Curabitur ullamcorper odio urna, sed semper orci ultricies at. Proin semper tellus fringilla, sagittis sapien vitae, accumsan odio. Pellentesque placerat est ultricies neque imperdiet cursus tristique at lorem. Aliquam finibus gravida urna, id eleifend massa vehicula et. Cras rhoncus nulla vitae dapibus fermentum. Nunc hendrerit erat orci, id sagittis lorem vulputate quis. Fusce eget lobortis elit. Suspendisse sit amet lobortis augue. Nunc vitae orci et enim sollicitudin posuere. Mauris facilisis eros id est pellentesque accumsan. Nam tortor nisl, vulputate nec luctus nec, aliquam ut erat. Pellentesque nec enim sed mauris ornare interdum et vitae augue. Duis turpis ligula, ultricies vel commodo in, placerat tincidunt massa. Curabitur quis efficitur massa.</li></ol>',
//         created_at: "2023-07-31T15:12:49.000000Z",
//         id: 1,
//         image: "/storage/images/content/about/about_1.png",
//         tags: ["Home", "Forniture"],
//         title: "awdawd",
//         updated_at: "2023-07-31T15:41:36.000000Z",
//         views: 2,
//     },
//     {
//         author: "Futut",
//         comments: 0,
//         content:
//             '<ol style="list-style-type: lower-alpha;"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur dapibus eros et elementum. Nullam pellentesque vulputate sem et feugiat. Aenean rutrum libero lectus, ac mattis quam suscipit quis. Etiam viverra tristique erat. Morbi nec quam dui. Phasellus vel lorem sit amet magna aliquam varius. Ut ultricies tristique ex, nec aliquam nisi porttitor auctor. Curabitur ullamcorper odio urna, sed semper orci ultricies at. Proin semper tellus fringilla, sagittis sapien vitae, accumsan odio. Pellentesque placerat est ultricies neque imperdiet cursus tristique at lorem. Aliquam finibus gravida urna, id eleifend massa vehicula et. Cras rhoncus nulla vitae dapibus fermentum. Nunc hendrerit erat orci, id sagittis lorem vulputate quis. Fusce eget lobortis elit. Suspendisse sit amet lobortis augue. Nunc vitae orci et enim sollicitudin posuere. Mauris facilisis eros id est pellentesque accumsan. Nam tortor nisl, vulputate nec luctus nec, aliquam ut erat. Pellentesque nec enim sed mauris ornare interdum et vitae augue. Duis turpis ligula, ultricies vel commodo in, placerat tincidunt massa. Curabitur quis efficitur massa.</li></ol>',
//         created_at: "2023-07-31T15:12:49.000000Z",
//         id: 1,
//         image: "/storage/images/content/about/about_1.png",
//         tags: ["Home", "Forniture"],
//         title: "awdawd",
//         updated_at: "2023-07-31T15:41:36.000000Z",
//         views: 2,
//     },
//     {
//         author: "Futut",
//         comments: 0,
//         content:
//             '<ol style="list-style-type: lower-alpha;"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur dapibus eros et elementum. Nullam pellentesque vulputate sem et feugiat. Aenean rutrum libero lectus, ac mattis quam suscipit quis. Etiam viverra tristique erat. Morbi nec quam dui. Phasellus vel lorem sit amet magna aliquam varius. Ut ultricies tristique ex, nec aliquam nisi porttitor auctor. Curabitur ullamcorper odio urna, sed semper orci ultricies at. Proin semper tellus fringilla, sagittis sapien vitae, accumsan odio. Pellentesque placerat est ultricies neque imperdiet cursus tristique at lorem. Aliquam finibus gravida urna, id eleifend massa vehicula et. Cras rhoncus nulla vitae dapibus fermentum. Nunc hendrerit erat orci, id sagittis lorem vulputate quis. Fusce eget lobortis elit. Suspendisse sit amet lobortis augue. Nunc vitae orci et enim sollicitudin posuere. Mauris facilisis eros id est pellentesque accumsan. Nam tortor nisl, vulputate nec luctus nec, aliquam ut erat. Pellentesque nec enim sed mauris ornare interdum et vitae augue. Duis turpis ligula, ultricies vel commodo in, placerat tincidunt massa. Curabitur quis efficitur massa.</li></ol>',
//         created_at: "2023-07-31T15:12:49.000000Z",
//         id: 1,
//         image: "/storage/images/content/about/about_1.png",
//         tags: ["Home", "Forniture"],
//         title: "awdawd",
//         updated_at: "2023-07-31T15:41:36.000000Z",
//         views: 2,
//     },
// ];
// export default function Blog() {
//   return (
//     <GuestLayout title="Blog">

//     </GuestLayout>
//   )
// }
