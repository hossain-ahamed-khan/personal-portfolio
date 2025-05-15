import diagnostic_img from '../assets/diagnostic_center.jpg';
import art_img from '../assets/Art_and_Craft.jpg';
import real_estate from '../assets/real_estate.jpg';

const MyProjects = () => {
    return (
        <div id='projects' className="w-11/12 lg:w-3/5 mx-auto mb-16 relative">
            {/* Background Animation */}
            <div className="absolute inset-0 -z-10">
                <div className="w-96 h-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl absolute top-10 left-10 animate-pulse"></div>
                <div className="w-72 h-72 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-20 rounded-full blur-3xl absolute bottom-10 right-10 animate-pulse"></div>
            </div>

            <h1 className="text-4xl font-bold text-center text-white mb-8">My Projects</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Diagnostic Center Card */}
                <a href="https://diagnostic-center-9996e.web.app/" target="_blank" rel="noopener noreferrer">
                    <div className="card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <figure className="p-2">
                            <img className="w-full h-52 rounded-xl object-cover" src={diagnostic_img} alt="Diagnostic Center" />
                        </figure>
                        <div className="p-3">
                            <h2 className="text-xl font-semibold text-white">Diagnostic Center</h2>
                            <p className="text-sm text-slate-300 my-2">Where you can book any test online and receive the test result</p>
                            <ul className="list-disc text-xs pl-3 text-slate-300">
                                <li>Schedule for a test.</li>
                                <li>Online report access.</li>
                                <li>Payment and billing options.</li>
                            </ul>
                            <div className="text-xs flex justify-between flex-wrap my-4">
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">MongoDB</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">Express</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">React</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">Node</span>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Art & Craft Card */}
                <a href="https://art-and-crafts-feba1.web.app/" target="_blank" rel="noopener noreferrer">
                    <div className="card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <figure className="p-2">
                            <img className="w-full h-52 rounded-xl object-cover" src={art_img} alt="Art & Craft" />
                        </figure>
                        <div className="p-3">
                            <h2 className="text-xl font-semibold text-white">Art & Craft</h2>
                            <p className="text-sm text-slate-300 my-2">Where you can book any art online and add your art and craft</p>
                            <ul className="list-disc text-xs pl-3 text-slate-300">
                                <li>Product Catalog with Filters.</li>
                                <li>Online request for an art.</li>
                                <li>Payment and billing options.</li>
                            </ul>
                            <div className="text-xs flex justify-between flex-wrap my-4">
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">MongoDB</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">Express</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">React</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">Node</span>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Real Estate Card */}
                <a href="https://real-estate-a2758.web.app/" target="_blank" rel="noopener noreferrer">
                    <div className="card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <figure className="p-2">
                            <img className="w-full h-52 rounded-xl object-cover" src={real_estate} alt="Real Estate" />
                        </figure>
                        <div className="p-3">
                            <h2 className="text-xl font-semibold text-white">Real Estate</h2>
                            <p className="text-sm text-slate-300 my-2">Where you can find your desired real estate deal in one place</p>
                            <ul className="list-disc text-xs pl-3 text-slate-300">
                                <li>Property Search with Filters.</li>
                                <li>Virtual Tours & High-Quality Photos.</li>
                                <li>Mortgage Calculator & Financial Tools.</li>
                            </ul>
                            <div className="text-xs flex justify-between flex-wrap my-4">
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">Firebase</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">JWT</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">React</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">Node</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default MyProjects;