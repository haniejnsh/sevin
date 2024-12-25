import { MdShortText } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";
import {reservationList} from "./reservationList"
import ReservedCard from "./ReservedCard";
import ReservedInfoModal from "../modal/ReservedInfoModal";
import { useState } from "react";
import SuccessModal from "../modal/SuccessModal";

export default function InformationList() {
    const [open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    // const toggleModal = () => {
    //     setIsOpen(!isOpen);
    // };

  return (
    <div className="bg-white flex flex-col rounded-xl px-3 py-5 gap-5">
        <div className="flex justify-between gap-1 items-center">
            <div className="hidden lg:flex text-slate-500 grow w-full pr-2">
                {"مشتری گرامی در این لیست شما دسترسی به همه فاکتورها دارد"}
            </div>
            <div className="flex justify-between lg:justify-end lg:gap-4 items-center w-full">
                <div className="flex justify-between items-center bg-slate-200 rounded-xl px-2 py-2 gap-2">
                    <div className="p-1 flex justify-center items-center rounded-full bg-slate-400 text-slate-600">
                        <MdShortText className="text-lg"/>
                    </div>
                    <div className=" text-slate-500 grow lg:pl-6">
                        <p className="text-sm">{"جستجو هتل، مسافراصلی ..."}</p>
                    </div>
                    <div className="p-1 flex justify-center items-center rounded-lg bg-slate-400 text-slate-600">
                        <FaAngleLeft className="text-lg"/>
                    </div>
                </div>
                <div className="flex justify-center items-center bg-slate-700 py-2 px-4 rounded-xl text-white text-sm">{"ثبت رزرو"}</div>
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <div className="md:flex items-center justify-between text-slate-700 hidden border border-slate-300  bg-slate-100 rounded-lg px-3 py-5 font-bold my-2">
                          <p className="w-[12%] text-center">{"کد پیگیری"}</p>
                          <p className=" w-[20%] text-center">{"هتل"}</p>
                          <p className="w-[20%] text-center">{"تاریخ ورود و خروج"}</p>
                          <p className="w-[13%] text-center">{"مسافر اصلی"}</p>
                          <div className="w-[35%] "></div>
                        </div>
            {
                reservationList.map(item=>{
                    return(
                        <>
                        <ReservedCard reserved={item} reservedModalControl={(c)=>{setOpen(c)}}  successModalControl={(c)=>{setSuccess(c)}} key={item}/>
                        {open?(<ReservedInfoModal modalControl={(c)=>{setOpen(c)}} reservedInfo={item} successModalControl={(c)=>{setSuccess(c)}}/>):""}
                        {success?(<SuccessModal modalControl={(c)=>{setSuccess(c)}} name={item.name}/>):""}
                        </>
                    )
                })
            }
        </div>
        <div className="flex justify-center items-center mx-auto gap-2">
            {
                [1,2,3,4].map(item=>{
                    return(
                        <div key={item}  className={`w-10 h-5 pb-1 text-slate-700 border-b-4 border-slate-300 flex justify-center items-center ${(item==4)?("border-slate-500"):""}`}>{(item==4)?("01"):""}</div>

                        

                    )
                })
            }
        </div>
        
        
    </div>
  )
}
