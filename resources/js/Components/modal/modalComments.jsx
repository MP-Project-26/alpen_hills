import React from "react";
import ImageUser from "@/assets/user.png";
import { useEffect } from "react";
import { useState } from "react";
import moment from "moment/moment";

export default function ModalComments({ data }) {
    const [item, setItem] = useState([]);
    useEffect(() => {
        setItem(data.comments);
    }, [data]);
    return (
        <>
            <dialog
                id="my_modal_2"
                className="modal backdrop-blur-sm border-0 "
            >
                <div className="lg:w-[60rem] lg:h-[35rem] h-[20rem] relative rounded-xl bg-white p-[3rem]">
                    <button
                        className=" btn btn-sm btn-circle btn-ghost absolute right-5 top-5 bg-white shadow-xl border border-gray-500 z-[100] select-none"
                        onClick={() => window.my_modal_2.close()}
                    >
                        ✕
                    </button>
                    <div className="lg:w-[60rem] lg:h-[35rem]  h-[20rem] relative ">
                        <div className="comment ">
                            <div className="  overflow-y-scroll scrollModal max-h-[23rem] w-full">
                                {item
                                    ? item.map((data, index) => (
                                          <div
                                              key={index}
                                              className="w-full justify-center rounded-[2rem] flex flex-col gap-6 py-5 max-w-[90%]"
                                          >
                                              <div className="flex flex-row items-center gap-4">
                                                  <img src={ImageUser} alt="" />

                                                  <div className="flex flex-col gap-1">
                                                      <p className="font-roboto font-bold text-lg">
                                                          {data.name}
                                                      </p>
                                                      <p className="font-roboto font-normal text-xs ">
                                                          {moment(
                                                              item?.createdAt
                                                          ).fromNow()}
                                                      </p>
                                                  </div>
                                              </div>
                                              <p className="ml-[3rem] font-roboto font-normal text-lg bg-gray-200 p-3 rounded-xl shadow-md break-words h-auto">
                                                  {data.note}
                                              </p>
                                          </div>
                                      ))
                                    : null}
                            </div>
                        </div>
                    </div>
                    <div className="send-comment ">
                        <div className=" absolute bg-gray-100 w-full bottom-0 left-0  rounded-b-xl p-5">
                            <form className="flex items-center  gap-[2.5rem] w-full">
                                <div className="flex flex-col w-full gap-3">
                                    <input
                                        type="text"
                                        className="w-[30%] rounded-[1rem] border input-bordered input-success p-2"
                                        placeholder="Name"
                                    />
                                    <input
                                        type="text"
                                        className="w-full rounded-[1rem] border input-bordered input-success p-2"
                                        placeholder="Notes"
                                    />
                                </div>
                                <div className="flex items-end justify-end h-[6rem]">
                                    <input
                                        type="submit"
                                        value="sumbit"
                                        className="bg-green-custom text-white rounded-[1rem] px-5 py-2 font-roboto font-bold cursor-pointer hover:bg-cyan-700 transition-all duration-200 ease-in-out"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
}
