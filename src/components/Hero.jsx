import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../assets/Hossain Ahamed Khan_Resume.pdf';

const Hero = () => {
    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <p>I&apos;m</p>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Hossain Ahamed Khan</h1>
                    <p className="pt-3 text-xl">MERN Stack Developer</p>
                    <p className="py-3">
                        I am specializ in building responsive, scalable web applications. With expertise in MongoDB, Express, React, and Node.js, I create seamless user experiences, from the backend to the front. Passionate about clean code, optimized performance, and delivering high-quality solutions.
                    </p>
                    <div className="space-x-6 pt-3">
                        <AnchorLink offset={50} href="#contact">
                            <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-slate-100 px-6">Contact me</button>
                        </AnchorLink>
                        <a href={resume} download="resume">
                            <button className="btn btn-outline rounded-3xl text-slate-100 px-6">Download Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;