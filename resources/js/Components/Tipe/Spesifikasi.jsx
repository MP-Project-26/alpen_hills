import React from "react";

const Spesifikasi = ({product}) => {
    return (
        <div id="spesifikasi">
            <div className="w-full flex flex-col mt-5">
                <div>
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
                        Spesifikasi{" "}
                        <span className="text-primary-custom">Property</span>
                    </h1>
                </div>
            </div>
            <div className=" grid grid-flow-col lg:grid-rows-2 md:grid-rows-3 grid-rows-4  mt-5 gap-2 md:gap-5 ">
                {/* Map loop data spefisikasi_property from index 0 to 7 */}
                {product.spefisikasi_property
                    .slice(0, 8)
                    .map((item, index) => (
                        <div
                            key={index}
                            className="flex lg:gap-5 gap-3 justify-center items-center bg-primary-custom w-auto p-2 md:p-2 lg:p-4 text-lg md:text-xl lg:text-3xl text-white font-medium"
                        >
                            <i className={item.icon}></i>
                            <p className="lg:text-xl md:text-sm text-xs">
                                {item.attribute}
                            </p>
                            <p className="lg:text-xl md:text-sm text-xs">
                                {item.value}
                            </p>
                        </div>
                    ))}
            </div>

            <div className="mt-4 w-auto">
                <div className="text-xl font-bold text-black">
                    <h1 className="">Detail :</h1>
                </div>
                <ul className="grid w-auto   md:grid-cols-3 grid-cols-1">
                    {product.spefisikasi_property
                        .slice(8)
                        .map((item, index) => (
                            <li key={index} className="w-auto font-medium">
                                <i className="fas fa-circle text-primary-custom"></i>{" "}
                                {item.attribute} {item.value}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Spesifikasi;
