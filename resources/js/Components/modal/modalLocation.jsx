import React from "react";

export default function ModalLocation() {
    return (
        <>
            <span
                className="w-full flex justify-center -mt-[3rem] cursor-pointer"
                onClick={() => window.my_modal_3.showModal()}
            >
                <span className="bg-green-custom text-white px-7 py-5 rounded-xl text-2xl font-extrabold">
                    location
                </span>
            </span>
            <dialog id="my_modal_3" className="modal backdrop-blur-sm border-0">
                <div className="lg:w-[60rem] lg:h-[35rem] h-[20rem] relative rounded-xl ">
                    <button
                        className=" btn btn-sm btn-circle btn-ghost absolute right-5 top-5 bg-white shadow-xl border border-gray-500 z-[100] select-none"
                        onClick={() => window.my_modal_3.close()}
                    >
                        ✕
                    </button>
                    <div className="gmap_canvas lg:w-[60rem] lg:h-[35rem]  h-[20rem]">
                        <iframe
                            className=" brightness-[.83]"
                            width="100%"
                            height="100%"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=stellar jardin residence&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        />
                        <a href="https://2yu.co">2yu</a>
                        <br />
                        <style
                            dangerouslySetInnerHTML={{
                                __html: ".mapouter{position:relative;text-align:right;height:100%;width:100%;}",
                            }}
                        />
                        <a href="https://embedgooglemap.2yu.co/">
                            html embed google map
                        </a>
                        <style
                            dangerouslySetInnerHTML={{
                                __html: ".gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}",
                            }}
                        />
                    </div>
                </div>
            </dialog>
        </>
    );
}
