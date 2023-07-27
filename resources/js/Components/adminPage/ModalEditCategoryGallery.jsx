
import React, { useEffect } from "react";
import InputError from "../Form/InputError";
import { router, useForm } from "@inertiajs/react";


const ModalEditCategoryGallery = ({ ...props }) => {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
    });

    useEffect(() => {
        setData((prevData) => ({
          ...prevData,
          name: props?.editCategory?.name || "",
        }));
      }, [props.editCategory]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));

    };

    const submitHandler = (e) => {
        e.preventDefault();
        router.post(`/admin/category/update/${props.editCategory.slug}`, data, {
            preserveScroll: true,
            onSuccess: () => {
                window.modal_edit_category_gallery.close();
            },
            onError: (errors) => {
                console.log(errors);
            }
        });
    };

    return (
        <div>
            <dialog
                id="modal_edit_category_gallery"
                className="modal bg-black backdrop-blur-sm bg-opacity-40 md:p-0 p-3"
            >
                <div
                    method="dialog"
                    className="modal-box max-w-5xl lg:w-[30%] md:w-[60%] rounded-md"
                >
                    <button
                        onClick={() => window.modal_edit_category_gallery.close()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>
                    <div className="flex flex-col md:p-2 py-2 w-full">
                        <h1 className="text-2xl font-semibold mb-3">
                            Edit Data gallery
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
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                />
                                <InputError
                                    message={errors.name}
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

export default ModalEditCategoryGallery;
