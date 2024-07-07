import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss"

export default function Navbar() {
  return (
        <nav className={classes.navbar}>
            <ul>
                <li><NavLink to="/" end>Accordion</NavLink></li>
                <li><NavLink to="/alertdialog">Alertdialog</NavLink></li>
            </ul>
        </nav>
  )
}
