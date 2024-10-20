import edu_img from '../assets/education.png';

const Education = () => {
    return (
        <div id='education' className="w-3/5 mx-auto my-14">
            <h1 className='text-3xl font-bold text-center mb-4'>Education</h1>
            <div className="flex flex-col lg:flex-row shadow-xl bg-gradient-to-r from-[#1d232a] via-[#21354d] to-[#07366b] text-slate-100 rounded-lg p-6">
                <div className="space-y-3">
                    <h2 className="text-3xl lg:text-5xl font-bold">BSc in Software Engineering</h2>
                    <p className='text-lg font-semibold'>At Daffodil International University</p>
                    <p>From 2015 to 2019</p>
                </div>
                <figure>
                    <img className='w-72 lg:w-96 h-52 lg:h-72'
                        src={edu_img}
                        alt="edu_img" />
                </figure>
            </div>

        </div>
    );
};

export default Education;