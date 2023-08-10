import { Link } from "@inertiajs/react";
import React from "react";

const Price = ({ product }) => {
    return (
        <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-3 md:gap-0 border-b pb-3 border-black">
            <div className="flex flex-col gap-2">
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
                    {product?.name} <span  className="text-primary-custom">Type</span>
                </h1>
                <p className="text-black lg:text-3xl md:text-2xl text-xl font-semibold">
                    Mulai Dari{" "}
                    <span className="text-primary-custom">
                        {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        }).format(product?.price)}
                    </span>
                </p>
            </div>

            <div className="flex gap-3 ">
                <Link className="btn  btn-warning-custom hover:bg-yellow-500 font-bold md:text-xl text-md text-black rounded-none  border-none">
                    SIMULASI KPR
                </Link>
                <Link className="btn btn-success-custom hover:bg-green-500 font-bold md:text-xl text-md text-white rounded-none hover:bg-opacity-75 border-none">
                    PESAN UNIT
                </Link>
            </div>
        </div>
    );
};

export default Price;
