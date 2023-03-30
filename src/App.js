import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topbar from "./layouts/Topbar";
import BottomBar from "./layouts/BottomBar";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import CategoryPage from "./pages/CategoryPage";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <>
        <ToastContainer />
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/home" element={<Home />}></Route>

            <Route path="/category/:searchKey" element={<CategoryPage />} />
            <Route path="/basket" element={<Basket />}></Route>
          </Routes>
          <BottomBar />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
