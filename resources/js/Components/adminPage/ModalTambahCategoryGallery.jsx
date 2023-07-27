import { useForm } from "@inertiajs/react";
import React from "react";
import slugify from "slugify";
import InputError from "../Form/InputError";

const ModalTambahCategoryGallery = ( ) => {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        slug: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            const slug = slugify(value, { lower: true, strict: true });
            setData((prevData) => ({ ...prevData, [name]: value, slug }));
        } else {
            setData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        post("/admin/category/add", {
            onSuccess: () => {
                window.modal_tambah_category_gallery.close();
                reset();
            },
        });

    };

    return (
        <div>
            <dialog
                id="modal_tambah_category_gallery"
                className="modal bg-black backdrop-blur-sm bg-opacity-40 md:p-0 p-3"
            >
                <div
                    method="dialog"
                    className="modal-box w-full max-w-5xl lg:w-[30%] md:w-[60%] rounded-md"
                >
                    <button
                        onClick={() => window.modal_tambah_category_gallery.close()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>
                    <div className="flex flex-col md:p-2 py-2 w-full">
                        <h1 className="text-2xl font-semibold mb-3">
                            Tambah Category Gallery
                        </h1>
                        <form
                            className="flex flex-col gap-3"
                            onSubmit={submitHandler}
                        >
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name">Nama Category :</label>
                                <input
                                    className="rounded-md"
                                    type="text"
                                    placeholder="ex : Tampak Samping"
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                />
                                 <InputError message={errors.name} className="mt-1" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="slug">Slug :</label>
                                <input
                                    className="rounded-md"
                                    type="text"
                                    disabled
                                    id="slug"
                                    name="slug"
                                    value={data.slug}
                                    onChange={handleChange}
                                />
                                 <InputError message={errors.slug} className="mt-1" />
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

export default ModalTambahCategoryGallery;
