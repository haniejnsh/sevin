export default function ReservedInfoModal({modalControl,reservedInfo,successModalControl}) {
    const modalItems=[
        ["کدپیگیری",reservedInfo.code],
        ["هتل",reservedInfo.hotel],
        ["تاریخ ورود و خروج",reservedInfo.date],
        ["مسافر اصلی",reservedInfo.name]
    ]

  return (
    <div
          className="fixed inset-0 bg-black bg-opacity-10 flex items-end z-50"
          onClick={()=>modalControl(false)}
        >
          <div
            className="bg-white w-full rounded-t-xl pt-4 pb-6 px-5 animate-slide-up flex flex-col gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 rounded-xl mx-auto bg-slate-300 flex justify-center items-center mb-2"></div>
            <div className="flex flex-col gap-4">
                {
                    modalItems.map(item=>{
                        return (
                            <div key={item} className="flex justify-between items-center gap-3">
                                <div className="border border-slate-200 bg-slate-50 rounded-lg py-3 h-[42px] px-1 text-slate-700 flex justify-center items-center w-2/5">
                                    {item[0]}
                                </div>
                                <div className="bg-slate-700 rounded-lg py-3 px-1 h-[42px] text-slate-50 flex justify-center items-center w-3/5 text-sm">
                                    {item[1]}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-between items-center">
                <div onClick={()=>modalControl(false)} className=" bg-emerald-500 rounded-lg w-[31%] h-[42px] px-1 text-slate-50 flex justify-center items-center cursor-pointer hover:bg-emerald-400 transition">
                    {"پرداخت شده"}
                </div>
                <div onClick={()=>modalControl(false)} className=" bg-red-400 rounded-lg w-[31%] h-[42px] px-1 text-slate-50 flex justify-center items-center cursor-pointer hover:bg-red-300 transition">
                    {"مشاهده"}
                </div>
                <div onClick={()=>{modalControl(false);successModalControl(true);}} className=" bg-slate-500 rounded-lg w-[31%] h-[42px] px-1 text-slate-50 flex justify-center items-center cursor-pointer hover:bg-slate-300 transition">
                    {"کنسلی"}
                </div>
            </div>
          </div>
        </div>
  )
}
