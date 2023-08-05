import FlashMessage from "@/Components/adminPage/FlashMessage";
import ModalEditFasilitas from "@/Components/adminPage/ModalEditFasilitas";
import ModalEditSpesifikasi from "@/Components/adminPage/ModalEditSpesifikasi";
import ModalTambahFasilitas from "@/Components/adminPage/ModalTambahFasilitas";
import ModalTambahSpesifikasi from "@/Components/adminPage/ModalTambahSpesifikasi";
import AdminLayout from "@/Layouts/AdminLayout";
import { router } from "@inertiajs/react";
import React, { useState } from "react";

const SpesifikasiProperty = ({ ...props }) => {
    const [spesifikasi, setSpesifikasi] = useState([]);
    const [fasilitas, setFasilitas] = useState([]);
    const [typeProperty, setTypeProperty] = useState([]);

    const handleTambahSpesifikasi = (e, item) => {
        e.preventDefault();
        setTypeProperty(item);
        window.modal_tambah_spesifikasi.showModal();
    };

    const handleHapusSpesifikasi = (e, item) => {
        e.preventDefault();
        if (confirm("Apakah anda yakin ingin menghapus spesifikasi ini?")) {
            router.delete(`/spesifikasi/${item.id}`, {
                preserveScroll: true,
                onSuccess: () => {},
            });
        }
    };

    const handleTambahFasilitas = (e, item) => {
        e.preventDefault();
        setTypeProperty(item);
        window.modal_tambah_fasilitas.showModal();
    };

    const handleHapusFasilitas = (e, item) => {
        e.preventDefault();
        if (confirm("Apakah anda yakin ingin menghapus fasilitas ini?")) {
            router.delete(`/fasilitas/${item}`, {
                preserveScroll: true,
                onSuccess: () => {
                    //scroll to top
                    window.scrollTo(0, 0);
                },
            });
        }
    };

    const handleEditSpesifikasi = (e, item) => {
        e.preventDefault();
        setSpesifikasi(item);
        window.modal_edit_spesifikasi.showModal();
    };

    const handleEditFasilitas = (e, item) => {
        e.preventDefault();
        setFasilitas(item);
        window.modal_edit_fasilitas.showModal();
    };

    return (
        <AdminLayout title={props?.title} auth={props?.auth}>
            <div className="h-auto w-auto bg-white shadow-lg flex flex-col gap-7 py-3 px-6 mb-20">
                {props?.flash?.message && <FlashMessage flash={props.flash} />}
                <div>
                    <h1 className="text-xl font-semibold">
                        {props?.tipeProperty?.name}
                    </h1>
                    <p>
                        Price :{" "}
                        {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        }).format(props?.tipeProperty.price)}
                    </p>
                </div>

                <div className="flex flex-col">
                    <div className="w-full h-auto flex items-center gap-3">
                        <h1 className="text-2xl font-semibold">Spesifikasi</h1>
                        <button
                            onClick={(e) =>
                                handleTambahSpesifikasi(e, props?.tipeProperty)
                            }
                            className="btn btn-success hover:bg-green-200"
                        >
                            Tambah Spesifikasi
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Sepesifikasi</th>
                                    <th>Nilai Spesifikasi</th>
                                    <th>Icon</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props?.tipeProperty?.spefisikasi_property?.map(
                                    (item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item?.attribute}</td>
                                            <td>{item?.value}</td>
                                            <td>
                                                <i
                                                    className={`text-3xl ${item.icon}`}
                                                ></i>
                                            </td>
                                            <td className="flex gap-3 items-center">
                                                <button
                                                    onClick={(e) =>
                                                        handleEditSpesifikasi(
                                                            e,
                                                            item
                                                        )
                                                    }
                                                    className="btn btn-warning hover:bg-yellow-200"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={(e) =>
                                                        handleHapusSpesifikasi(
                                                            e,
                                                            item
                                                        )
                                                    }
                                                    className="btn btn-error hover:bg-red-100"
                                                >
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="w-full h-auto flex items-center gap-3">
                        <h1 className="text-2xl font-semibold">Fasilitas</h1>
                        <button
                            onClick={(e) =>
                                handleTambahFasilitas(e, props?.tipeProperty)
                            }
                            className="btn btn-success hover:bg-green-200"
                        >
                            Tambah Fasilitas
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Fasilitas</th>
                                    <th>Nilai Fasilitas</th>
                                    <th>Icon</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props?.tipeProperty?.fasilitas_property?.map(
                                    (item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item?.attribute}</td>
                                            <td>{item?.value}</td>
                                            <td>{item?.icon}</td>
                                            <td className="flex gap-3 items-center">
                                                <button
                                                    onClick={(e) =>
                                                        handleEditFasilitas(
                                                            e,
                                                            item
                                                        )
                                                    }
                                                className="btn btn-warning hover:bg-yellow-200">
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={(e) =>
                                                        handleHapusFasilitas(
                                                            e,
                                                            item.id
                                                        )
                                                    }
                                                    className="btn btn-error hover:bg-red-100"
                                                >
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <ModalTambahSpesifikasi item={typeProperty} />
                <ModalTambahFasilitas item={typeProperty} />
                {spesifikasi && <ModalEditSpesifikasi item={spesifikasi} />}
                {fasilitas && <ModalEditFasilitas item={fasilitas} />}
            </div>
        </AdminLayout>
    );
};

export default SpesifikasiProperty;
