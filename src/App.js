import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home, Login, Public } from "./containers/public/";
import { Route, Routes } from "react-router-dom";
import path from "./ultis/paths";

function App() {
  return (
    <div>
      <div className= "bg-[#363636]">
        <Routes>
          <Route path={path.Public} element={<Public />}>
            <Route path={path.Home} element={<Home/>}/>
            <Route path={path.Login} element={<Login/>}/>
            <Route path={path.Star} element={<Home/>}/>
          </Route>
        </Routes>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
