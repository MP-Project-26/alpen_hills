import React, { useState } from "react";
import moment from "moment/moment";
import { router } from "@inertiajs/react";
import ModalTambahCategoryPost from "./ModalTambahCategoryPost";
import ModalEditCategoryPost from "./ModalEditCategoryPost";



const TableCategoryPost = ({ categoryPost }) => {

    const [editcategoryPost, setEditCategoryPost] = useState([]);

    const editCategoryPost = (e, item) => {
        e.preventDefault();
        window.modal_edit_category_post.showModal();
        setEditCategoryPost(item);
    }

    const deleteCategoryPostHandle = (e, id) => {
        e.preventDefault();
        if (confirm("Apakah anda yakin ingin menghapus data ini ?")) {
            router.delete(`/admin/categoryPost/delete/${id}`, {
                onSuccess: () => {

                },
            });
        }
    };

    return (
        <div className="overflow-x-auto bg-white shadow">
            <div className="w-full md:pr-5  pl-3 py-4 md:relative sticky z-10 left-0 flex flex-col md:flex-row gap-3">
                <div className="w-full flex">
                    <button
                        onClick={() => window.modal_tambah_category_post.showModal()}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2  px-4 rounded w-auto"
                    >
                        Tambah Category Postingan <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryPost.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item?.name}</td>
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
                            <td className="flex gap-3 items-center">
                                <button
                                    onClick={(e) => editCategoryPost(e, item)}
                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button
                                onClick={(e) =>
                                        deleteCategoryPostHandle(e, item.id)
                                    }
                                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

            <ModalTambahCategoryPost />

            {editcategoryPost && (
                <ModalEditCategoryPost categoryPost={editcategoryPost} />
            )}
        </div>
    );
};

export default TableCategoryPost;
