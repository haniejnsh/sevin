import { RiFileTextFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

export default function ReservedCard({reserved,reservedModalControl,successModalControl}) {
  return (
    <div className="flex justify-between items-center gap-3">

        <div className="border border-slate-200 lg:border-slate-300 bg-slate-50 lg:bg-white grow rounded-lg p-3">
            <p className="text-slate-700 md:hidden">{`اطلاعات لیست رزرو - شماره ${reserved.id}`}</p>

            <div className="md:flex items-center justify-between text-slate-500 hidden">
              <p className="text-sm w-[12%] text-center">{reserved.code}</p>
              <p className="text-sm w-[20%] text-center">{reserved.hotel}</p>
              <p className="text-sm w-[20%] text-center">{reserved.date}</p>
              <p className="text-sm w-[13%] text-center">{reserved.name}</p>
              <div className="w-[35%] flex justify-end gap-1 lg:gap-3 items-center">
                {reserved.phase=="complete"?(
                  <>
                    <div className="bg-emerald-500 rounded-lg w-24 py-2 px-1 text-slate-50 flex justify-center items-center text-sm">
                      {"پرداخت شده"}
                    </div>
                    <div className=" bg-red-400 rounded-lg w-24 py-2 px-1 text-slate-50 flex justify-center items-center gap-1">
                      <span className="text-sm">{"مشاهده"}</span>
                      <FaEye className="text-lg text-slate-300"/>
                    </div>
                    <div onClick={()=>successModalControl(true)}  className=" bg-slate-500 rounded-lg w-24 py-2 px-1 text-slate-50 flex justify-center items-center cursor-pointer hover:bg-slate-400 transition gap-1">
                      <span className="text-sm">{"کنسل"}</span>
                      <RxCrossCircled className="text-lg text-slate-300"/>
                    </div>
                  </>
                ):reserved.phase=="cancel"?(
                  <div className=" bg-slate-700 rounded-lg w-24 py-2 px-1 text-slate-50 flex justify-center items-center text-sm">
                    {"لغو شده"}
                  </div>
                ):(
                  <div className=" bg-blue-600 rounded-lg px-3 py-2 text-slate-50 flex justify-center items-center text-sm">
                    {"انتظار پرداخت کاربر"}
                  </div>
                )}
              </div>
            </div>
        </div>

        <div onClick={()=>reservedModalControl(true)} className="bg-slate-700 p-3 rounded-xl flex justify-center items-center cursor-pointer hover:bg-slate-600 transition md:hidden">
            <RiFileTextFill className="text-2xl text-slate-200"/>
        </div>

    </div>
  )
}
