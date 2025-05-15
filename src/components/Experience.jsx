import exp_img from '../assets/experience-high-resolution-logo-transparent.png';

const Experience = () => {
    return (
        <div id='experience' className="w-11/12 lg:w-3/5 mx-auto mb-16 relative">
            {/* Background Animation */}
            <div className="absolute inset-0 -z-10">
                <div className="w-96 h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl absolute top-10 left-10 animate-pulse"></div>
                <div className="w-72 h-72 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 rounded-full blur-3xl absolute bottom-10 right-10 animate-pulse"></div>
            </div>

            <div className="flex bg-white/10 backdrop-blur-md border border-white/20 text-slate-100 rounded-xl px-6 py-10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Left Section: Image */}
                <div className="w-1/4 flex justify-center items-center">
                    <img
                        className="w-3/4 h-64 object-contain rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                        src={exp_img}
                        alt="EXPERIENCE"
                    />
                </div>

                {/* Right Section: Content */}
                <div className="w-3/4 flex flex-col justify-center space-y-1">
                    <p className="text-md font-bold text-indigo-400">Jr System Analyst</p>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text pb-8">
                        Automation Services Ltd
                    </h1>
                    <p className="text-sm text-slate-200">Oct 2022 - Nov 2023</p>
                    <ul className="list-disc pl-5 text-sm lg:text-md text-slate-200 space-y-2">
                        <li>Collected and analyzed business requirements to support system development.</li>
                        <li>Created detailed documentation of system processes, workflows, and technical specifications.</li>
                        <li>Assisted in system testing, identifying bugs, and resolving technical issues.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;