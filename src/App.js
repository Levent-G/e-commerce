import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Topbar from "./layouts/Topbar";
import Topbar2 from "./layouts/Topbar2";

import Basket from "./pages/Basket";
import Login from "./pages/Login";
import CategoryPage from "./pages/CategoryPage";
import { ToastContainer } from "react-toastify";
import { useAuthContext } from "./hooks/useAuthContext";
import SignUp from "./pages/SignUp";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <>
        <ToastContainer />
        <BrowserRouter>
          <Topbar />
          {user && <Topbar2 />}

          <Routes>
            <Route
              path="/"
              element={!user ? <Login /> : <Navigate to="/home" />}
            ></Route>
            <Route
              path="/signup"
              element={!user ? <SignUp /> : <Navigate to="/home" />}
            ></Route>
            <Route
              path="/home"
              element={user ? <Home /> : <Navigate to="/" />}
            ></Route>

            <Route path="/category/:searchKey" element={<CategoryPage />} />
            <Route path="/basket" element={<Basket />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
