import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Globe } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="section-container">
            <div className="tw:bg-slate-900 tw:dark:bg-slate-900 tw:rounded-[2rem] tw:overflow-hidden tw:shadow-2xl">
                <div className="tw:grid tw:lg:grid-cols-2">
                    {/* Info Side */}
                    <div className="tw:p-12 tw:lg:p-20 tw:bg-brand-500 tw:text-white">
                        <h2 className="tw:text-sm tw:font-mono tw:uppercase tw:tracking-widest tw:mb-6 tw:opacity-80">
                            Contact
                        </h2>
                        <h3 className="tw:text-4xl tw:md:text-5xl tw:font-display tw:font-bold tw:mb-8">
                            Let's build something <br />
                            <span className="tw:opacity-60">Secure & Scalable.</span>
                        </h3>
                        
                        <div className="tw:space-y-8 tw:mt-12">
                            <a href="mailto:hello@wanman.dev" className="tw:flex tw:items-center tw:gap-4 tw:group">
                                <div className="tw:bg-white/10 tw:p-4 tw:rounded-2xl tw:group-hover:bg-white/20 tw:transition-colors">
                                    <Mail className="tw:h-6 tw:w-6" />
                                </div>
                                <div>
                                    <div className="tw:text-xs tw:opacity-60 tw:uppercase tw:tracking-wider tw:mb-1">Email</div>
                                    <div className="tw:text-xl tw:font-medium">hello@wanman.dev</div>
                                </div>
                            </a>

                            <div className="tw:flex tw:items-center tw:gap-4">
                                <div className="tw:bg-white/10 tw:p-4 tw:rounded-2xl">
                                    <Globe className="tw:h-6 tw:w-6" />
                                </div>
                                <div>
                                    <div className="tw:text-xs tw:opacity-60 tw:uppercase tw:tracking-wider tw:mb-1">Availability</div>
                                    <div className="tw:text-xl tw:font-medium">Open to Staff EMEA Remote</div>
                                </div>
                            </div>

                            <div className="tw:flex tw:items-center tw:gap-4">
                                <div className="tw:bg-white/10 tw:p-4 tw:rounded-2xl">
                                    <MapPin className="tw:h-6 tw:w-6" />
                                </div>
                                <div>
                                    <div className="tw:text-xs tw:opacity-60 tw:uppercase tw:tracking-wider tw:mb-1">Location</div>
                                    <div className="tw:text-xl tw:font-medium">Granada, Spain (CET)</div>
                                </div>
                            </div>
                        </div>

                        <div className="tw:flex tw:gap-4 tw:mt-16">
                            <a href="#" className="tw:bg-white/10 tw:p-3 tw:rounded-xl tw:hover:bg-white/20 tw:transition-colors">
                                <Linkedin className="tw:h-6 tw:w-6" />
                            </a>
                            <a href="#" className="tw:bg-white/10 tw:p-3 tw:rounded-xl tw:hover:bg-white/20 tw:transition-colors">
                                <Github className="tw:h-6 tw:w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Form Side (Subtle) */}
                    <div className="tw:p-12 tw:lg:p-20 tw:flex tw:flex-col tw:justify-center">
                        <p className="tw:text-xl tw:text-slate-400 tw:leading-relaxed tw:mb-12">
                            Whether you're looking for a staff-level engineer to lead your identity strategy or need to harden your backend architecture, I'm happy to chat.
                        </p>
                        
                        <div className="tw:space-y-6">
                            <div className="tw:p-6 tw:rounded-2xl tw:bg-slate-800/50 tw:border tw:border-slate-700">
                                <h4 className="tw:text-white tw:font-bold tw:mb-2">Staff Engineering Leadership</h4>
                                <p className="tw:text-sm tw:text-slate-400">Available for architecture reviews, identity strategy, and technical leadership roles.</p>
                            </div>
                            
                            <div className="tw:p-6 tw:rounded-2xl tw:bg-slate-800/50 tw:border tw:border-slate-700">
                                <h4 className="tw:text-white tw:font-bold tw:mb-2">EMEA Remote Expert</h4>
                                <p className="tw:text-sm tw:text-slate-400">Experienced in leading distributed teams across European and Middle Eastern time zones.</p>
                            </div>
                        </div>

                        <div className="tw:mt-12">
                            <a href="mailto:hello@wanman.dev" className="btn btn-primary tw:w-full">
                                Send Message
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
