import Header from "./Header";
import InformationList from "./InformationList";

export default function Container() {
  return (
    <div className="flex flex-col bg-slate-100 w-full  px-3 xl:px-6  py-5 gap-4 lg:w-4/5">
      <Header/>
      <InformationList/>
    </div>
  )
}
