import React from "react";

const ModalGallery = ({ selectedGallery }) => {
    return (
        <div>
            <dialog
                id="modal_gallery"
                className="modal p-2 md:p-0 bg-black bg-opacity-50 backdrop-blur-sm"
            >
                <div
                    method="dialog"
                    className="modal-box  w-full max-w-6xl    rounded-none"
                >
                    <button
                        onClick={() => window.modal_gallery.close()}
                        className="btn btn-sm btn-circle border-none btn-ghost absolute right-2 top-2 "
                    >
                        ✕
                    </button>
                    {selectedGallery?.image && (
                        <img
                            src={`/storage/images/gallery/${selectedGallery?.image}`}
                            alt=""
                            className="w-full"
                        />
                    )}
                </div>
                <div method="dialog" className="modal-backdrop">
                    <button onClick={() => window.modal_gallery.close()}>
                        close
                    </button>
                </div>
            </dialog>
        </div>
    );
};

export default ModalGallery;
