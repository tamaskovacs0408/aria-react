import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss"

export default function Navbar() {
  return (
        <nav className={classes.navbar}>
            <ul>
                <li><Link to="/">Accordion</Link></li>
            </ul>
        </nav>
  )
}
