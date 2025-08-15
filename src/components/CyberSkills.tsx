import React, { useState } from 'react';
import { Card, Tabs, Badge, Progress } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CodeIcon,
    ShieldIcon,
    ServerIcon,
    UsersIcon,
    TerminalIcon,
    DatabaseIcon,
    CloudIcon,
    LockIcon,
} from 'lucide-react';

const { TabPane } = Tabs;

const skillCategories = {
    frontend: {
        title: 'FRONTEND.JS',
        icon: CodeIcon,
        color: '#00d4ff',
        skills: [
            { name: 'React/Next.js', level: 95, years: 5 },
            { name: 'TypeScript', level: 92, years: 4 },
            { name: 'Vue.js/Nuxt', level: 88, years: 3 },
            { name: 'Tailwind CSS', level: 90, years: 3 },
            { name: 'GraphQL', level: 85, years: 2 },
            { name: 'WebGL/Three.js', level: 75, years: 2 },
        ],
    },
    backend: {
        title: 'BACKEND.PY',
        icon: ServerIcon,
        color: '#39ff14',
        skills: [
            { name: 'Node.js/Express', level: 90, years: 5 },
            { name: 'Python/Django', level: 88, years: 4 },
            { name: 'PostgreSQL', level: 85, years: 4 },
            { name: 'MongoDB', level: 82, years: 3 },
            { name: 'Redis', level: 80, years: 3 },
            { name: 'Microservices', level: 87, years: 3 },
        ],
    },
    security: {
        title: 'SECURITY.SH',
        icon: ShieldIcon,
        color: '#ff4500',
        skills: [
            { name: 'Penetration Testing', level: 95, years: 6 },
            { name: 'OWASP Top 10', level: 98, years: 7 },
            { name: 'Security Auditing', level: 92, years: 5 },
            { name: 'ISO 27001', level: 88, years: 4 },
            { name: 'Incident Response', level: 90, years: 5 },
            { name: 'Risk Assessment', level: 94, years: 6 },
        ],
    },
    infrastructure: {
        title: 'DEVOPS.YAML',
        icon: CloudIcon,
        color: '#bf00ff',
        skills: [
            { name: 'AWS/Azure', level: 87, years: 4 },
            { name: 'Docker/Kubernetes', level: 85, years: 3 },
            { name: 'Terraform', level: 80, years: 2 },
            { name: 'CI/CD Pipelines', level: 90, years: 4 },
            { name: 'Monitoring/Observability', level: 85, years: 3 },
            { name: 'GitOps', level: 82, years: 2 },
        ],
    },
    leadership: {
        title: 'LEADERSHIP.MD',
        icon: UsersIcon,
        color: '#ffbf00',
        skills: [
            { name: 'Team Management', level: 92, years: 5 },
            { name: 'Strategic Planning', level: 88, years: 4 },
            { name: 'Cross-functional Collaboration', level: 90, years: 6 },
            { name: 'Mentoring', level: 94, years: 5 },
            { name: 'Agile/Scrum', level: 89, years: 5 },
            { name: 'Security Governance', level: 91, years: 4 },
        ],
    },
};

export default function CyberSkills() {
    const [activeTab, setActiveTab] = useState('frontend');

    return (
        <section className="relative py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-cyber text-neon-green glow-text mb-4 text-4xl uppercase md:text-5xl">
                        SKILL_MATRIX.EXE
                    </h2>
                    <p className="mx-auto max-w-3xl font-mono text-xl text-gray-300">
                        <span className="text-neon-blue">[SCANNING]</span> Technical expertise
                        across multiple domains
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-6xl"
                >
                    <Card
                        className="neon-border"
                        style={{
                            background: 'rgba(26, 26, 26, 0.9)',
                            border: '1px solid #00ff00',
                            boxShadow: '0 0 30px rgba(0, 255, 0, 0.2)',
                        }}
                    >
                        <Tabs
                            activeKey={activeTab}
                            onChange={setActiveTab}
                            centered
                            size="large"
                            className="cyber-tabs"
                        >
                            {Object.entries(skillCategories).map(([key, category]) => {
                                const Icon = category.icon;
                                return (
                                    <TabPane
                                        key={key}
                                        tab={
                                            <span className="flex items-center gap-2 font-mono">
                                                <Icon className="h-5 w-5" />
                                                {category.title}
                                            </span>
                                        }
                                    >
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={key}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.3 }}
                                                className="grid gap-6 md:grid-cols-2"
                                            >
                                                {category.skills.map((skill, index) => (
                                                    <motion.div
                                                        key={skill.name}
                                                        className="neon-border space-y-3 rounded-lg p-4"
                                                        style={{
                                                            background: `${category.color}10`,
                                                            border: `1px solid ${category.color}30`,
                                                        }}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            duration: 0.4,
                                                            delay: index * 0.1,
                                                        }}
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <h4 className="font-mono font-semibold text-white">
                                                                {skill.name}
                                                            </h4>
                                                            <div className="flex items-center gap-2">
                                                                <Badge
                                                                    count={`${skill.years}y`}
                                                                    style={{
                                                                        background: category.color,
                                                                        color: '#000',
                                                                    }}
                                                                />
                                                                <span
                                                                    className="font-mono text-sm font-bold"
                                                                    style={{
                                                                        color: category.color,
                                                                        textShadow: `0 0 5px ${category.color}50`,
                                                                    }}
                                                                >
                                                                    {skill.level}%
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <Progress
                                                            percent={skill.level}
                                                            showInfo={false}
                                                            strokeColor={{
                                                                '0%': category.color,
                                                                '100%': category.color + '80',
                                                            }}
                                                            trailColor="rgba(255, 255, 255, 0.1)"
                                                            strokeWidth={6}
                                                        />
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </AnimatePresence>
                                    </TabPane>
                                );
                            })}
                        </Tabs>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
