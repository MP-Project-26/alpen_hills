import { router, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

import InputError from "../Form/InputError";

const ModalTambahSpesifikasi = ({ item }) => {

    const { data, setData, post, errors, reset } = useForm({
        tipe_property_id: "",
        icon: "",
        attribute: "",
        value: "",
    });

   useEffect(() => {

        if (item) {
            setData({
                tipe_property_id: item.id || "",
                icon: "",
                attribute: "",
                value: "",
            });
        }
    }, [item]);



    const submitHandler = (e) => {
        e.preventDefault();
        post("/spesifikasi", {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                window.modal_tambah_spesifikasi.close();
            },
        });
    };

    return (
        <div>
            <dialog
                id="modal_tambah_spesifikasi"
                className="modal bg-black backdrop-blur-sm bg-opacity-40 md:p-0 p-3"
            >
                <div
                    method="dialog"
                    className="modal-box w-full max-w-5xl lg:w-[30%] md:w-[60%] rounded-md"
                >
                    <button
                        onClick={() => window.modal_tambah_spesifikasi.close()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>
                    <div className="flex flex-col md:p-2 py-2 w-full">
                        <h1 className="text-2xl font-semibold mb-3">
                            Tambah Spesifikasi Property
                        </h1>
                        <form
                            className="flex flex-col gap-3"
                            onSubmit={submitHandler}
                        >


                            <div className="flex flex-col gap-1">
                                <label htmlFor="icon"> Icon :</label>
                                <input
                                    placeholder="ex : fas fa-bed (Optional)"
                                    className="rounded-md"
                                    type="text"
                                    id="icon"
                                    name="icon"
                                    value={data.icon}
                                    onChange={(e) =>
                                        setData("icon", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.icon}
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="attribute">
                                    {" "}
                                    Spesifikasi :
                                </label>
                                <input
                                    placeholder="ex : Luas Lantai"
                                    className="rounded-md"
                                    type="text"
                                    id="attribute"
                                    name="attribute"
                                    value={data.attribute}
                                    onChange={(e) =>
                                        setData("attribute", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.attribute}
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="value">
                                    Nilai Spesifikasi :
                                </label>
                                <input
                                    placeholder="ex : 30 m"
                                    className="rounded-md"
                                    type="text"
                                    id="value"
                                    name="value"
                                    value={data.value}
                                    onChange={(e) =>
                                        setData("value", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.value}
                                    className="mt-1"
                                />
                            </div>

                            <button className="btn bg-blue-500 text-white hover:bg-blue-300">
                                Simpan
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ModalTambahSpesifikasi;
