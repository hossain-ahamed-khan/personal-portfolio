import exp_img from '../assets/experience-high-resolution-logo-transparent.png';

const Experience = () => {
    return (
        <div className="w-3/5 flex mx-auto bg-gradient-to-r from-[#07366b] via-[#21354d] to-[#1d232a] text-slate-100 rounded-lg p-6 my-10">
            <div className="w-1/4">
                <img className='w-1/2 mx-auto h-64' src={exp_img} alt="EXPERIENCE" />
            </div>
            <div className="w-3/4 flex flex-col justify-center">
                <p className="text-md font-bold">Frontend Developer</p>
                <h1 className="text-3xl font-bold">Automation Services Ltd</h1>
                <p>oct 2022 - nov 2023</p>
                <ul className="list-disc p-1 lg:p-6 text-xs lg:text-md">
                    <li>Built responsive web applications with React.</li>
                    <li>Managed projects and maintained software documentation.</li>
                    <li>Performed web application testing for functionality and quality.</li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;