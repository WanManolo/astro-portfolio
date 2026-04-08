import React from 'react';
import { motion } from 'framer-motion';
import { 
    Key, 
    Server, 
    Lock, 
    Cloud, 
    Users, 
    ShieldCheck 
} from 'lucide-react';

const expertiseItems = [
    {
        icon: Key,
        title: 'Identity & Access Management',
        skills: ['OAuth 2.0 / OIDC', 'SAML 2.0 / LDAP', 'SSO / MFA Implementation', 'IAM Architecture'],
    },
    {
        icon: Server,
        title: 'Backend Engineering',
        skills: ['Distributed Systems', 'API Design (REST/gRPC)', 'High Availability', 'Node.js / Go / Python'],
    },
    {
        icon: ShieldCheck,
        title: 'Security Engineering',
        skills: ['Secure Software Lifecycle', 'OWASP Top 10', 'Compliance (GDPR/ISO)', 'Threat Modeling'],
    },
    {
        icon: Lock,
        title: 'Offensive Security',
        skills: ['Ethical Hacking', 'Penetration Testing', 'Vulnerability Assessment', 'Security Research'],
    },
    {
        icon: Cloud,
        title: 'Cloud & DevSecOps',
        skills: ['AWS / Cloud Architecture', 'CI/CD Security', 'Infrastructure as Code', 'Kubernetes'],
    },
    {
        icon: Users,
        title: 'Technical Leadership',
        skills: ['Team Mentorship', 'Engineering Culture', 'Code Quality & Standards', 'Strategy & Roadmap'],
    },
];

export default function Expertise() {
    return (
        <section id="expertise" className="section-container">
            <div className="tw:text-center tw:mb-16">
                <h2 className="tw:text-sm tw:font-mono tw:text-brand-500 tw:uppercase tw:tracking-widest tw:mb-4">
                    Expertise
                </h2>
                <h3 className="tw:text-4xl tw:md:text-5xl tw:font-display tw:font-bold">
                    Specialized in <span className="tw:text-brand-500">Security-First</span> Engineering
                </h3>
            </div>

            <div className="tw:grid tw:md:grid-cols-2 tw:lg:grid-cols-3 tw:gap-8">
                {expertiseItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="tw:group tw:p-8 tw:rounded-2xl tw:bg-white tw:dark:bg-slate-900 tw:border tw:border-slate-100 tw:dark:border-slate-800 tw:hover:border-brand-500/50 tw:hover:shadow-xl tw:hover:shadow-brand-500/5 tw:transition-all"
                    >
                        <div className="tw:mb-6 tw:bg-brand-50 tw:dark:bg-brand-900/20 tw:w-14 tw:h-14 tw:rounded-xl tw:flex tw:items-center tw:justify-center tw:text-brand-500 tw:group-hover:scale-110 tw:transition-transform">
                            <item.icon className="tw:h-7 tw:w-7" />
                        </div>
                        <h4 className="tw:text-xl tw:font-bold tw:mb-4 tw:dark:text-white">
                            {item.title}
                        </h4>
                        <ul className="tw:space-y-3">
                            {item.skills.map((skill, sIndex) => (
                                <li key={sIndex} className="tw:flex tw:items-center tw:gap-2 tw:text-sm tw:text-slate-600 tw:dark:text-slate-400">
                                    <div className="tw:h-1.5 tw:w-1.5 tw:rounded-full tw:bg-brand-500/40" />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
