import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Buttons() {
  return (
    <>
        <NavLink to='actionbutton'>Action Button</NavLink>
      <Outlet />
    </>
  );
}
