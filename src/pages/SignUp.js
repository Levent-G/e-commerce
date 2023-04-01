import { React, useState } from "react";
import { useSignup } from "../hooks/useSignup";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { error, pending, signup } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword === password) {
      signup(email, password, userName);
    } else {
      alert("Parolalar eşleşmedi");
    }
    console.log(email, password, userName);
  };
  return (
    <div>
      <form
        className="w-1/2 ml-auto mr-auto mb-5 bg-purple-700 p-5 mt-12 "
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-3xl text-center text-white">SIGN UP</h1>

        <label className="font-bold block  mt-3 mb-5 text-white   ">
          User Name:
        </label>
        <input
          className="p-3  mb-5 w-full border-gray-500 bg-slate-300  "
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label className="font-bold block   mb-5  text-white ">
          Email Adres:
        </label>
        <input
          className="p-3  mb-5 w-full border-gray-500 bg-slate-300   "
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="font-bold block  mb-2  text-white ">Password:</label>
        <input
          className="p-3  mb-5 w-full border-gray-500 bg-slate-300   "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="font-bold block  mb-2  text-white  ">
          Confirm Password:
        </label>
        <input
          className="p-3  mb-5 w-full border-gray-500 bg-slate-300   "
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {!pending && (
          <button
            type="submit"
            className="bg-orange-600 p-2 text-white text-xl w-full  ml-2"
          >
            Üye Ol
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

export default SignUp;
