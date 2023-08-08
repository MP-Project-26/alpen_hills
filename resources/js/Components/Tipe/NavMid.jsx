import { usePage } from "@inertiajs/react";
import React, { useState, useEffect } from "react";

const NavMid = ({ onCategoryIdSelected }) => {
    const { category_gallery } = usePage().props;
    const [idCategory, setIdCategory] = useState("");
    const [activeCategory, setActiveCategory] = useState(false);

    //set default id category
    useEffect(() => {
        if (category_gallery?.length > 0) {
            setIdCategory(category_gallery[0].id);
            setActiveCategory(true);
        }
    }, [category_gallery]);


    const handleClikMenu = (e, item) => {
        e.preventDefault();
        setIdCategory(item);
        setActiveCategory(true);
        onCategoryIdSelected(item);
    };

    return (
        <div className="h-auto p-2 bg-primary-custom bg-opacity-20 shadow-md mt-2">
            <ul className="flex justify-between font-medium">
                {category_gallery?.map((category, index) => (
                    <li
                        onClick={(e) => handleClikMenu(e, category.id)}
                        key={index}
                        className={`cursor-pointer text-primary-custom text-opacity-40 hover:text-opacity-100 hover:border-b-2 border-primary-custom ${idCategory === category.id && activeCategory ? 'border-b-2 border-primary-custom text-opacity-100' : ''}`}
                    >
                        {category?.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavMid;

