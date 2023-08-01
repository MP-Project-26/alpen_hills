import { Link, router } from "@inertiajs/react";
import moment from "moment";
import React, { useState } from "react";
import FlashMessage from "./FlashMessage";

const ModalDetailPost = ({ detailPost, flash }) => {
    //console.log(detailPost);
    const [deleteComentSuccess, setDeleteComentSuccess] = useState(false);

    const handleDeleteComment = (e, item) => {
        e.preventDefault();
        if (confirm("Are you sure you want to delete this comment?")) {
            router.delete(`/admin/comment/delete/${item.id}`, {
                preserveScroll: true,
                onSuccess: () => {
                    setDeleteComentSuccess(true);
                    setTimeout(() => {
                        setDeleteComentSuccess(false);
                    }, 3000);
                },
            });
        }
    };

    return (
        <div>
            <dialog
                id="modal_deatail_post"
                className="modal bg-black backdrop-blur-sm bg-opacity-40"
            >
                {detailPost ? (
                    <div
                        method="dialog"
                        className="modal-box w-11/12 max-w-5xl rounded-md"
                    >
                        <button
                            onClick={() => window.modal_deatail_post.close()}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>
                        <div className="flex flex-col gap-3 md:p-2 py-2 w-full">
                            {deleteComentSuccess && (
                                <FlashMessage flash={flash} />
                            )}

                            <div>
                                <h1 className="text-2xl font-semibold">
                                    {detailPost?.title}
                                </h1>
                                <p className="text-sm text-gray-500">
                                    Author : {detailPost?.user_post?.name}
                                </p>
                            </div>
                            <picture className="w-full md:w-[60%]">
                                {detailPost.image ? (
                                    <img
                                        src={`/storage/images/blog/${detailPost?.image}`}
                                        alt=""
                                    />
                                ) : null}
                            </picture>
                            <div className="flex flex-col md:flex-row gap-3">
                                <p className="text-sm text-gray-500">
                                    Category : {detailPost.category_post?.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {moment(detailPost?.created_at).format(
                                        "DD MMMM YYYY h:mm a"
                                    )}
                                </p>
                            </div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: detailPost?.body,
                                }}
                            ></div>
                            <div className="">
                                <h1>Comments :</h1>
                                {detailPost?.comments?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="chat chat-start"
                                    >
                                        <div className="chat-bubble">
                                            From : {item.name} <br />
                                            Email : {item.email} <br />
                                            commnet : {item.comment}
                                        </div>
                                        <div>
                                            <button
                                                onClick={(e) => {
                                                    handleDeleteComment(
                                                        e,
                                                        item
                                                    );
                                                }}
                                                className="text-red-600"
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : null}
            </dialog>
        </div>
    );
};

export default ModalDetailPost;
