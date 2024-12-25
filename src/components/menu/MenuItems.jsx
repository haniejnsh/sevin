import { MdWindow } from "react-icons/md";
import { IoWallet,IoFileTrayFull } from "react-icons/io5";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSolidUserRectangle } from "react-icons/bi";
import { HiUsers } from "react-icons/hi2";
import { FaStarHalfAlt } from "react-icons/fa";

export default function MenuItems() {
    const menuItems=[
        { name: "داشبورد", icon: MdWindow },
        { name: "لیست رزومه من", icon: BiSolidUserRectangle },
        { name: "بخش مالی", icon: IoWallet },
        { name: "مدیریت تیکت ها", icon: IoFileTrayFull },
        { name: "باشگاه مشتریان", icon: HiUsers },
        { name: "علاقه مندی های من", icon: FaStarHalfAlt },
        { name: "مسافران من", icon: TbRosetteDiscountCheckFilled },
    ];
    const selected="لیست رزومه من"
  return (
    <div className="grow flex flex-col w-full gap-2 px-2">
        {menuItems.map(item => (
            <div key={item.name} className={`flex items-center gap-2  p-1 rounded-xl transition cursor-pointer ${item.name==selected?"bg-slate-700":"hover:bg-slate-300"}`}>
                <div className={`flex justify-center items-center  p-2 rounded-lg ${item.name==selected?"bg-slate-500":"bg-slate-200"}`}>
                    <item.icon className="text-slate-400 text-2xl" /> 
                </div>
                <span className={` ${item.name==selected?"text-slate-50":"text-slate-700"}`}>{item.name}</span>
            </div>
      ))}
    </div>
  )
}
