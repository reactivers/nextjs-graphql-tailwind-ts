import { useRouter } from "next/router";
import { FC } from "react";
import { AiOutlineForm } from "react-icons/ai";

const Header: FC = () => {
  const { push } = useRouter();
  return (
    <div className="bg-slate-300/10 w-screen flex justify-between mb-8 ">
      <h1
        className="p-8 m-0 text-white text-6xl font-bold cursor-pointer"
        onClick={() => push("/")}
      >
        Next App
      </h1>
      <div className="flex items-center">
        <AuthButton />
      </div>
    </div>
  );
};

const AuthButton = () => {
  const { push } = useRouter();
  return (
    <div
      className="px-4 py-2 bg-slate-300/10 top-4 text-white text-base font-light mr-4 flex items-center hover:bg-slate-800 transition-all cursor-pointer"
      onClick={() => alert("Not implemented!")}
    >
      <AiOutlineForm className="mr-2" />
      <div>Sign In</div>
    </div>
  );
};

export default Header;
