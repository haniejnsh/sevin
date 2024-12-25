import { MdWindow } from "react-icons/md";
import { IoMdListBox } from "react-icons/io";
import { IoLogOut , IoWallet } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import user from "../../assets/user.png"

export default function Header() {
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="bg-slate-700 p-2 rounded-xl lg:hidden">
                <MdWindow className="text-2xl text-slate-200"/>
            </div>
            <div className="hidden lg:flex justify-between items-center bg-slate-200 rounded-xl px-2 py-2 gap-2">
                <img src={user} alt="user" className="w-7"/>
                <p className=" text-slate-500 grow text-sm ml-3">
                    {"ابولفضل عزیز خوش آمدی"}
                </p>
                <div className="p-1 flex justify-center items-center rounded-lg bg-slate-300 text-slate-500">
                    <FaAngleLeft className="text-lg"/>
                </div>
            </div>
            <div className="p-2 flex items-center gap-2 text-slate-500  bg-slate-200 rounded-xl">
                <IoWallet className="text-2xl "/>
                <p className="flex gap-1 text-sm">
                    <span>21,265,000</span>
                    <span>{"تومان"}</span>
                </p>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-2 rounded-xl flex gap-2 items-center">
                <IoLogOut className="text-2xl text-slate-200"/>
                <p className="hidden lg:flex text-slate-50 text-sm ml-3">
                    {"برگشت به وبسایت"}
                </p>
            </div>
            <div className="bg-slate-200 p-2 rounded-xl relative">
                <IoMdListBox className="text-2xl text-slate-400"/>
                <div className="bg-orange-500 w-3 h-3 flex justify-center items-center text-sm text-white rounded-full absolute -top-[2px] -right-[2px]">2</div>
            </div>
        </div>
    </div>
  )
}
