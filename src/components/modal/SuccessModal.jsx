import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

export default function SuccessModal({modalControl,name}) {

  return (
    <div
          className="fixed inset-0 bg-black bg-opacity-10 flex z-50 justify-center items-center"
          onClick={()=>modalControl(false)}
        >
          <div
            className="bg-white rounded-xl w-80 py-4 px-5 flex justify-center items-center flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center relative w-[77px] h-[77px] my-2">
                <div className="flex justify-center items-center w-16 h-16 border-2 border-white  rounded-xl opacity-100 absolute top-0 right-0 z-20 bg-white/50 backdrop-blur-3xl">
                    <TbRosetteDiscountCheckFilled className="text-white text-4xl"/>
                </div>
                <div className="w-16 h-16 rounded-xl bg-emerald-500 shadow-md shadow-emerald-200 absolute bottom-0 left-0"></div>
            </div>
            <h1 className="font-bold text-lg text-center text-slate-700">{"اطلاعات شما با موفقیت ثبت شد"}</h1>
            <p className="flex flex-col items-center gap-1 text-slate-400">
                <span className="text-center">{`مشتری گرامی ${name} عزیز`}</span>
                <span className="flex text-center px-2">{"پس از تایید ادمین رزرو شما لغو و با شما تماس گرفته خواهد شد."}</span>
            </p>
            <div onClick={()=>modalControl(false)} className=" bg-emerald-500 rounded-lg py-2 px-5 text-slate-50 flex justify-center items-center cursor-pointer hover:bg-emerald-400 transition my-1">
                    {"متوجه شدم"}
            </div>
          </div>
        </div>
  )
}
