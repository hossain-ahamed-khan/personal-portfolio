import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="relative">
            <footer className="footer bg-white/10 backdrop-blur-md border border-white/20 p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-slate-300">
                <div className="w-11/12 lg:w-3/5 mx-auto flex flex-col lg:flex-row justify-evenly items-center ">
                    {/* Services Section */}
                    <nav className="w-full lg:w-1/3 space-y-4 flex flex-col">
                        <h6 className="text-xl font-bold text-white">Services</h6>
                        <a className="link link-hover text-slate-300 hover:text-indigo-400 transition duration-300">Development</a>
                        <a className="link link-hover text-slate-300 hover:text-indigo-400 transition duration-300">Design</a>
                        <a className="link link-hover text-slate-300 hover:text-indigo-400 transition duration-300">Marketing</a>
                        <a className="link link-hover text-slate-300 hover:text-indigo-400 transition duration-300">Advertisement</a>
                    </nav>

                    {/* About Section */}
                    <nav className="w-full lg:w-1/3 space-y-4 flex flex-col">
                        <h6 className="text-xl font-bold text-white">About</h6>
                        <a className="link link-hover text-slate-300 hover:text-indigo-400 transition duration-300">About us</a>
                        <a className="link link-hover text-slate-300 hover:text-indigo-400 transition duration-300">Contact</a>
                        <a className="link link-hover text-slate-300 hover:text-indigo-400 transition duration-300">Blogs</a>
                        <a className="link link-hover text-slate-300 hover:text-indigo-400 transition duration-300">Press kit</a>
                    </nav>

                    {/* Social Section */}
                    <nav className="w-full lg:w-1/3 space-y-4 flex flex-col">
                        <h6 className="text-xl font-bold text-white">Social</h6>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-500 transition duration-300">
                                <FaFacebook className="text-3xl hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a href="https://www.linkedin.com/in/hossain-ahamed-khan-103307326/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-500 transition duration-300">
                                <FaLinkedin className="text-3xl hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a href="https://github.com/hossain-ahamed-khan" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-500 transition duration-300">
                                <FaGithub className="text-3xl hover:scale-110 transition-transform duration-300" />
                            </a>
                        </div>
                    </nav>
                </div>
            </footer>

            <p className="bg-white/10 backdrop-blur-md border-t border-white/20 text-slate-300 text-center py-4 rounded-b-xl shadow-lg">
                Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
        </div>
    );
};

export default Footer;