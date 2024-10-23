import diagnostic_img from '../assets/diagnostic_center.jpg';
import art_img from '../assets/Art_and_Craft.jpg';
import real_estate from '../assets/real_estate.jpg';

const MyProjects = () => {
    return (
        <div id='projects' className="w-11/12 lg:w-3/5 mx-auto mb-20 lg:mb-36">

            <h1 className="text-3xl font-bold text-center mb-10">My Projects</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-4 lg:gap-6">

                <div className="card bg-base-300 shadow-xl p-3">
                    <figure className='p-2'>
                        <img className='w-full h-52 rounded-xl'
                            src={diagnostic_img}
                            alt="diagnostic_img" />
                    </figure>
                    <div className="p-3">
                        <h2 className="text-xl font-semibold">Diagnostic Center</h2>
                        <p className='text-sm my-2'>Where you can book any test online and recive the test result</p>
                        <ul className="list-disc text-xs pl-3">
                            <li>Schedule for a test.</li>
                            <li>Online report access.</li>
                            <li>Payment and billing options.</li>
                        </ul>
                        <div className="text-xs flex justify-between flex-wrap my-4">
                            <span className='px-2 lg:px-3 py-1 bg-slate-700 rounded-2xl'>MongoDB</span>
                            <span className='px-2 lg:px-3 py-1 bg-slate-700 rounded-2xl'>Express</span>
                            <span className='px-2 lg:px-3 py-1 bg-slate-700 rounded-2xl'>React</span>
                            <span className='px-2 lg:px-3 py-1 bg-slate-700 rounded-2xl'>Node</span>
                        </div>
                        <div className='text-xs font-semibold flex justify-between py-2'>
                            <a href="https://github.com/hossain-ahamed-khan/Famous-Diagnostic-Center-Client" target='blank'>
                                <button className='px-4 py-2 border border-slate-100 rounded-3xl text-slate-100'>GitHub Source</button>
                            </a>
                            <a href="https://diagnostic-center-9996e.web.app/" target='blank'>
                                <button className='px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-slate-100'>Go Live</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="card bg-base-300 shadow-xl p-3">
                    <figure className='p-2'>
                        <img className='w-full h-52 rounded-xl'
                            src={art_img}
                            alt="art_img" />
                    </figure>
                    <div className="p-3">
                        <h2 className="text-xl font-semibold">Art & Craft</h2>
                        <p className='text-sm my-2'>Where you can book any art online and add your art and craft</p>
                        <ul className="list-disc text-xs pl-3">
                            <li>Product Catalog with Filters.</li>
                            <li>Online request for an art.</li>
                            <li>Payment and billing options.</li>
                        </ul>
                        <div className="text-xs flex justify-between flex-wrap my-4">
                            <span className='px-2 lg:px-3 py-1 bg-slate-700 rounded-2xl'>MongoDB</span>
                            <span className='px-2 lg:px-3 py-1 bg-slate-700 rounded-2xl'>Express</span>
                            <span className='px-2 lg:px-3 py-1 bg-slate-700 rounded-2xl'>React</span>
                            <span className='px-2 lg:px-3 py-1 bg-slate-700 rounded-2xl'>Node</span>
                        </div>
                        <div className='text-xs font-semibold flex justify-between py-2'>
                            <a href="https://github.com/hossain-ahamed-khan/Precious-Art-And-Craft-Client" target='blank'>
                                <button className='px-4 py-2 border border-slate-100 rounded-3xl text-slate-100'>GitHub Source</button>
                            </a>
                            <a href="https://art-and-crafts-feba1.web.app/" target='blank'>
                                <button className='px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-slate-100'>Go Live</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="card bg-base-300 shadow-xl p-3">
                    <figure className='p-2'>
                        <img className='w-full h-52 rounded-xl'
                            src={real_estate}
                            alt="real_estate" />
                    </figure>
                    <div className="p-3">
                        <h2 className="text-xl font-semibold">Real Estate</h2>
                        <p className='text-sm my-2'>Where you can find your desire  real estate deal in one place</p>
                        <ul className="list-disc text-xs pl-3">
                            <li>Property Search with Filters.</li>
                            <li>Virtual Tours & High-Quality Photos.</li>
                            <li>Mortgage Calculator & Financial Tools.</li>
                        </ul>
                        <div className="text-xs flex justify-between flex-wrap my-4">
                            <span className='px-2 lg:px-3 py-1 bg-slate-700 rounded-2xl'>Firebase</span>
                            <span className='px-2 lg:px-3 py-1 bg-slate-700 rounded-2xl'>JWT</span>
                            <span className='px-2 lg:px-3 py-1 bg-slate-700 rounded-2xl'>React</span>
                            <span className='px-2 lg:px-3 py-1 bg-slate-700 rounded-2xl'>Node</span>
                        </div>
                        <div className='text-xs font-semibold flex justify-between py-2'>
                            <a href="https://github.com/hossain-ahamed-khan/Nokkhotro-Real-Estate" target='blank'>
                                <button className='px-4 py-2 border border-slate-100 rounded-3xl text-slate-100'>GitHub Source</button>
                            </a>
                            <a href="https://real-estate-a2758.web.app/" target='blank'>
                                <button className='px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl text-slate-100'>Go Live</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyProjects;