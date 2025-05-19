import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../assets/Hossain Ahamed Khan Resume.pdf';

const Hero = () => {
    return (
        <div className="hero min-h-96 py-8">
            <div className="text-center relative z-10">
                <div className="w-full lg:w-3/5 mx-auto p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 space-y-6">
                    <p className="text-lg text-slate-200">I&apos;m</p>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text animate-fade-in">
                        Hossain Ahamed Khan
                    </h1>
                    <p className="text-2xl text-slate-200 animate-fade-in">MERN Stack Developer</p>
                    <p className="py-3 text-slate-200 animate-fade-in">
                        I specialize in building responsive, scalable web applications. With expertise in MongoDB, Express, React, and Node.js, I create seamless user experiences, from the backend to the front. Passionate about clean code, optimized performance, and delivering high-quality solutions.
                    </p>
                    <div className="space-x-6 pt-3">
                        <AnchorLink offset={50} href="#contact">
                            <button className="btn bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl text-slate-100 px-6 hover:scale-105 transition-transform duration-300 shadow-lg border-none font-bold">
                                Contact me
                            </button>
                        </AnchorLink>
                        <a href={resume} download="resume">
                            <button className="btn btn-outline rounded-3xl text-slate-100 px-6 border-slate-100 hover:bg-slate-100 hover:text-indigo-900 transition duration-300">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;