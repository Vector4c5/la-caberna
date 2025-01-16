import Header from "@/components/common/Header";
import Loginbtn from "@/components/common/Login-Btn"

export default function inicio_sesion() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-screen bg-slate-700 bg-opacity-30 overflow-y-auto">
        <div className="m-5 w-10/12 bg-slate-600 p-2 px-6 rounded-xl">
      <Header/>
      </div>
      <Loginbtn/>


      

    </div>
  );
}
