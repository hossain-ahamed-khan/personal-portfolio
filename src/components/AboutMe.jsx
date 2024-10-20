import figma_img from '../assets/figma.png';
import node_img from '../assets/node-js.png';
import javascript_img from '../assets/javascript.png';
import css_img from '../assets/css3.png';
import express_img from '../assets/express-js.png';
import mongo_img from '../assets/mongodb.png';
import react_img from '../assets/react.png';
import tailwind_img from '../assets/tailwind.png';
import nextjs_img from '../assets/nextjs.png';
import github_img from '../assets/github.png';
import typeScript from '../assets/typeScript.png';
import firebase_img from '../assets/firebase-vertical.png';

const tools = [
    {
        id: "1",
        name: "Figma",
        description: "Design tool",
        image: figma_img
    },
    {
        id: "2",
        name: "Node.js",
        description: "Web Server",
        image: node_img
    },
    {
        id: "3",
        name: "JavaScript",
        description: "Interaction",
        image: javascript_img
    },
    {
        id: "4",
        name: "CSS3",
        description: "User Interface",
        image: css_img
    },
    {
        id: "5",
        name: "Express.js",
        description: "Node Framework",
        image: express_img
    },
    {
        id: "6",
        name: "MongoDB",
        description: "Database",
        image: mongo_img
    },
    {
        id: "7",
        name: "React",
        description: "Js Library",
        image: react_img
    },
    {
        id: "8",
        name: "Tailwind",
        description: "User Interface",
        image: tailwind_img
    },
    {
        id: "9",
        name: "Next.js",
        description: "Framework",
        image: nextjs_img
    },
    {
        id: "10",
        name: "Github",
        description: "Version control",
        image: github_img
    },
    {
        id: "11",
        name: "TypeScript",
        description: "Interaction",
        image: typeScript
    },
    {
        id: "12",
        name: "Firebase",
        description: "Authentication",
        image: firebase_img
    },


]
const AboutMe = () => {
    return (
        <div id='about-me' className='w-3/5 mx-auto mb-20'>
            <h1 className='text-3xl my-3 font-bold'>Technologies and Tools I Use</h1>
            <p className='mb-6 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint unde minima dolor repellendus quisquam nisi amet deserunt impedit perferendis iste!</p>

            <div className='grid grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-3'>
                {
                    tools.map((tool) =>
                        <div key={tool.id} className='w-full border border-slate-700 rounded-xl p-2'>
                            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-3 bg-base-100">
                                <figure>
                                    <img className='w-10 h-10 rounded-xl'
                                        src={tool.image}
                                        alt="skill image" />
                                </figure>
                                <div>
                                    <h2 className="text-md font-semibold">{tool.name}</h2>
                                    <p className='text-xs'>{tool.description}</p>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>

        </div>
    );
};

export default AboutMe;