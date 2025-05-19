import diagnostic_img from '../assets/diagnostic_center.jpg';
import trendora_img from '../assets/trendora.jpg';
import papyrus_img from '../assets/papyrus.jpg';

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

                {/* Trendora Card */}
                <a href="https://trendora-black.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className="h-[560px] card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <figure className="p-2">
                            <img className="w-full h-52 rounded-xl object-cover" src={trendora_img} alt="Real Estate" />
                        </figure>
                        <div className="p-3">
                            <h2 className="text-xl font-semibold text-white">SwapNest (Buy and sell second-hand products)</h2>
                            <p className="text-sm text-slate-300 my-2">SwapNest is a modern web platform designed to simplify the exchange of second-hand goods. This SwapNest, crafted with contemporary web technologies to deliver an intuitive, fast, and user-friendly marketplace experience.</p>
                            <ul className="list-disc text-xs pl-3 text-slate-300">
                                <li>Users can list, browse, and purchase second-hand products.</li>
                                <li>Browse products by category for quick access.</li>
                                <li>Advanced search and filtering for better discovery.</li>
                            </ul>
                            <div className="text-xs flex justify-between flex-wrap my-4">
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">TypeScript</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">React</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">Express</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">Node</span>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Papyrus Card */}
                <a href="https://papyrus-client.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className="h-[560px] card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <figure className="p-2">
                            <img className="w-full h-52 rounded-xl object-cover" src={papyrus_img} alt="Real Estate" />
                        </figure>
                        <div className="p-3">
                            <h2 className="text-xl font-semibold text-white">Papyrus (E-commerce platform for stationery products)</h2>
                            <p className="text-sm text-slate-300 my-2">Papyrus is an e-commerce platform for stationery products. It allows users to browse a wide range of stationery items, add them to the cart, and make secure payments. Users can manage their profiles and view order history, while admins can manage products, orders, and users.</p>
                            <ul className="list-disc text-xs pl-3 text-slate-300">
                                <li>Browse and view all available stationery products.</li>
                                <li>Add products to the cart and manage cart items.</li>
                                <li>Checkout and make payments using ShurjoPay.</li>
                            </ul>
                            <div className="text-xs flex justify-between flex-wrap my-4">
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">Next Js</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">MongoDB</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">Express</span>
                                <span className="px-2 lg:px-3 py-1 bg-indigo-500 text-white rounded-2xl">Node</span>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Diagnostic Center Card */}
                <a href="https://diagnostic-center-9996e.web.app/" target="_blank" rel="noopener noreferrer">
                    <div className="h-[560px] card bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-4 hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                        <figure className="p-2">
                            <img className="w-full h-52 rounded-xl object-cover" src={diagnostic_img} alt="Diagnostic Center" />
                        </figure>
                        <div className="p-3">
                            <h2 className="text-xl font-semibold text-white">Diagnostic Center</h2>
                            <p className="text-sm text-slate-300 my-2">This diagnostic center management system is a web application designed to streamline and manage diagnostic center operations. It includes features for scheduling appointments, managing patient records, processing payments, and generating diagnostic reports.</p>
                            <ul className="list-disc text-xs pl-3 text-slate-300">
                                <li>View the diagnostic center for all test details</li>
                                <li>Payment through the stripe payment method</li>
                                <li>Patient and admin separate portal</li>
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
            </div>
        </div>
    );
};

export default MyProjects;