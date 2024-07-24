import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Breadcrumbs from "./Breadcrumbs";

import classes from "./Layout.module.scss";

export default function Layout() {
  return (
    <main className={classes.main}>
      <Navbar />
      <Breadcrumbs />
      <div className={classes["content-wrapper"]}>
        <Outlet />
      </div>
    </main>
  );
}
