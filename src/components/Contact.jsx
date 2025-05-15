import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_9r6vu57', 'template_p6b15lq', form.current, {
                publicKey: '5beIwo0WWoUmHfSbr',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    Swal.fire({
                        title: "Message Sent",
                        text: "You successfully sent the message",
                        icon: "success"
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div id="contact" className="w-11/12 lg:w-3/5 mx-auto mb-16 relative">

            <h1 className="text-4xl font-bold text-center text-white mb-10">Get in Touch</h1>

            <div className="flex flex-col lg:flex-row gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Left Section */}
                <div className="w-full lg:w-2/5 space-y-6">
                    <h2 className="text-3xl font-bold text-white">Let&apos;s Talk</h2>
                    <p className="text-slate-200">
                        I&apos;m available to discuss new projects. Feel free to send me a message about anything you&apos;d like to work on.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <CiMail className="text-2xl text-indigo-400" />
                            <p className="text-slate-200">hossainahamedk@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaGithub className="text-2xl text-indigo-400" />
                            <a href="https://github.com/hossain-ahamed-khan" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-indigo-500 transition duration-300">
                                GitHub
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <CiLinkedin className="text-2xl text-indigo-400" />
                            <a href="https://www.linkedin.com/in/hossain-ahamed-khan-103307326/" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-indigo-500 transition duration-300">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section: Form */}
                <div className="w-full lg:w-3/5">
                    <form ref={form} onSubmit={sendEmail} className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 p-4 rounded-xl shadow-xl">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md font-semibold text-white">Name</span>
                            </label>
                            <input className="bg-white/10 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-300" type="text" name="user_name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md font-semibold text-white">Email</span>
                            </label>
                            <input className="bg-white/10 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-300" type="email" name="user_email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md font-semibold text-white">Message</span>
                            </label>
                            <textarea className="bg-white/10 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-300" name="message" rows="4" placeholder="Write your message" required></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg border-none">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;