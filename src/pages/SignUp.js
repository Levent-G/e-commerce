import { React, useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, userName);
  };
  return (
    <div>
      <form className="w-1/2 ml-auto mr-auto mb-5" onSubmit={handleSubmit}>
        <h1 className="font-bold text-2xl text-black text-center">SIGN UP</h1>

        <label className="font-bold block  mt-3 mb-5  border-white border-x-4  ">
          User Name:
        </label>
        <input
          className="p-3  mb-5 w-full border-gray-500 bg-slate-300 text-white  "
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label className="font-bold block   mb-5  border-white border-x-4  ">
          Email Adres:
        </label>
        <input
          className="p-3  mb-5 w-full border-gray-500 bg-slate-300 text-white  "
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="font-bold block  mb-2  border-white border-x-4  ">
          Password:
        </label>
        <input
          className="p-3  mb-5 w-full border-gray-500 bg-slate-300 text-white  "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="font-bold block  mb-2  border-white border-x-4  ">
          Confirm Password:
        </label>
        <input
          className="p-3  mb-5 w-full border-gray-500 bg-slate-300 text-white  "
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="block border-none bg-orange-600 text-white p-2 cursor-pointer  text-lg float-left"
          type="submit"
        >
          Kayıt Ol
        </button>
        <button
          className="block border-none bg-orange-600 text-white p-2 cursor-pointer ml-5 text-lg float-left "
          type="submit"
        >
          <a href="/">Giriş Yap</a>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
