import TableGallery from "@/Components/adminPage/TableGallery";
import AdminLayout from "@/Layouts/AdminLayout";
import { useEffect, useState } from "react";
import TableCategory from "@/Components/adminPage/TableCategoryGallery";
import Paginate from "@/Components/adminPage/Paginate";
import TablePropertyType from "@/Components/adminPage/TablePropertyType";
import FlashMessage from "@/Components/adminPage/FlashMessage";

const index = ({ ...props }) => {
    const [galleryActive, setGalleryActive] = useState(true);
    const [categoryGalleryActive, setCategoryGalleryActive] = useState(false);
    const [typePropertyActive, setTypePropertyActive] = useState(false);



    const toggleGallery = () => {
        setGalleryActive(!galleryActive);
        setCategoryGalleryActive(false);
        setTypePropertyActive(false);
      
    };

    const toggleCategoryGallery = () => {
        setCategoryGalleryActive(!categoryGalleryActive);
        setGalleryActive(false);
        setTypePropertyActive(false);
      
    };

    const toggleTypeProperty = () => {
        setTypePropertyActive(!typePropertyActive);
        setGalleryActive(false);
        setCategoryGalleryActive(false);
      
    };


    return (
        <AdminLayout title={props?.title} auth={props?.auth}>
            <div className="h-full w-full ">
                <header className="h-auto px-4 py-2 mb-2 w-full border bg-white shadow-sm">
                    <ul className="flex md:gap-10 md:justify-start items-center justify-around font-medium">
                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                galleryActive
                                    ? "border-b-2 border-slate-400"
                                    : ""
                            }`}
                            onClick={toggleGallery}
                        >
                            Gallery
                        </li>
                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                categoryGalleryActive
                                    ? "border-b-2 border-slate-400"
                                    : ""
                            }`}
                            onClick={toggleCategoryGallery}
                        >
                            Category Gallery
                        </li>

                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                typePropertyActive
                                    ? "border-b-2 border-slate-400"
                                    : ""
                            }`}
                            onClick={toggleTypeProperty}
                        >
                            Type Property
                        </li>

                    </ul>
                </header>

                <FlashMessage flash={props.flash}/>

                <div className="pb-28">
                    {galleryActive && props.gallery && (
                        <>
                            <TableGallery
                                meta={props.gallery.meta}
                                gallery={props.gallery}
                                categoryGallery={props.categoryGallery}
                                propertyType={props.propertyType}
                            />
                            <div className="w-full flex justify-center p-3">
                                <Paginate meta={props?.gallery?.meta} />
                            </div>
                        </>
                    )}

                    {categoryGalleryActive && props.categoryGallery && (
                        <TableCategory
                            categoryGallery={props.categoryGallery}
                        />
                    )}

                    {typePropertyActive && props.propertyType && (
                        <TablePropertyType propertyType={props.propertyType} />
                    )}


                </div>
            </div>
        </AdminLayout>
    );
};

export default index;
