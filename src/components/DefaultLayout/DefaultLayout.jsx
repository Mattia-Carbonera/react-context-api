import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function DefaultLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
