import logo from "../../assets/Logo.png"
import user from "../../assets/user.png"
import MenuItems from "./MenuItems"

export default function SideMenu() {
  return (
    <div className="hidden w-1/5 lg:flex flex-col items-center gap-4 py-5 px-4">

      <div className="flex flex-col items-center gap-4 border-b-2 border-slate-300 w-full pb-2">
        <div className="bg-slate-700 p-4 rounded-xl border-[3px] border-slate-400">
          <img src={logo} alt="logo" className="w-10"/>
        </div>
        <h2 className="font-bold text-xl">ZARVANTRIP</h2>
      </div>

      <MenuItems/>

      <div className="flex flex-col items-center bg-slate-100 py-3 px-2 rounded-xl gap-2 w-full">
        <img src={user} alt="user" className="w-10"/>
        <h2 className="text-slate-700">{"ابولفضل عزیز"}</h2>
        <p className="text-slate-600">AbyariZarvan@gmail.com</p>
      </div>

      <div className=" bg-red-400 rounded-xl w-full py-2 px-1 text-slate-50 flex justify-center items-center cursor-pointer  transition text-lg">
        {"خروج"}
      </div>

    </div>
  )
}
