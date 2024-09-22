import { Outlet, NavLink } from "react-router-dom";
import classes from "./Layout.module.css";
import { useState } from "react";

function Lists() {
    return (
        <>
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
        </>
    )
}

function Root() {
    const [open, setOpen] = useState(false);


    return (
        <div className="App">
            <ul className={classes['nav-desktop']}>
                <Lists />
            </ul>
            <ul className={classes['nav-mobile']}>
                <button className={classes['hamburger']} onClick={() => { setOpen((prev)=> !prev) } }><i className="fi fi-rr-menu-burger"></i></button><br/>
                {open && <ul className={classes['dropdown']}>
                    <Lists />
                </ul>}
            </ul>
            
            <main className={classes.main}>
                <Outlet />
            </main>
        </div>
    );
}

export default Root;
