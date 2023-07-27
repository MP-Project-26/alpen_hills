import TableGallery from "@/Components/adminPage/TableGallery";
import AdminLayout from "@/Layouts/AdminLayout";
import { useEffect, useState } from "react";
import TableCategory from "@/Components/adminPage/TableCategoryGallery";
import Paginate from "@/Components/adminPage/Paginate";

const index = ({ ...props }) => {
    console.log("props", props);
    const [galleryActive, setGalleryActive] = useState(true);
    const [categoryGalleryActive, setCategoryGalleryActive] = useState(false);
    const [typePropertyActive, setTypePropertyActive] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState({
        message: "",
        error: "",
    });
    const [timestamp, setTimestamp] = useState(Date.now());

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

    useEffect(() => {
        if (props.flash.message || props.flash.error) {
            setAlertMessage(props.flash);
            setShowAlert(true);

            const timer = setTimeout(() => {
                setShowAlert(false);
                setAlertMessage({ message: "", error: "" });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [props.flash, timestamp]);




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

                {showAlert && (
                    <div
                        className={`alert ${
                            alertMessage.message ? "alert-info" : "alert-error"
                        } my-4 flex transition ease-in-out delay-150`}
                    >
                        <div className="rounded-full border-2 border-blue-950">

                            {alertMessage.message && (
                                <i className="fas fa-info px-2"></i>
                            )}

                            {alertMessage.error && (
                                <i class="fas fa-exclamation-triangle px-2"></i>
                            )}
                        </div>

                        {alertMessage.message && (
                            <span>{alertMessage.message}</span>
                        )}

                        {alertMessage.error && (
                            <span>{alertMessage.error}</span>
                        )}
                    </div>
                )}

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
                </div>
            </div>
        </AdminLayout>
    );
};

export default index;
