import React, { useState } from 'react';
import { Card, Form, Input, Button, message, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import {
    MailIcon,
    LinkedinIcon,
    GithubIcon,
    ShieldIcon,
    SendIcon,
    MapPinIcon,
    ClockIcon,
} from 'lucide-react';

const { TextArea } = Input;

const contactChannels = [
    {
        icon: MailIcon,
        title: 'EMAIL_SECURE',
        value: 'oneman.rt@gmail.com',
        description: 'Encrypted communication preferred',
        color: '#00ff00',
        link: 'mailto:oneman.rt@gmail.com',
    },
    {
        icon: LinkedinIcon,
        title: 'LINKEDIN_PROFILE',
        value: '/in/juanmartgr',
        description: 'Professional networking',
        color: '#00d4ff',
        link: 'https://linkedin.com/in/juanmartgr',
    },
    {
        icon: GithubIcon,
        title: 'GITHUB_REPOS',
        value: '/WanManolo',
        description: 'Open source contributions',
        color: '#bf00ff',
        link: 'https://github.com/WanManolo',
    },
    {
        icon: MapPinIcon,
        title: 'LOCATION_DATA',
        value: 'Remote/Hybrid Available',
        description: 'Global collaboration ready',
        color: '#39ff14',
        link: null,
    },
    {
        icon: ClockIcon,
        title: 'RESPONSE_TIME',
        value: '< 24 hours',
        description: 'Guaranteed response SLA',
        color: '#ffbf00',
        link: null,
    },
    {
        icon: ShieldIcon,
        title: 'SECURITY_STATUS',
        value: 'Available for roles',
        description: 'InfoSec leadership positions',
        color: '#ff4500',
        link: null,
    },
];

export default function HackerContact() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [messagesSent, setMessagesSent] = useState(0);

    const handleSubmit = async (values: any) => {
        setLoading(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // In a real app, you'd send this to your backend
            console.warn('Form submitted:', values);

            message.success({
                content: 'MESSAGE_TRANSMITTED_SUCCESSFULLY',
                style: {
                    fontFamily: 'JetBrains Mono, monospace',
                    color: '#00ff00',
                },
            });

            setMessagesSent((prev) => prev + 1);
            form.resetFields();
        } catch (error) {
            message.error({
                content: 'TRANSMISSION_FAILED - Please try again',
                style: {
                    fontFamily: 'JetBrains Mono, monospace',
                    color: '#ff0040',
                },
            });
        } finally {
            setLoading(false);
        }
    };

    const playTerminalSound = () => {
        // Optional: Play terminal beep sound
        const audio = document.getElementById('terminal-sound') as HTMLAudioElement;
        if (audio) {
            audio.currentTime = 0;
            audio.volume = 0.1;
            audio.play().catch(() => {});
        }
    };

    return (
        <section id="contact" className="tw:relative tw:py-20">
            <div className="tw:container tw:mx-auto tw:px-6">
                <motion.div
                    className="tw:mb-16 tw:text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="tw:font-cyber tw:text-[#39ff14] glow-text tw:mb-4 tw:text-4xl tw:uppercase tw:md:text-5xl">
                        CONTACT_PROTOCOL.INIT
                    </h2>
                    <p className="tw:mx-auto tw:max-w-3xl tw:font-mono tw:text-xl tw:text-gray-300">
                        <span className="tw:text-[#00d4ff]">[ESTABLISHING_CONNECTION]</span>
                        Secure communication channels available
                    </p>
                </motion.div>

                <div className="tw:mx-auto tw:max-w-6xl">
                    <Row gutter={[32, 32]}>
                        {/* Contact Channels */}
                        <Col xs={24} lg={14}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <Card
                                    title={
                                        <span className="tw:font-cyber tw:text-[#39ff14] glow-text tw:text-xl tw:uppercase">
                                            COMMUNICATION_CHANNELS.JSON
                                        </span>
                                    }
                                    className="neon-border tw:mb-8"
                                    style={{
                                        background: 'rgba(26, 26, 26, 0.9)',
                                        border: '1px solid #00ff00',
                                        boxShadow: '0 0 30px rgba(0, 255, 0, 0.2)',
                                    }}
                                >
                                    <Row gutter={[16, 16]}>
                                        {contactChannels.map((channel, index) => {
                                            const Icon = channel.icon;
                                            return (
                                                <Col xs={24} sm={12} key={index}>
                                                    <motion.div
                                                        className="neon-border tw:cursor-pointer tw:rounded-lg tw:p-4 tw:transition-all tw:duration-300 tw:hover:shadow-lg"
                                                        style={{
                                                            background: `${channel.color}10`,
                                                            border: `1px solid ${channel.color}30`,
                                                        }}
                                                        whileHover={{
                                                            scale: 1.02,
                                                            boxShadow: `0 0 20px ${channel.color}40`,
                                                        }}
                                                        whileTap={{ scale: 0.98 }}
                                                        onClick={() => {
                                                            if (channel.link) {
                                                                window.open(channel.link, '_blank');
                                                                playTerminalSound();
                                                            }
                                                        }}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{
                                                            duration: 0.6,
                                                            delay: index * 0.1,
                                                        }}
                                                        viewport={{ once: true }}
                                                    >
                                                        <div className="tw:flex tw:items-start tw:gap-3">
                                                            <div
                                                                className="tw:rounded tw:p-2"
                                                                style={{
                                                                    background: `${channel.color}20`,
                                                                }}
                                                            >
                                                                <Icon
                                                                    className="tw:h-5 tw:w-5"
                                                                    style={{ color: channel.color }}
                                                                />
                                                            </div>
                                                            <div className="tw:min-w-0 tw:flex-1">
                                                                <h4 className="tw:mb-1 tw:font-mono tw:text-sm tw:font-bold tw:text-white">
                                                                    {channel.title}
                                                                </h4>
                                                                <p
                                                                    className="tw:mb-1 tw:font-mono tw:text-sm tw:font-semibold"
                                                                    style={{ color: channel.color }}
                                                                >
                                                                    {channel.value}
                                                                </p>
                                                                <p className="tw:text-xs tw:text-gray-400">
                                                                    {channel.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </Card>

                                {/* Quick Stats */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <Card
                                        className="neon-border"
                                        style={{
                                            background: 'rgba(26, 26, 26, 0.9)',
                                            border: '1px solid #00d4ff',
                                            boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)',
                                        }}
                                    >
                                        <div className="tw:grid tw:grid-cols-3 tw:gap-4 tw:text-center">
                                            <div>
                                                <div className="tw:font-cyber tw:text-[#39ff14] glow-text tw:text-2xl">
                                                    24h
                                                </div>
                                                <div className="tw:font-mono tw:text-sm tw:text-gray-400">
                                                    Response Time
                                                </div>
                                            </div>
                                            <div>
                                                <div className="tw:font-cyber tw:text-[#00d4ff] glow-text tw:text-2xl">
                                                    100%
                                                </div>
                                                <div className="tw:font-mono tw:text-sm tw:text-gray-400">
                                                    Secure Comms
                                                </div>
                                            </div>
                                            <div>
                                                <motion.div
                                                    className="tw:font-cyber tw:text-[#bf00ff] glow-text tw:text-2xl"
                                                    key={messagesSent}
                                                    initial={{ scale: 1 }}
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {messagesSent}
                                                </motion.div>
                                                <div className="tw:font-mono tw:text-sm tw:text-gray-400">
                                                    Messages Sent
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        </Col>

                        {/* Contact Form */}
                        <Col xs={24} lg={10}>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <Card
                                    title={
                                        <span className="tw:font-cyber tw:text-[#39ff14] glow-text tw:text-xl tw:uppercase">
                                            MESSAGE_TERMINAL.EXEC
                                        </span>
                                    }
                                    className="neon-border"
                                    style={{
                                        background: 'rgba(26, 26, 26, 0.9)',
                                        border: '1px solid #00ff00',
                                        boxShadow: '0 0 30px rgba(0, 255, 0, 0.2)',
                                    }}
                                >
                                    <Form
                                        form={form}
                                        layout="vertical"
                                        onFinish={handleSubmit}
                                        className="tw:space-y-4"
                                    >
                                        <Form.Item
                                            name="name"
                                            label={
                                                <span className="tw:font-mono tw:text-gray-300">
                                                    USER_NAME:
                                                </span>
                                            }
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        'Name required for secure transmission',
                                                },
                                                {
                                                    min: 2,
                                                    message: 'Name must be at least 2 characters',
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Enter your name..."
                                                className="tw:border-[#39ff14] tw:text-[#39ff14] tw:bg-black/50 tw:font-mono"
                                                style={{
                                                    background: 'rgba(0, 0, 0, 0.5)',
                                                    borderColor: '#00ff00',
                                                    color: '#00ff00',
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="email"
                                            label={
                                                <span className="tw:font-mono tw:text-gray-300">
                                                    EMAIL_ADDRESS:
                                                </span>
                                            }
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Email required for response',
                                                },
                                                {
                                                    type: 'email',
                                                    message: 'Please enter a valid email address',
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="your.email@domain.com"
                                                className="tw:border-[#39ff14] tw:text-[#39ff14] tw:bg-black/50 tw:font-mono"
                                                style={{
                                                    background: 'rgba(0, 0, 0, 0.5)',
                                                    borderColor: '#00ff00',
                                                    color: '#00ff00',
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="subject"
                                            label={
                                                <span className="tw:font-mono tw:text-gray-300">
                                                    MESSAGE_SUBJECT:
                                                </span>
                                            }
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Subject required for message routing',
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Brief description of your inquiry..."
                                                className="tw:border-[#39ff14] tw:text-[#39ff14] tw:bg-black/50 tw:font-mono"
                                                style={{
                                                    background: 'rgba(0, 0, 0, 0.5)',
                                                    borderColor: '#00ff00',
                                                    color: '#00ff00',
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="message"
                                            label={
                                                <span className="tw:font-mono tw:text-gray-300">
                                                    MESSAGE_CONTENT:
                                                </span>
                                            }
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Message content required',
                                                },
                                                {
                                                    min: 20,
                                                    message:
                                                        'Please provide more details (minimum 20 characters)',
                                                },
                                            ]}
                                        >
                                            <TextArea
                                                placeholder="Describe your project, opportunity, or inquiry in detail..."
                                                rows={6}
                                                className="tw:border-[#39ff14] tw:text-[#39ff14] tw:bg-black/50 tw:font-mono"
                                                style={{
                                                    background: 'rgba(0, 0, 0, 0.5)',
                                                    borderColor: '#00ff00',
                                                    color: '#00ff00',
                                                    resize: 'vertical',
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item className="mb-0">
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    loading={loading}
                                                    className="cyber-btn tw:w-full"
                                                    style={{
                                                        background: 'transparent',
                                                        borderColor: '#00ff00',
                                                        color: '#00ff00',
                                                        height: '48px',
                                                        fontFamily: 'JetBrains Mono, monospace',
                                                        fontWeight: 'bold',
                                                        textTransform: 'uppercase',
                                                    }}
                                                    icon={<SendIcon className="tw:h-4 tw:w-4" />}
                                                    onClick={playTerminalSound}
                                                >
                                                    {loading
                                                        ? 'TRANSMITTING...'
                                                        : 'TRANSMIT_MESSAGE'}
                                                </Button>
                                            </motion.div>
                                        </Form.Item>
                                    </Form>

                                    {/* Terminal Footer */}
                                    <div className="tw:border-[#39ff14]/30 tw:mt-6 tw:border-t tw:pt-4">
                                        <div className="tw:flex tw:items-center tw:justify-between tw:font-mono tw:text-xs tw:text-gray-400">
                                            <span>SECURE_TRANSMISSION_ENABLED</span>
                                            <div className="tw:flex tw:items-center tw:gap-2">
                                                <div className="tw:bg-[#39ff14] tw:h-2 tw:w-2 tw:animate-pulse tw:rounded-full" />
                                                <span>READY</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </Col>
                    </Row>
                </div>

                {/* ASCII Art Footer */}
                <motion.div
                    className="tw:mt-16 tw:text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="ascii-art tw:text-[#39ff14] tw:text-xs tw:opacity-30">
                        {`╔══════════════════════════════════════════════════════════╗
║  SECURE COMMUNICATION PROTOCOL ESTABLISHED              ║
║  ENCRYPTION: AES-256 | STATUS: ACTIVE | UPTIME: 99.9%   ║
║  [JUAN_MANUEL_RODRÍGUEZ] >> READY FOR CONNECTION        ║
╚══════════════════════════════════════════════════════════╝`}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
