import { React, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div>
      <a href="/home">home</a>

      <form className="w-1/2 ml-auto mr-auto mb-5" onSubmit={handleSubmit}>
        <h1 className="font-bold text-2xl text-black text-center">LOGIN</h1>
        <label className="font-bold block  mt-3 mb-5  border-white border-x-4  ">
          Email Adres:
        </label>
        <input
          className="p-3 mt-3 mb-5 w-full border-gray-500 bg-slate-300 text-white  "
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="font-bold block  mb-2  border-white border-x-4  ">
          Password:
        </label>
        <input
          className="p-3 mt-3 mb-5 w-full border-gray-500 bg-slate-300 text-white  "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="block border-none bg-orange-600 text-white p-2 cursor-pointer w-full text-lg "
          type="submit"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;
