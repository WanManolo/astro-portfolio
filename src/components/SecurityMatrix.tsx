import React from 'react';
import { Card, Progress, Statistic, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, BugIcon, KeyIcon, EyeIcon, ServerIcon, LockIcon } from 'lucide-react';

const securityMetrics = [
    {
        title: 'Security Audits Conducted',
        value: 127,
        icon: ShieldCheckIcon,
        color: '#00ff00',
        description: 'Enterprise security assessments',
    },
    {
        title: 'Vulnerabilities Identified',
        value: 2847,
        icon: BugIcon,
        color: '#ff4500',
        description: 'Critical and high-risk findings',
    },
    {
        title: 'Security Policies Implemented',
        value: 45,
        icon: KeyIcon,
        color: '#00d4ff',
        description: 'Organization-wide security frameworks',
    },
    {
        title: 'Incident Response Time',
        value: 98,
        suffix: '%',
        icon: EyeIcon,
        color: '#bf00ff',
        description: 'SLA compliance rate',
    },
    {
        title: 'Systems Secured',
        value: 234,
        icon: ServerIcon,
        color: '#39ff14',
        description: 'Infrastructure and applications',
    },
    {
        title: 'Compliance Score',
        value: 96,
        suffix: '%',
        icon: LockIcon,
        color: '#ffbf00',
        description: 'ISO 27001 & SOC 2 alignment',
    },
];

const skillLevels = [
    { name: 'Penetration Testing', level: 95, color: '#00ff00' },
    { name: 'Security Architecture', level: 92, color: '#00d4ff' },
    { name: 'Incident Response', level: 89, color: '#ff4500' },
    { name: 'Risk Assessment', level: 94, color: '#bf00ff' },
    { name: 'Compliance Management', level: 87, color: '#39ff14' },
    { name: 'Team Leadership', level: 91, color: '#ffbf00' },
];

export default function SecurityMatrix() {
    return (
        <section id={'security'} className="tw:relative tw:py-20">
            <div className="tw:container tw:mx-auto tw:px-6">
                <motion.div
                    className="tw:mb-16 tw:text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="tw:font-cyber tw:text-[#39ff14] glow-text tw:mb-4 tw:text-4xl tw:uppercase tw:md:text-5xl">
                        SECURITY_MATRIX.EXE
                    </h2>
                    <p className="tw:mx-auto tw:max-w-3xl tw:font-mono tw:text-xl tw:text-gray-300">
                        <span className="tw:text-[#00d4ff]">[ANALYZING]</span> Real-time security
                        metrics and expertise evaluation
                    </p>
                </motion.div>

                {/* Security Metrics Grid */}
                <Row gutter={[24, 24]} className="tw:mb-16">
                    {securityMetrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <Col xs={24} md={12} lg={8} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card
                                        className="neon-border tw:group tw:h-full tw:transition-all tw:duration-300 tw:hover:shadow-2xl"
                                        style={{
                                            background: 'rgba(26, 26, 26, 0.8)',
                                            border: `1px solid ${metric.color}`,
                                            boxShadow: `0 0 20px ${metric.color}20`,
                                        }}
                                    >
                                        <div className="tw:flex tw:items-start tw:gap-4">
                                            <div
                                                className="tw:rounded-lg tw:p-3 tw:group-hover:animate-pulse"
                                                style={{ background: `${metric.color}20` }}
                                            >
                                                <Icon
                                                    className="tw:h-8 tw:w-8"
                                                    style={{ color: metric.color }}
                                                />
                                            </div>
                                            <div className="tw:flex-1">
                                                <Statistic
                                                    title={
                                                        <span className="tw:font-mono tw:text-sm tw:text-gray-300">
                                                            {metric.title}
                                                        </span>
                                                    }
                                                    value={metric.value}
                                                    suffix={metric.suffix}
                                                    valueStyle={{
                                                        color: metric.color,
                                                        fontFamily: 'JetBrains Mono, monospace',
                                                        fontSize: '1.8rem',
                                                        fontWeight: 'bold',
                                                        textShadow: `0 0 10px ${metric.color}50`,
                                                    }}
                                                />
                                                <p className="tw:mt-2 tw:font-mono tw:text-xs tw:text-gray-400">
                                                    {metric.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            </Col>
                        );
                    })}
                </Row>

                {/* Skills Matrix */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Card
                        title={
                            <span className="tw:font-cyber tw:text-[#39ff14] glow-text tw:text-xl tw:uppercase">
                                EXPERTISE_LEVELS.JSON
                            </span>
                        }
                        className="neon-border"
                        style={{
                            background: 'rgba(26, 26, 26, 0.9)',
                            border: '1px solid #00ff00',
                            boxShadow: '0 0 30px rgba(0, 255, 0, 0.2)',
                        }}
                    >
                        <div className="tw:space-y-6">
                            {skillLevels.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="tw:space-y-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="tw:flex tw:items-center tw:justify-between">
                                        <span className="tw:font-mono tw:text-sm tw:text-gray-300">
                                            {skill.name}
                                        </span>
                                        <span
                                            className="tw:font-mono tw:text-sm tw:font-bold"
                                            style={{
                                                color: skill.color,
                                                textShadow: `0 0 5px ${skill.color}50`,
                                            }}
                                        >
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <Progress
                                        percent={skill.level}
                                        showInfo={false}
                                        strokeColor={{
                                            '0%': skill.color,
                                            '100%': skill.color + '80',
                                        }}
                                        trailColor="rgba(255, 255, 255, 0.1)"
                                        strokeWidth={8}
                                        className="tw:skill-progress"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
