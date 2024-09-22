import { Outlet, NavLink } from "react-router-dom";
import classes from "./Layout.module.css";

function Root() {
    return (
        <div className="App">
            <ul className={classes.nav}>
                <li>
                    <NavLink to='/' className={classes.active}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/experience' className={({ isActive }) => isActive ? 'active' : undefined }>Experience</NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio' className={({ isActive }) => isActive ? 'active' : undefined }>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to='/skill' className={({ isActive }) => isActive ? 'active' : undefined }>Skill</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'active' : undefined }>Contact</NavLink>
                </li>
            </ul>
            <main className={classes.main}>
                <Outlet />
            </main>
        </div>
    );
}

export default Root;
