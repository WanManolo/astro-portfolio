import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

const experiences = [
    {
        title: 'Staff Software Engineer (Identity & Security)',
        company: '[Enterprise Security Company]',
        location: 'Remote (EMEA)',
        period: '2021 — Present',
        description: 'Architecting distributed IAM systems handling millions of authentication flows. Leading secure software development initiatives and security research.',
        achievements: [
            'Designed and implemented a high-scale OAuth 2.0 / OIDC provider layer.',
            'Reduced security vulnerabilities by 40% through automated DevSecOps pipelines.',
            'Mentored a team of 10+ engineers on secure coding practices and distributed architecture.'
        ]
    },
    {
        title: 'Senior Backend Engineer',
        company: '[Tech Scale-up]',
        location: 'Granada, Spain',
        period: '2018 — 2021',
        description: 'Led the backend team in building a high-traffic fintech platform. Focused on performance, security, and scalability.',
        achievements: [
            'Scaled API infrastructure to handle 10k+ requests per second.',
            'Refactored monolithic architecture into secure microservices.',
            'Implemented real-time fraud detection systems using machine learning models.'
        ]
    },
    {
        title: 'Security Researcher & Backend Developer',
        company: '[Software Solutions]',
        location: 'Granada, Spain',
        period: '2014 — 2018',
        description: 'Combined offensive security skills with robust backend development to deliver hardened applications for international clients.',
        achievements: [
            'Performed penetration tests and vulnerability assessments for financial clients.',
            'Developed secure payment gateways with strict compliance requirements.',
            'Built custom LDAP and SSO integrations for enterprise environments.'
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="section-container">
            <div className="tw:flex tw:flex-col tw:md:flex-row tw:justify-between tw:items-end tw:mb-16 tw:gap-4">
                <div className="tw:max-w-2xl">
                    <h2 className="tw:text-sm tw:font-mono tw:text-brand-500 tw:uppercase tw:tracking-widest tw:mb-4">
                        Career Journey
                    </h2>
                    <h3 className="tw:text-4xl tw:md:text-5xl tw:font-display tw:font-bold">
                        Professional <span className="tw:text-brand-500">History</span>
                    </h3>
                </div>
                <p className="tw:text-slate-600 tw:dark:text-slate-400 tw:max-w-sm">
                    Over 10 years of experience building, hardening, and leading engineering teams across EMEA.
                </p>
            </div>

            <div className="tw:space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="tw:relative tw:pl-8 tw:border-l-2 tw:border-slate-100 tw:dark:border-slate-800 tw:hover:border-brand-500 tw:transition-colors"
                    >
                        <div className="tw:absolute tw:w-4 tw:h-4 tw:bg-brand-500 tw:rounded-full tw:-left-[9px] tw:top-0 tw:ring-4 tw:ring-white tw:dark:ring-slate-950" />
                        
                        <div className="tw:flex tw:flex-col tw:lg:flex-row tw:lg:items-center tw:gap-4 tw:mb-4">
                            <h4 className="tw:text-2xl tw:font-bold tw:dark:text-white">
                                {exp.title}
                            </h4>
                            <div className="tw:hidden tw:lg:block tw:h-1.5 tw:w-1.5 tw:rounded-full tw:bg-slate-300 tw:dark:bg-slate-700" />
                            <div className="tw:flex tw:items-center tw:gap-2 tw:text-brand-500 tw:font-medium">
                                <Briefcase className="tw:h-4 tw:w-4" />
                                {exp.company}
                            </div>
                        </div>

                        <div className="tw:flex tw:flex-wrap tw:gap-6 tw:mb-6 tw:text-sm tw:text-slate-500">
                            <div className="tw:flex tw:items-center tw:gap-2">
                                <Calendar className="tw:h-4 tw:w-4" />
                                {exp.period}
                            </div>
                            <div className="tw:flex tw:items-center tw:gap-2">
                                <MapPin className="tw:h-4 tw:w-4" />
                                {exp.location}
                            </div>
                        </div>

                        <p className="tw:text-slate-600 tw:dark:text-slate-400 tw:mb-6 tw:max-w-3xl tw:leading-relaxed">
                            {exp.description}
                        </p>

                        <div className="tw:grid tw:md:grid-cols-2 tw:lg:grid-cols-3 tw:gap-4">
                            {exp.achievements.map((achievement, aIndex) => (
                                <div key={aIndex} className="tw:p-4 tw:rounded-xl tw:bg-slate-50 tw:dark:bg-slate-900/50 tw:border tw:border-slate-100 tw:dark:border-slate-800 tw:text-sm tw:text-slate-600 tw:dark:text-slate-400">
                                    {achievement}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
