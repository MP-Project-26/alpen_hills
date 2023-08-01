import InputError from "@/Components/Form/InputError";
import FlashMessage from "@/Components/adminPage/FlashMessage";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, router, useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

const Index = ({ ...props }) => {
    const { data, setData, post, errors, reset } = useForm({
        name: "",
        email: "",
        current_password: "",
        new_password: "",
        confirm_password: "",
    });

    useEffect(() => {
        if (props?.auth?.user) {
            setData((data) => ({
                ...data,
                name: props?.auth?.user?.name,
                email: props?.auth?.user?.email,
            }));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/admin/profile/update/${props?.auth?.user?.id}`, {
            onSuccess: () => {
                window.location.reload();
                reset({
                    current_password: "",
                    new_password: "",
                    confirm_password: "",
                });
            },
            onError: (errors) => {
                console.log(errors);
            }

        });



    };

    return (
        <AdminLayout title={props?.title} auth={props?.auth}>
            <FlashMessage flash={props?.flash} />
            <div className="bg-white p-5 flex flex-col gap-5">
                <form
                    onSubmit={handleSubmit}
                 className="flex flex-col lg:w-[50%] md:w-[70%] w-full gap-3">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name"> Name </label>
                        <input
                             type="text"
                            name="name"
                            id="name"
                            value={data.name}
                            onChange={(e) =>
                                setData((data) => ({
                                    ...data,
                                    name: e.target.value,
                                }))
                            }
                            className="border border-gray-300 rounded-md p-2"
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="eamil"> Email </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={data.email}
                            onChange={(e) =>
                                setData((data) => ({
                                    ...data,
                                    name: e.target.value,
                                }))
                            }
                            className="border border-gray-300 rounded-md p-2"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="current_password">
                            Current Password
                        </label>
                        <input
                            type="password"
                            name="current_password"
                            id="current_password"
                            value={data.current_password}
                            onChange={(e) => {
                                setData((data) => ({
                                    ...data,
                                    current_password: e.target.value,
                                }));
                            }}
                            className="border border-gray-300 rounded-md p-2"
                        />
                        <InputError message={errors.current_password} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="new_password">New Password</label>
                        <input
                            type="password"
                            name="new_password"
                            id="new_password"
                            value={data.new_password}
                            onChange={(e) => {
                                setData((data) => ({
                                    ...data,
                                    new_password: e.target.value,
                                }));
                            }}
                            className="border border-gray-300 rounded-md p-2"
                        />
                        <InputError message={errors.new_password} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="confirm_password">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            value={data.confirm_password}
                            onChange={(e) => {
                                setData((data) => ({
                                    ...data,
                                    confirm_password: e.target.value,
                                }));
                            }}
                            className="border border-gray-300 rounded-md p-2"
                        />
                        <InputError message={errors.confirm_password} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <button
                            type="submit"
                            className="bg-slate-500 hover:bg-slate-600 text-white rounded-md p-2"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>
                <div>
                    <button
                        onClick={() => {
                            if (
                                confirm(
                                    "Are you sure you want to delete your account?"
                                )
                            ) {
                                router.delete(
                                    `/admin/profile/${props?.auth?.user?.id}`
                                );
                            }
                        }}
                        className="bg-red-600 p-2 font-medium rounded-md text-white "
                    >
                        Delete Account{" "}
                    </button>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Index;
