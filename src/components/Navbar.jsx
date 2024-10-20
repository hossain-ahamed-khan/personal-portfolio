import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const navLink = <>
    <AnchorLink href="#home"><li><a>Home</a></li></AnchorLink>
    <AnchorLink offset={100} href="#about-me"><li><a>About me</a></li></AnchorLink>
    <AnchorLink offset={50} href="#experience"><li><a>Experience</a></li></AnchorLink>
    <AnchorLink offset={50} href="#projects"><li><a>Projects</a></li></AnchorLink>
    <AnchorLink offset={50} href="#education"><li><a>Education</a></li></AnchorLink>
</>

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <GiHamburgerMenu className="text-3xl" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] w-52 p-5 shadow">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Hossain</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-5 space-x-5">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end pr-5">
                <AnchorLink offset={50} href="#contact">
                    <a className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-slate-100">Contact me</a>
                </AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;