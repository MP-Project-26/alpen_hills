import React, { useState } from "react";
import moment from "moment/moment";
import ModalTambahCategoryGallery from "./ModalTambahCategoryGallery";
import ModalEditCategoryGallery from "./ModalEditCategoryGallery";



const TableCategoryGallery = ({ categoryGallery }) => {

    const [editCategory, setEditCategory] = useState([]);

    const editCategoryGallery = (e, item) => {
        e.preventDefault();
        window.modal_edit_category_gallery.showModal();
        setEditCategory(item);
    }
    return (
        <div className="overflow-x-auto bg-white shadow">
            <div className="w-full md:pr-5  pl-3 py-4 md:relative sticky z-10 left-0 flex flex-col md:flex-row gap-3">
                <div className="w-full flex">
                    <button
                        onClick={() => window.modal_tambah_category_gallery.showModal()}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2  px-4 rounded w-auto"
                    >
                        Tambah Category <i className="fas fa-plus"></i>
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
                    {categoryGallery.map((item, index) => (
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
                                onClick={(e) => editCategoryGallery(e, item)}
                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalTambahCategoryGallery />
            <ModalEditCategoryGallery editCategory={editCategory} />
        </div>
    );
};

export default TableCategoryGallery;
