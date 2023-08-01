import AdminLayout from "@/Layouts/AdminLayout";
import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { useForm } from "@inertiajs/react";
import slugify from "slugify";
import InputError from "@/Components/Form/InputError";
import FlashMessage from "@/Components/adminPage/FlashMessage";

const TambahPost = ({ ...props }) => {
    const editor = useRef(null);
    const { data, setData, post, errors, reset } = useForm({
        user_id: props?.auth?.user?.id,
        category_post_id: "",
        title: "",
        slug: "",
        image: "",
        body: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "title") {
            // Membuat slug dari input nama
            const slug = slugify(value, { lower: true, strict: true });
            setData((prevData) => ({ ...prevData, [name]: value, slug }));
        } else {
            setData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        post("/admin/post/add", {
            onSuccess: () => {
                reset();
                setContent("");
            },
        });
    };

    return (
        <AdminLayout auth={props?.auth} title={props?.title}>
            <div className="bg-white p-3 shadow-md mb-20">
                <FlashMessage flash={props?.flash} />

                <form
                    onSubmit={submitHandler}
                    className="flex flex-col gap-3 mb-3 "
                >
                    <div className="flex flex-col gap-1 w-full md:w-[60%]">
                        <label htmlFor="title">Judul Blog :</label>
                        <input
                            className="rounded-md "
                            type="text"
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                        />
                        <InputError message={errors.title} className="mt-1" />
                    </div>

                    <div className="flex flex-col gap-1 w-full md:w-[60%]">
                        <label htmlFor="slug">Slug :</label>
                        <input
                            disabled
                            className="rounded-md "
                            type="text"
                            id="slug"
                            name="slug"
                            value={data.slug}
                            onChange={handleChange}
                        />
                        <InputError message={errors.slug} className="mt-1" />
                    </div>

                    <div className="flex flex-col gap-1 w-full md:w-[60%]">
                        <label htmlFor="category">Kategori :</label>
                        <select
                            className="rounded-md"
                            name="category_post_id"
                            id="category"
                            value={data.category_post_id}
                            onChange={handleChange}
                        >
                            <option disabled value="">
                                Pilih Kategori
                            </option>
                            {props?.categoryPost?.map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        <InputError
                            message={errors.category_post_id}
                            className="mt-1"
                        />
                    </div>

                    <div className="flex flex-col gap-1 w-full md:w-[60%]">
                        <label htmlFor="name">File Gambar :</label>
                        <input
                            name="image"
                            id="image"
                            className="file-input file-input-bordered file-input-accent"
                            type="file"
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                        />
                        <InputError message={errors.image} className="mt-1" />
                    </div>

                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="name">Body :</label>
                        <JoditEditor
                            ref={editor}
                            value={data.body}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={(newContent) => setData("body", newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={(newContent) => {
                                setData("body", newContent);
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn bg-blue-500 text-white hover:bg-blue-300 md:w-[30%]"
                    >
                        Unggah
                    </button>
                </form>

                <div></div>
            </div>
        </AdminLayout>
    );
};

export default TambahPost;
