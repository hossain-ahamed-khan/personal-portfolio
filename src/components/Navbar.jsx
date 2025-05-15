import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

import logo_img from '../assets/hossain-high-resolution-logo-transparent.png';

const navLink = (
    <>
        <AnchorLink href="#home">
            <li>
                <a className="hover:font-bold hover:text-indigo-400">Home</a>
            </li>
        </AnchorLink>
        <AnchorLink offset={100} href="#about-me">
            <li>
                <a className="hover:font-bold hover:text-indigo-400">About me</a>
            </li>
        </AnchorLink>
        <AnchorLink offset={50} href="#experience">
            <li>
                <a className="hover:font-bold hover:text-indigo-400">Experience</a>
            </li>
        </AnchorLink>
        <AnchorLink offset={50} href="#projects">
            <li>
                <a className="hover:font-bold hover:text-indigo-400">Projects</a>
            </li>
        </AnchorLink>
        <AnchorLink offset={50} href="#education">
            <li>
                <a className="hover:font-bold hover:text-indigo-400">Education</a>
            </li>
        </AnchorLink>
    </>
);

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <GiHamburgerMenu className="text-3xl hover:text-white transition duration-300" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-lg dropdown-content text-slate-100 bg-indigo-600/30 backdrop-blur-md rounded-box z-[60] w-72 p-5 shadow-lg border border-white/20"
                    >
                        {navLink}
                    </ul>
                </div>
                <a className="pl-0 lg:pl-5">
                    <img
                        className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                        src={logo_img}
                        alt="logo_img"
                    />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-5 space-x-5 text-white">{navLink}</ul>
            </div>
            <div className="navbar-end pr-5">
                <AnchorLink offset={50} href="#contact">
                    <a className="btn bg-gradient-to-r from-indigo-600 via-pink-500 to-pink-500 rounded-3xl text-slate-100 px-6 hover:scale-105 transition-transform duration-300 shadow-lg border-none font-bold">
                        Contact me
                    </a>
                </AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;