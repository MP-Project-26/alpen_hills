import React, { useState } from "react";
import moment from "moment/moment";
import { Link, router } from "@inertiajs/react";
import ModalTambahTypeProperty from "./ModalTambahTypeProperty";
import ModalEditTypeProperty from "./ModalEditTypeProperty";

const TablePropertyType = ({ propertyType }) => {


    const [editTypeProperty, setEditTypeProperty] = useState(null);

    const editTypePropertyHandle = (e, item) => {
        e.preventDefault();
        setEditTypeProperty(item);
        window.modal_edit_type_property.showModal();
    };

    const deleteTypePropertyHandle = (e, id) => {
        e.preventDefault();
        if (confirm("Are you sure you want to delete this item?")) {
            router.delete(`/admin/typeProperty/delete/${id}`, {
                preserveScroll: true,
                onSuccess: () => {},
                onError: (errors) => {
                    console.log(errors);
                },
            });
        }
    };

    return (
        <div className="overflow-x-auto bg-white shadow">
            <div className="w-full md:pr-5  pl-3 py-4 md:relative sticky z-10 left-0 flex flex-col md:flex-row gap-3">
                <div className="w-full flex">
                    <button
                        onClick={() =>
                            window.modal_tambah_type_property.showModal()
                        }
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
                        <th>Price</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {propertyType.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item?.name}</td>
                            <td>
                                {new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(item?.price)}
                            </td>
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
                                <Link
                                    href={`/admin/typeProperty/${item.id}`}
                                    className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
                                >
                                    Spesifikasi & fasilitas
                                </Link>

                                <button
                                    onClick={(e) =>
                                        editTypePropertyHandle(e, item)
                                    }
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button
                                    onClick={(e) =>
                                        deleteTypePropertyHandle(e, item.id)
                                    }
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalTambahTypeProperty />
            <ModalEditTypeProperty editTypeProperty={editTypeProperty} />
        </div>
    );
};

export default TablePropertyType;
