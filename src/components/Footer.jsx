import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-300 text-base-content p-10">
                <nav className="w-full justify-start lg:justify-center">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Development</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="w-full justify-start lg:justify-center">
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="w-full justify-start lg:justify-center">
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/hossain-ahamed-khan-103307326/" target="blank">
                            <FaLinkedin className="text-2xl" />
                        </a>
                        <a href="https://github.com/hossain-ahamed-khan" target="blank">
                            <FaGithub className="text-2xl" />
                        </a>
                    </div>
                </nav>
            </footer>
            <p className="bg-base-300 text-base-content p-5 text-center">Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
    );
};

export default Footer;