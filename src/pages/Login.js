import { React, useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, pending } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <div>
      <form
        className="w-1/2 ml-auto mr-auto mb-5 bg-purple-700 p-5 mt-12 "
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-3xl  text-center text-white">LOGIN</h1>
        <label className="font-bold block  mt-3 mb-5  text-white  ">
          Email Adres:
        </label>
        <input
          className="p-3 mt-3 mb-5 w-full border-gray-500 bg-slate-300   "
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="font-bold block  mb-2 text-white   ">Password:</label>
        <input
          className="p-3 mt-3 mb-5 w-full border-gray-500 bg-slate-300   "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!pending && (
          <button
            type="submit"
            className="bg-orange-600 p-2 text-white text-xl w-full  ml-2"
          >
            Giriş
          </button>
        )}
        {pending && (
          <button
            type="submit"
            disabled
            className="bg-orange-600 p-2  w-full  ml-2"
          >
            İşlem Sürüyor
          </button>
        )}
        {error && (
          <div className="error bg-red-500 p-2 mt-5 w-full">{error}</div>
        )}
      </form>
    </div>
  );
};

export default Login;
