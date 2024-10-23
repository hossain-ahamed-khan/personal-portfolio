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
                        title: "Message Send",
                        text: "You successfully send the message",
                        icon: "success"
                    });

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div id="contact" className="w-11/12 lg:w-3/5 mx-auto mb-20 lg:mb-36">
            <h1 className="text-3xl font-bold my-10 text-center">Get in touch</h1>

            <div className="flex flex-col lg:flex-row gap-6">

                <div className="w-full lg:w-2/5 p-4">
                    <h1 className="text-3xl font-bold">Let&apos;s talk</h1>
                    <p className="py-6">
                        Im available to talk about new projects, so feel free to send me a message about anything you want to work on.
                    </p>
                    <div className="space-y-1">
                        <div className="flex gap-2 items-center">
                            <CiMail className="text-xl" />
                            <p>hossainahamedk@gmail.com</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaGithub className="text-xl" />
                            <a href="https://github.com/hossain-ahamed-khan" target="blank"><p>GitHub</p></a>
                        </div>
                        <div className="flex gap-2 items-center">
                            <CiLinkedin className="text-xl" />
                            <a href="https://www.linkedin.com/in/hossain-ahamed-khan-103307326/" target="blank"><p>LinkedIn</p></a>
                        </div>

                    </div>
                </div>

                <div className="w-full lg:w-3/5">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md font-semibold">Name</span>
                            </label>
                            <input className="bg-slate-700 p-2 rounded-lg" type="text" name="user_name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md font-semibold">Email</span>
                            </label>
                            <input className="bg-slate-700 p-2 rounded-lg" type="email" name="user_email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md font-semibold">Message</span>
                            </label>
                            <textarea className="bg-slate-700 p-2 rounded-lg" type="text" name="message" rows="5" placeholder="Write your message" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary"><input type="submit" value="Send" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;