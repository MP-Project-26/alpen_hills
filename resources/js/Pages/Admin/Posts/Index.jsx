import FlashMessage from "@/Components/adminPage/FlashMessage";
import Paginate from "@/Components/adminPage/Paginate";
import TableCategoryPost from "@/Components/adminPage/TableCategoryPost";
import TablePost from "@/Components/adminPage/TablePost";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState } from "react";

const Posts = ({ ...props }) => {
    //console.log(props);

    const [postActive, setPostActive] = useState(true);
    const [categoryPostActive, setCategoryPostActive] = useState(false);

    const togglePost = () => {
        setPostActive(!postActive);
        setCategoryPostActive(false);
    };

    const toggleCategoryPost = () => {
        setCategoryPostActive(!categoryPostActive);
        setPostActive(false);
    };

    return (
        <AdminLayout auth={props?.auth} title={props?.title}>
            <div>
                <header className="h-auto px-4 py-2 mb-2 w-full border bg-white shadow-sm">
                    <ul className="flex md:gap-10 md:justify-start items-center justify-around font-medium">
                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                postActive ? "border-b-2 border-slate-400" : ""
                            }`}
                            onClick={togglePost}
                        >
                            Blog
                        </li>
                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                categoryPostActive
                                    ? "border-b-2 border-slate-400"
                                    : ""
                            }`}
                            onClick={toggleCategoryPost}
                        >
                            Category Blog
                        </li>
                    </ul>
                </header>

                <FlashMessage flash={props.flash}/>

                <div className="pb-28">
                    {postActive && props.posts && (
                        <TablePost
                            meta={props.posts.meta}
                            posts={props.posts.data}
                            categoryPost={props.categoryPost}
                            flash={props.flash}
                        />
                    )}

                    {categoryPostActive && props.categoryPost && (
                        <TableCategoryPost categoryPost={props.categoryPost}/>
                    )}
                    <div className="w-full flex justify-center p-3">
                        <Paginate meta={props?.posts?.meta} />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Posts;
