import React, { useState } from "react";
import { router } from "@inertiajs/react";

const SortGallery = ({ categoryGallery, propertyType }) => {
    const [search, setSearch] = useState("");

    const searchHandle = (e) => {
        e.preventDefault();
        router.get("/admin/gallery/", { search });
    };

    return (
        <>
            <div className="flex w-full gap-3 md:flex-row flex-col">
                <form onSubmit={searchHandle} className=" w-full">
                    <div className="flex input-group">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="md:w-full w-[87%] input-bordered rounded-md"
                            type="text"
                            name="search"
                            placeholder="search.."
                        />
                        <button
                            type="submit"
                            className="p-2 bg-red-600 hover:bg-red-300"
                        >
                            <i className="fas fa-search text-xl text-white"></i>
                        </button>
                    </div>
                </form>

                <form onSubmit={searchHandle} className="form-control w-auto">
                    <div className="flex input-group">
                        <select
                            name="category_gallery_id"
                            id="category_gallery_id"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="select select-bordered"
                        >
                            <option defaultValue={""}>Sort by category</option>
                            {categoryGallery.map((item, index) => (
                                <option key={index} value={item.name}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        <button
                            type="submit"
                            className="p-2 bg-red-600 hover:bg-red-300"
                        >
                            <i className="fas fa-filter text-xl text-white"></i>
                        </button>
                    </div>
                </form>

                <form onSubmit={searchHandle} className="form-control w-auto">
                    <div className="flex input-group">
                        <select
                            name="tipe_property_id"
                            id="tipe_property_id"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="select select-bordered"
                        >
                            <option defaultValue={""}>
                                Sort by Type Property
                            </option>
                            {propertyType.map((item, index) => (
                                <option key={index} value={item.name}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        <button
                            type="submit"
                            className="p-2 bg-red-600 hover:bg-red-300"
                        >
                            <i className="fas fa-filter text-xl text-white"></i>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SortGallery;
