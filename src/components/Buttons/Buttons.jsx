import { NavLink, Outlet, useLocation } from 'react-router-dom';
import classes from "./Buttons.module.scss"

export default function Buttons() {
  const location = useLocation();
  const isActionButtonPage = location.pathname.includes('/buttons/actionbutton');

  return (
    <div className={classes["buttons-wrapper"]}>
      {!isActionButtonPage && (
        <NavLink className={classes.navlink} to='actionbutton'>Action Button</NavLink>
      )}
      <div className={classes["content-wrapper"]}>
        <Outlet />
      </div>
    </div>
  );
}