import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Post from "./components/post/Post";
import Share from "./components/share/Share";

function App() {
  // const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <Share />
      <Post />
    </>
  );
  // const Layout = () => {
  // return (
  //   // <div className={`theme-${darkMode ? "dark" : "light"}`}>
  //   {
  //     /* <Navbar />
  //       <div style={{ display: "flex" }}>
  //         <LeftBar />
  //         <div style={{ flex: 6 }}>
  //           <Outlet />
  //         </div>
  //         <RightBar />
  //       </div> */
  //   }
  //   // </div>
  // );
  // };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //     ],
  //   },
  // ]);

  // return (
  //   <div>
  //     <RouterProvider router={router} />
  //   </div>
  // );
}

export default App;
