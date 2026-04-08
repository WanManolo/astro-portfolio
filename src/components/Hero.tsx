import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Download, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <section className="tw:relative tw:min-h-screen tw:flex tw:items-center tw:justify-center tw:pt-20 tw:overflow-hidden">
            <div className="tw:max-w-6xl tw:mx-auto tw:px-6 tw:w-full">
                <div className="tw:grid tw:lg:grid-cols-[1.2fr,0.8fr] tw:gap-12 tw:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="tw:space-y-8"
                    >
                        <div className="tw:space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="tw:flex tw:items-center tw:gap-3"
                            >
                                <span className="badge badge-brand">
                                    <span className="tw:flex tw:items-center tw:gap-1.5">
                                        <span className="tw:relative tw:flex tw:h-2 tw:w-2">
                                            <span className="tw:animate-ping tw:absolute tw:inline-flex tw:h-full tw:w-full tw:rounded-full tw:bg-brand-400 tw:opacity-75"></span>
                                            <span className="tw:relative tw:inline-flex tw:rounded-full tw:h-2 tw:w-2 tw:bg-brand-500"></span>
                                        </span>
                                        Open to Staff/Senior EMEA roles
                                    </span>
                                </span>
                            </motion.div>

                            <h1 className="tw:text-5xl tw:md:text-7xl tw:font-display tw:font-bold tw:tracking-tight tw:leading-[1.1]">
                                Juanma <br />
                                <span className="heading-gradient">Rodríguez</span>
                            </h1>

                            <p className="tw:text-xl tw:md:text-2xl tw:font-medium tw:text-slate-600 tw:dark:text-slate-400">
                                Staff Software Engineer <br />
                                <span className="tw:text-slate-400 tw:dark:text-slate-500 tw:text-lg">
                                    Specialized in Backend, Identity, and Security.
                                </span>
                            </p>
                        </div>

                        <p className="tw:max-w-xl tw:text-lg tw:leading-relaxed tw:text-slate-600 tw:dark:text-slate-400">
                            10+ years architecting distributed systems and hardening identity flows. Based in Granada, Spain, serving global EMEA teams.
                        </p>

                        <div className="tw:flex tw:flex-wrap tw:gap-4 tw:pt-4">
                            <a href="#contact" className="btn btn-primary">
                                Get in touch
                                <ArrowRight className="tw:ml-2 tw:h-4 tw:w-4" />
                            </a>
                            <a href="#experience" className="btn btn-secondary">
                                View Experience
                            </a>
                            <a href="/cv.pdf" download className="btn btn-secondary">
                                <Download className="tw:mr-2 tw:h-4 tw:w-4" />
                                Download CV
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="tw:hidden tw:lg:block tw:relative"
                    >
                        <div className="tw:absolute tw:inset-0 tw:bg-brand-500/10 tw:blur-3xl tw:rounded-full tw:animate-pulse"></div>
                        <div className="tw:relative tw:bg-slate-900/5 tw:dark:bg-white/5 tw:border tw:border-slate-200 tw:dark:border-white/10 tw:backdrop-blur-sm tw:rounded-2xl tw:p-8 tw:shadow-2xl">
                            <div className="tw:flex tw:items-center tw:gap-4 tw:mb-8">
                                <div className="tw:bg-brand-500/10 tw:p-3 tw:rounded-xl">
                                    <Shield className="tw:h-8 tw:w-8 tw:text-brand-500" />
                                </div>
                                <div>
                                    <div className="tw:text-xs tw:font-mono tw:text-brand-500">CORE_EXPERTISE</div>
                                    <div className="tw:font-display tw:font-bold">Identity & Security</div>
                                </div>
                            </div>

                            <div className="tw:space-y-4">
                                {[
                                    { label: 'IAM Architectures', value: 'OAuth 2.0 / OIDC' },
                                    { label: 'Backend Scale', value: 'Distributed Systems' },
                                    { label: 'Security Focus', value: 'Ethical Hacking' },
                                ].map((stat, i) => (
                                    <div key={i} className="tw:p-4 tw:rounded-xl tw:bg-white/50 tw:dark:bg-slate-800/50 tw:border tw:border-slate-100 tw:dark:border-slate-700">
                                        <div className="tw:text-xs tw:text-slate-400 tw:mb-1">{stat.label}</div>
                                        <div className="tw:font-medium">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
