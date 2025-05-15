import edu_img from '../assets/education.png';

const Education = () => {
    return (
        <div id='education' className="w-11/12 lg:w-3/5 mx-auto mb-16 relative">

            <h1 className="text-4xl font-bold text-center text-white mb-8">Education</h1>

            <div className="flex flex-col lg:flex-row bg-white/10 backdrop-blur-md border border-white/20 text-slate-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Left Section: Content */}
                <div className="space-y-4 flex-1">
                    <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        BSc in Software Engineering
                    </h2>
                    <p className="text-lg font-semibold text-indigo-300">At Daffodil International University</p>
                    <p className="text-sm text-slate-200">From 2015 to 2019</p>
                </div>

                {/* Right Section: Image */}
                <figure className="flex-1 flex justify-center items-center">
                    <img
                        className="w-72 lg:w-96 h-52 lg:h-72 hover:scale-105 transition-transform duration-300"
                        src={edu_img}
                        alt="Education"
                    />
                </figure>
            </div>
        </div>
    );
};

export default Education;