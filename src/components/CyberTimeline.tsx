import React, { useMemo } from 'react';
import { Timeline, Card } from 'antd';
import { motion } from 'framer-motion';
import { ShieldIcon, CodeIcon, UsersIcon, ServerIcon, LockIcon, ZapIcon } from 'lucide-react';

const experiences = [
    {
        year: '2023-Present',
        title: 'SENIOR_INFOSEC_MANAGER.EXE',
        company: '[CLASSIFIED_ENTERPRISE]',
        description:
            'Leading enterprise security initiatives, implementing zero-trust architecture, and managing cross-functional security teams across global infrastructure.',
        achievements: [
            'Reduced security incidents by 78%',
            'Implemented DevSecOps across 15+ teams',
            'Achieved SOC 2 Type II compliance',
            'Led incident response for critical threats',
        ],
        icon: ShieldIcon,
        color: '#00ff00',
        status: 'ACTIVE',
    },
    {
        year: '2021-2023',
        title: 'SENIOR_FULLSTACK_ENGINEER.JS',
        company: '[TECH_CORPORATION]',
        description:
            'Architected and developed scalable web applications using modern frameworks, mentored development teams, and established security-first coding practices.',
        achievements: [
            'Built applications serving 100K+ users',
            'Improved performance by 60%',
            'Mentored 8 junior developers',
            'Implemented CI/CD security gates',
        ],
        icon: CodeIcon,
        color: '#00d4ff',
        status: 'COMPLETED',
    },
    {
        year: '2020-2021',
        title: 'INFORMATION_SECURITY_OFFICER.SH',
        company: '[FINTECH_STARTUP]',
        description:
            'Developed comprehensive security policies, conducted penetration testing, and ensured compliance with financial industry regulations.',
        achievements: [
            'Established security framework from ground up',
            'Conducted 25+ penetration tests',
            'Achieved PCI DSS compliance',
            'Reduced vulnerability exposure by 85%',
        ],
        icon: LockIcon,
        color: '#bf00ff',
        status: 'COMPLETED',
    },
    {
        year: '2019-2020',
        title: 'TECHNICAL_TEAM_LEAD.PY',
        company: '[SECURITY_CONSULTANCY]',
        description:
            'Led technical teams in security assessments, managed client relationships, and delivered comprehensive security solutions.',
        achievements: [
            'Led team of 6 security analysts',
            'Delivered 40+ security assessments',
            'Increased client satisfaction by 45%',
            'Developed automated testing tools',
        ],
        icon: UsersIcon,
        color: '#39ff14',
        status: 'COMPLETED',
    },
];

export default function CyberTimeline() {
    const timelineItems = useMemo(() => {
        return experiences.map((exp, index) => {
            const Icon = exp.icon;
            return {
                key: index,
                dot: (
                    <motion.div
                        className="tw:rounded-full tw:border-2 tw:bg-black/80 tw:p-3"
                        style={{
                            borderColor: exp.color,
                            boxShadow: `0 0 20px ${exp.color}50`,
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Icon className="tw:h-6 tw:w-6" style={{ color: exp.color }} />
                    </motion.div>
                ),
                label: (
                    <motion.div
                        className="tw:font-mono tw:text-lg tw:font-bold"
                        style={{ color: exp.color }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        {exp.year}
                    </motion.div>
                ),
                children: (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card
                            className="neon-border tw:transition-all tw:duration-300 tw:hover:shadow-2xl"
                            style={{
                                background: 'rgba(26, 26, 26, 0.9)',
                                border: `1px solid ${exp.color}`,
                                boxShadow: `0 0 20px ${exp.color}20`,
                            }}
                        >
                            <div className="tw:space-y-4">
                                <div className="tw:flex tw:items-center tw:justify-between">
                                    <h3 className="tw:font-mono tw:text-xl tw:font-bold tw:text-white">
                                        {exp.title}
                                    </h3>
                                    <span
                                        className="tw:rounded-full tw:border tw:px-3 tw:py-1 tw:font-mono tw:text-xs"
                                        style={{
                                            color: exp.color,
                                            borderColor: exp.color,
                                            background: `${exp.color}20`,
                                        }}
                                    >
                                        {exp.status}
                                    </span>
                                </div>

                                <div className="tw:font-mono tw:text-gray-400">{exp.company}</div>

                                <p className="tw:leading-relaxed tw:text-gray-300">
                                    {exp.description}
                                </p>

                                <div className="tw:space-y-2">
                                    <h4 className="tw:mb-2 tw:font-mono tw:text-sm tw:font-bold tw:text-white">
                                        KEY_ACHIEVEMENTS:
                                    </h4>
                                    {exp.achievements.map((achievement, achIndex) => (
                                        <div
                                            key={achIndex}
                                            className="tw:flex tw:items-center tw:gap-2 tw:font-mono tw:text-sm tw:text-gray-300"
                                        >
                                            <span
                                                className="tw:h-2 tw:w-2 tw:rounded-full"
                                                style={{
                                                    background: exp.color,
                                                }}
                                            ></span>
                                            {achievement}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ),
            };
        });
    }, []);

    return (
        <section id={'timeline'} className="tw:relative tw:py-20">
            <div className="tw:container tw:mx-auto tw:px-6">
                <motion.div
                    className="tw:mb-16 tw:text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="tw:font-cyber tw:text-[#39ff14] glow-text tw:mb-4 tw:text-4xl tw:uppercase tw:md:text-5xl">
                        CAREER_TIMELINE.LOG
                    </h2>
                    <p className="tw:mx-auto tw:max-w-3xl tw:font-mono tw:text-xl tw:text-gray-300">
                        <span className="text-[#00d4ff]">[EXECUTING]</span> Professional journey
                        through the cybersecurity landscape
                    </p>
                </motion.div>

                <div className="tw:mx-auto tw:max-w-4xl">
                    <Timeline mode="left" className="cyber-timeline" items={timelineItems} />
                </div>
            </div>
        </section>
    );
}
