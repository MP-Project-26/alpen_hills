import { useForm } from "@inertiajs/react";
import React from "react";
import slugify from "slugify";
import InputError from "../Form/InputError";

const ModalTambahGallery = ({ categoryGallery, propertyType }) => {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        slug: "",
        category_gallery_id: "",
        tipe_property_id: "",
        image: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            // Membuat slug dari input nama
            const slug = slugify(value, { lower: true, strict: true });
            setData((prevData) => ({ ...prevData, [name]: value, slug }));
        } else {
            setData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        post("/admin/gallery/add", {
            onSuccess: () => {
                window.modal_tambah_gallery.close();
                reset();
            },
        });

    }; 

    return (
        <div>
            <dialog
                id="modal_tambah_gallery"
                className="modal bg-black backdrop-blur-sm bg-opacity-40 md:p-0 p-3"
            >
                <div
                    method="dialog"
                    className="modal-box w-full max-w-5xl lg:w-[30%] md:w-[60%] rounded-md"
                >
                    <button
                        onClick={() => window.modal_tambah_gallery.close()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>
                    <div className="flex flex-col md:p-2 py-2 w-full">
                        <h1 className="text-2xl font-semibold mb-3">
                            Tambah gallery
                        </h1>
                        <form
                            className="flex flex-col gap-3"
                            onSubmit={submitHandler}
                        >
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name">Nama Gambar :</label>
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
                                <label htmlFor="slug">Slug :</label>
                                <input
                                    className="rounded-md"
                                    disabled
                                    type="text"
                                    id="slug"
                                    name="slug"
                                    value={data.slug}
                                    onChange={handleChange}
                                />
                                <InputError message={errors.slug} className="mt-1" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="tipe_property_id">Tipe Property :</label>
                                <select
                                    className="rounded-md"
                                    name="tipe_property_id"
                                    id="tipe_property_id"
                                    value={data.tipe_property_id}
                                    onChange={handleChange}
                                >
                                    <option disabled value="">
                                        Pilih Tipe Property
                                    </option>
                                    {propertyType.map((item, index) => (
                                        <option
                                         key={index} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>

                                <InputError message={errors.tipe_property_id} className="mt-1" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="category">Kategori :</label>
                                <select
                                    className="rounded-md"
                                    name="category_gallery_id"
                                    id="category"
                                    value={data.category_gallery_id}
                                    onChange={handleChange}
                                >
                                    <option disabled value="">
                                        Pilih Kategori
                                    </option>
                                    {categoryGallery.map((item, index) => (
                                        <option
                                         key={index} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                                <InputError message={errors.category_gallery_id} className="mt-1" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="name">File Gambar :</label>
                                <input
                                    name="image"
                                    id="image"
                                    className="file-input file-input-bordered file-input-accent"
                                    type="file"
                                    onChange={e => setData('image', e.target.files[0])}
                                />
                                <InputError message={errors.image} className="mt-1" />
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

export default ModalTambahGallery;
