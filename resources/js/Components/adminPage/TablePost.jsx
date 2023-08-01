import { Link, router } from "@inertiajs/react";
import moment from "moment";
import React, { useState } from "react";
import ModalDetailPost from "./ModalDetailPost";
import ModalEditPost from "./ModalEditPost";

const TablePost = ({ meta, posts, categoryPost, flash }) => {
    const currentPage = meta.current_page;
    const perPage = meta.per_page;
    const [search, setSearch] = useState("");

    const [detailPost, setDetailPost] = useState([]);
    const [editPost, setEditPost] = useState([]);

    const searchHandle = (e) => {
        e.preventDefault();
        router.get("/admin/post/", { search });
    };

    const detailPostHandle = (e, item) => {
        e.preventDefault();
        setDetailPost(item);
        window.modal_deatail_post.showModal();
    };

    const editPostHandle = (e, item) => {
        e.preventDefault();
        setEditPost(item);
        window.modal_edit_post.showModal();
    };

    const deletePostHandle = (e, item) => {
        e.preventDefault();
       if (confirm("Apakah anda ingin menghapus postingan ini?")) {
            router.delete(`/admin/post/delete/${item.id}`, {
                preserveScroll: true,
                onSuccess: () => {
                    flash("success", "Postingan berhasil di hapus!");
                },
                onError: (errors) => {
                    console.log(errors);
                },
            });
        }
    };


    return (
        <div className="overflow-x-auto bg-white shadow">
            <div className="flex flex-col md:flex-row gap-4 md:gap-1 md:items-center w-full lg:px-5 lg:items-center px-3 py-4 lg:relative sticky z-10 left-0 ">
                <form onSubmit={searchHandle} className=" md:w-[50%]">
                    <div className="flex input-group">
                        <input
                            className=" w-full input-bordered rounded-md"
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            name="search"
                            placeholder="search.."
                        />
                        <button
                            type="submit"
                            className="p-2 bg-red-600 hover:bg-red-300"
                        >
                            <i className="fas fa-search text-xl text-white"></i>
                        </button>
                    </div>
                </form>

                <div className="dropdown dropdown-bottomp dropdown-end w-auto mb-2">
                    <label
                        tabIndex={0}
                        className="m-1 bg-red-600 hover:bg-red-300 cursor-pointer p-3 rounded-md text-white"
                    >
                        Sort By Category
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-auto"
                    >
                        <li>
                            <Link href="/admin/post">All</Link>
                        </li>
                        {categoryPost?.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={`/admin/post/category/${item.slug}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="     ">
                    <Link
                        href="/admin/post/create"
                        className="bg-green-500  hover:bg-green-700 text-white font-bold py-2  px-4 rounded"
                    >
                        Unggah Postingan <i className="fas fa-plus"></i>
                    </Link>
                </div>
            </div>
            <table className="table ">
                {/* head */}
                <thead>
                    <tr className="">
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Image</th>
                        <th>Excerpt</th>
                        <th>Category</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts?.map((item, index) => (
                        <tr className="" key={index}>
                            <td>{(currentPage - 1) * perPage + index + 1}</td>
                            <td>{item?.title}</td>
                            <td>{item?.user_post?.name}</td>
                            <td>
                                <img
                                    className="w-32"
                                    src={`/storage/images/blog/${item?.image}`}
                                    alt={item?.title}
                                />
                            </td>
                            <td>{item?.excerpt}</td>
                            <td>{item?.category_post?.name}</td>
                            <td>
                                {moment(item?.created_at).format(
                                    "DD MMMM YYYY h:mm a"
                                )}
                            </td>
                            <td>
                                {moment(item?.updated_at).format(
                                    "DD MMMM YYYY h:mm a"
                                )}
                            </td>
                            <td className="flex h-full flex-col md:flex-row gap-3 justify-center items-center">
                            
                                <button
                                    onClick={(e) => {
                                        detailPostHandle(e, item);
                                    }}
                                    className="bg-slate-500 md:btn-md btn-sm hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    <i className="fas fa-eye"></i>
                                </button>

                                <button
                                    onClick={(e) => {
                                        editPostHandle(e, item);
                                    }}
                                    className="bg-blue-500 md:btn-md btn-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    <i className="fas fa-edit"></i>
                                </button>

                                <button
                                    onClick={(e) => {
                                        deletePostHandle(e, item);
                                    }}
                                    className="bg-red-500 md:btn-md btn-sm hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {detailPost && (
                <ModalDetailPost flash={flash} detailPost={detailPost} />
            )}
            {editPost && (
                <ModalEditPost
                    categoryPost={categoryPost}
                    flash={flash}
                    editPost={editPost}
                />
            )}
        </div>
    );
};

export default TablePost;
