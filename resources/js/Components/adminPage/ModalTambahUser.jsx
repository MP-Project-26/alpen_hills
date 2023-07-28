import { useForm } from "@inertiajs/react";
import React from "react";
import InputError from "../Form/InputError";

const ModalTambahUser = ( ) => {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        post("/admin/user/add", {
            onSuccess: () => {
                window.modal_tambah_user.close();
                reset();
            },
            onError: (errors) => {
                console.log(errors);
            }
        });

    };

    return (
        <div>
            <dialog
                id="modal_tambah_user"
                className="modal bg-black backdrop-blur-sm bg-opacity-40 md:p-0 p-3"
            >
                <div
                    method="dialog"
                    className="modal-box w-full max-w-5xl lg:w-[30%] md:w-[60%] rounded-md"
                >
                    <button
                        onClick={() => window.modal_tambah_user.close()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>
                    <div className="flex flex-col md:p-2 py-2 w-full">
                        <h1 className="text-2xl font-semibold mb-3">
                            Tambah Admin
                        </h1>
                        <form
                            className="flex flex-col gap-3"
                            onSubmit={submitHandler}
                        >
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name">Nama :</label>
                                <input
                                    className="rounded-md"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                />
                                 <InputError message={errors.name} className="mt-1" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email">Email :</label>
                                <input
                                    className="rounded-md"
                                    type="email"
                                    placeholder="ex : admin@gmail.com"
                                    id="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                />
                                    <InputError message={errors.email} className="mt-1" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="password">Password :</label>
                                <input
                                    className="rounded-md"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={data.password}
                                    onChange={handleChange}
                                />
                                    <InputError message={errors.password} className="mt-1" />
                            </div>

                            <button type="submit" className="btn bg-blue-500 text-white hover:bg-blue-300">
                                Simpan
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ModalTambahUser;
