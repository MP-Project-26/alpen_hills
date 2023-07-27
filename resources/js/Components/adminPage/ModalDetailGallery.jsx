import moment from "moment/moment";
import React from "react";

const ModalDetailGallery = ({ ...props }) => {
    const detailGallery = props.detailGallery;
    return (
        <div>
            <dialog
                id="modal_detail_gallery"
                className="modal bg-black backdrop-blur-sm bg-opacity-40"
            >
                {detailGallery ? (
                    <div
                        method="dialog"
                        className="modal-box w-11/12 max-w-5xl rounded-md"
                    >
                        <button
                            onClick={() => window.modal_detail_gallery.close()}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>
                        <div className="flex flex-col md:flex-row gap-3 md:p-2 py-2 w-full">
                            <picture className="w-full md:w-[60%]">
                                {detailGallery.image ? (
                                    <img
                                        src={`/storage/images/gallery/${detailGallery?.image}`}
                                        alt=""
                                    />
                                ) : null}
                            </picture>
                            <div className="flex flex-col ">
                                <h1 className="text-xl font-semibold">
                                    {detailGallery?.name}
                                </h1>
                                <p className="text-sm text-gray-500">
                                    Category :{" "}
                                    {detailGallery.category_gallery?.name}
                                </p>

                                <p className="text-sm text-gray-500">
                                    Tipe Property :{" "}
                                    {detailGallery.tipe_property?.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Created At :{" "}
                                    {moment(detailGallery?.created_at).format(
                                        "DD MMMM YYYY h:mm a"
                                    )}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Updated At :{" "}
                                    {moment(detailGallery?.updated_at).format(
                                        "DD MMMM YYYY h:mm a"
                                    )}
                                </p>

                                <p className="text-sm text-gray-500">
                                    FileName :{" "}
                                    {detailGallery?.image
                                        ? detailGallery?.image
                                        : null}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : null}
            </dialog>
        </div>
    );
};

export default ModalDetailGallery;
