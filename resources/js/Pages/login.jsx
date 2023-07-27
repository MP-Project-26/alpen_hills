import InputError from "@/Components/Form/InputError";
import { Head, useForm, Link } from "@inertiajs/react";
import React, { useEffect } from "react";


const login = ({ title, status }) => {

    const { data, setData, post, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login.store'));
    };

    return (
        <>
            <Head title={title} />

            <div className="flex h-screen w-screen justify-center items-center md:px-0 px-3 bg-slate-200">
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg  sm:p-6 md:p-8 shadow-lg">
                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                    <form className="space-y-6" onSubmit={submit} >
                        <h5 className="text-xl font-medium text-gray-900 w-full text-center">
                            Login
                        </h5>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                isfocused="true"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                autoComplete="off"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            >
                                Your email
                            </label>

                            <InputError message={errors.email} className="mt-1" />
                        </div>
                        <div className="relative">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder=" "
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                required
                                autoComplete="off"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <label
                                htmlFor="password"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            >
                                Your password
                            </label>
                            <InputError message={errors.password} className="mt-1" />
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"

                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                            </div>
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Remember me
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default login;
