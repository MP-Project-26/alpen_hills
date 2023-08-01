import React, { useState } from "react";
import moment from "moment/moment";
import { router } from "@inertiajs/react";
import ModalDetailGallery from "./ModalDetailGallery";
import ModalEditGallery from "./ModalEditGallery";
import ModalTambahGallery from "./ModalTambahGallery";
import SortGallery from "./SortGallery";

const TableGallery = ({ gallery, categoryGallery, meta, propertyType, }) => {
    const currentPage = meta.current_page;
    const perPage = meta.per_page;

    const [detailGallery, setDetailGallery] = useState([]);
    const [editGallery, setEditGallery] = useState([]);

    const detailGalleryHandle = (e, item) => {
        e.preventDefault();
        setDetailGallery(item);
        window.modal_detail_gallery.showModal();
    };


    const editGalleryHandle = (e, item) => {
        e.preventDefault();
        setEditGallery(item);
        window.modal_edit_gallery.showModal();
    };

    const deleteGalleryHandle = (e, slug) => {
        e.preventDefault();
        if (confirm("Apakah anda yakin ingin menghapus data ini ?")) {
            router.delete(`/admin/gallery/delete/${slug}`, {
                onSuccess: () => {
                    window.location.reload();
                },
            });
        }
    };

    return (
        <div className="overflow-x-auto bg-white shadow">
            <div className="w-full md:pr-5  pl-3 py-4 md:relative sticky z-10 left-0 flex flex-wrap flex-col md:flex-row gap-3">
                <SortGallery
                    categoryGallery={categoryGallery}
                    propertyType={propertyType}
                />
                <div className="w-full flex ">
                    <button
                        onClick={() => window.modal_tambah_gallery.showModal()}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2  px-4 rounded"
                    >
                        Tambah Gallery <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="">
                        <th>No</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Tipe Property</th>
                        <th>Category</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {gallery.data?.map((item, index) => (
                        <tr className="" key={index}>
                            <td>{(currentPage - 1) * perPage + index + 1}</td>
                            <td>{item?.name}</td>
                            <td>
                                <img
                                    className="w-32"
                                    src={`/storage/images/gallery/${item?.image}`}
                                    alt={item?.name}
                                />
                            </td>
                            <td>{item?.tipe_property?.name}</td>
                            <td>{item?.category_gallery?.name}</td>
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
                            <td className="flex flex-col md:flex-row gap-2">
                                <button
                                    onClick={(e) =>
                                        detailGalleryHandle(e, item)
                                    }
                                    className="bg-slate-500 md:btn-md btn-sm hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    <i className="fas fa-eye"></i>
                                </button>

                                <button
                                    onClick={(e) => editGalleryHandle(e, item)}
                                    className="bg-blue-500 md:btn-md btn-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    <i className="fas fa-edit"></i>
                                </button>

                                <button
                                    onClick={(e) =>
                                        deleteGalleryHandle(e, item.slug)
                                    }
                                    className="bg-red-500 md:btn-md btn-sm hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalTambahGallery
                categoryGallery={categoryGallery}
                gallery={gallery}
                propertyType={propertyType}
            />
            {detailGallery ? (
                <ModalDetailGallery detailGallery={detailGallery} />
            ) : null}
            {editGallery ? (
                <ModalEditGallery
                    editGallery={editGallery}
                    categoryGallery={categoryGallery}
                    propertyType={propertyType}
                />
            ) : null}
        </div>
    );
};

export default TableGallery;
