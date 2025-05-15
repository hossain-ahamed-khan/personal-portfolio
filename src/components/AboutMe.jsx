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
    { id: "1", name: "Figma", description: "Design tool", image: figma_img },
    { id: "2", name: "Node.js", description: "Web Server", image: node_img },
    { id: "3", name: "JavaScript", description: "Interaction", image: javascript_img },
    { id: "4", name: "CSS3", description: "User Interface", image: css_img },
    { id: "5", name: "Express.js", description: "Node Framework", image: express_img },
    { id: "6", name: "MongoDB", description: "Database", image: mongo_img },
    { id: "7", name: "React", description: "Js Library", image: react_img },
    { id: "8", name: "Tailwind", description: "User Interface", image: tailwind_img },
    { id: "9", name: "Next.js", description: "Framework", image: nextjs_img },
    { id: "10", name: "Github", description: "Version control", image: github_img },
    { id: "11", name: "TypeScript", description: "Interaction", image: typeScript },
    { id: "12", name: "Firebase", description: "Authentication", image: firebase_img },
];

const AboutMe = () => {
    return (
        <div id='about-me' className='w-11/12 lg:w-3/5 mx-auto mb-16'>
            <h1 className='text-4xl font-bold text-center text-white mb-6'>Technologies and Tools I Use</h1>
            <p className='text-center text-slate-300 mb-10'>
                Here are some commonly used technologies and tools I work with, especially in the MERN stack.
            </p>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
                {tools.map((tool) => (
                    <div
                        key={tool.id}
                        className='group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300'
                    >
                        <div className="flex flex-col items-center gap-3">
                            <figure className="w-16 h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-full shadow-md">
                                <img
                                    className='w-full h-full object-contain rounded-full'
                                    src={tool.image}
                                    alt={`${tool.name} logo`}
                                />
                            </figure>
                            <div className="text-center">
                                <h2 className="text-lg font-semibold text-white">{tool.name}</h2>
                                <p className='text-sm text-slate-300'>{tool.description}</p>
                            </div>
                        </div>
                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutMe;