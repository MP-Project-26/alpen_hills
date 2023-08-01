import React, { useEffect, useRef } from "react";
import InputError from "../Form/InputError";
import { router, useForm } from "@inertiajs/react";
import JoditEditor from "jodit-react";
import slugify from "slugify";

const ModalEditPost = ({ ...props }) => {
    const editor = useRef(null);

    const { data, setData, post, errors, reset } = useForm({
        category_post_id: "",
        title: "",
        slug: "",
        image: null,
        body: "",
    });

    useEffect(() => {
        // Pastikan editGallery berubah sebelum melakukan perubahan pada data
        if (props.editPost) {
            setData({
                category_post_id: props.editPost.category_post_id || "",
                title: props.editPost.title || "",
                slug: props.editPost.slug || "",
                image: null,
                body: props.editPost.body || "",
            });
        }
    }, [props.editPost]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "title") {
            const slug = slugify(value, { lower: true, strict: true });
            setData((prevData) => ({ ...prevData, [name]: value, slug }));
        } else {
            setData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        router.post(`/admin/post/update/${props.editPost.slug}`, data, {
            preserveScroll: true,
            onSuccess: () => {
                window.modal_edit_post.close();
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };

    return (
        <div>
            <dialog
                id="modal_edit_post"
                className="modal bg-black backdrop-blur-sm bg-opacity-40 md:p-0 p-3"
            >
                <div
                    method="dialog"
                    className="modal-box max-w-5xl md:w-full rounded-md"
                >
                    <button
                        onClick={() => window.modal_edit_post.close()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>
                    <div className="flex flex-col md:p-2 py-2 w-full">
                        <h1 className="text-2xl font-semibold mb-3">
                            Edit Postingan
                        </h1>

                        <form
                            className="flex flex-col gap-3"
                            onSubmit={submitHandler}
                        >
                            <div className="flex flex-col gap-1">
                                <label htmlFor="title">Judul Post :</label>
                                <input
                                    className="rounded-md"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={data.title}
                                    onChange={handleChange}
                                />
                                <InputError
                                    message={errors.title}
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="slug">Slug :</label>
                                <input
                                disabled
                                    className="rounded-md"
                                    type="text"
                                    id="slug"
                                    name="slug"
                                    value={data.slug}
                                    onChange={handleChange}
                                />
                                <InputError
                                    message={errors.slug}
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="category_post_id">
                                    Kategory Post :
                                </label>
                                <select
                                    className="rounded-md"
                                    name="category_post_id"
                                    id="category_post_id"
                                    value={data.category_post_id}
                                    onChange={handleChange}
                                >
                                    <option disabled value="">
                                        Kategori Postingan
                                    </option>
                                    {props?.categoryPost.map((item, index) => (
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

                            <div className="flex flex-col gap-1">
                                {props?.editPost?.image && (
                                    <div>
                                        <img
                                            className="w-[50%]"
                                            src={`/storage/images/blog/${props?.editPost?.image}`}
                                            alt={props?.editPost?.name}
                                        />

                                        <p className="text-sm text-gray-500">
                                            Gambar Lama
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            {props?.editPost?.image}
                                        </p>
                                    </div>
                                )}
                                <label htmlFor="image">Update Gambar :</label>
                                <input
                                    name="image"
                                    id="image"
                                    className="file-input file-input-bordered file-input-accent"
                                    type="file"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                />
                                <InputError
                                    message={errors.image}
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <label htmlFor="body">Body :</label>
                                <JoditEditor
                                    id="body"
                                    ref={editor}
                                    value={data.body}
                                    tabIndex={1} // tabIndex of textarea
                                    onBlur={(newContent) =>
                                        setData("body", newContent)
                                    } // preferred to use only this option to update the content for performance reasons
                                    onChange={(newContent) => {
                                        setData("body", newContent);
                                    }}
                                />

                                <InputError
                                    message={errors.body}
                                    className="mt-1"
                                />
                            </div>

                            <button className="btn bg-blue-500 text-white hover:bg-blue-300">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ModalEditPost;
