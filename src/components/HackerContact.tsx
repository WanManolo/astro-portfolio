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
    PhoneIcon,
    ClockIcon
} from 'lucide-react';

const { TextArea } = Input;

const contactChannels = [
    {
        icon: MailIcon,
        title: 'EMAIL_SECURE',
        value: 'oneman.rt@gmail.com',
        description: 'Encrypted communication preferred',
        color: '#00ff00',
        link: 'mailto:oneman.rt@gmail.com'
    },
    {
        icon: LinkedinIcon,
        title: 'LINKEDIN_PROFILE',
        value: '/in/juanmartgr',
        description: 'Professional networking',
        color: '#00d4ff',
        link: 'https://linkedin.com/in/juanmartgr'
    },
    {
        icon: GithubIcon,
        title: 'GITHUB_REPOS',
        value: '/WanManolo',
        description: 'Open source contributions',
        color: '#bf00ff',
        link: 'https://github.com/WanManolo'
    },
    {
        icon: MapPinIcon,
        title: 'LOCATION_DATA',
        value: 'Remote/Hybrid Available',
        description: 'Global collaboration ready',
        color: '#39ff14',
        link: null
    },
    {
        icon: ClockIcon,
        title: 'RESPONSE_TIME',
        value: '< 24 hours',
        description: 'Guaranteed response SLA',
        color: '#ffbf00',
        link: null
    },
    {
        icon: ShieldIcon,
        title: 'SECURITY_STATUS',
        value: 'Available for roles',
        description: 'InfoSec leadership positions',
        color: '#ff4500',
        link: null
    }
];

export default function HackerContact() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [messagesSent, setMessagesSent] = useState(0);

    const handleSubmit = async (values: any) => {
        setLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // In a real app, you'd send this to your backend
            console.log('Form submitted:', values);

            message.success({
                content: 'MESSAGE_TRANSMITTED_SUCCESSFULLY',
                style: {
                    fontFamily: 'JetBrains Mono, monospace',
                    color: '#00ff00'
                }
            });

            setMessagesSent(prev => prev + 1);
            form.resetFields();

        } catch (error) {
            message.error({
                content: 'TRANSMISSION_FAILED - Please try again',
                style: {
                    fontFamily: 'JetBrains Mono, monospace',
                    color: '#ff0040'
                }
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
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-6">

                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-cyber uppercase text-neon-green glow-text mb-4">
                        CONTACT_PROTOCOL.INIT
                    </h2>
                    <p className="text-xl text-gray-300 font-mono max-w-3xl mx-auto">
                        <span className="text-neon-blue">[ESTABLISHING_CONNECTION]</span>
                        Secure communication channels available
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
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
                                        <span className="font-cyber text-xl text-neon-green glow-text uppercase">
                      COMMUNICATION_CHANNELS.JSON
                    </span>
                                    }
                                    className="neon-border mb-8"
                                    style={{
                                        background: 'rgba(26, 26, 26, 0.9)',
                                        border: '1px solid #00ff00',
                                        boxShadow: '0 0 30px rgba(0, 255, 0, 0.2)'
                                    }}
                                >
                                    <Row gutter={[16, 16]}>
                                        {contactChannels.map((channel, index) => {
                                            const Icon = channel.icon;
                                            return (
                                                <Col xs={24} sm={12} key={index}>
                                                    <motion.div
                                                        className="p-4 rounded-lg neon-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                                                        style={{
                                                            background: `${channel.color}10`,
                                                            border: `1px solid ${channel.color}30`
                                                        }}
                                                        whileHover={{
                                                            scale: 1.02,
                                                            boxShadow: `0 0 20px ${channel.color}40`
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
                                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                                        viewport={{ once: true }}
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <div
                                                                className="p-2 rounded"
                                                                style={{ background: `${channel.color}20` }}
                                                            >
                                                                <Icon
                                                                    className="w-5 h-5"
                                                                    style={{ color: channel.color }}
                                                                />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="font-mono text-sm font-bold text-white mb-1">
                                                                    {channel.title}
                                                                </h4>
                                                                <p
                                                                    className="font-mono text-sm font-semibold mb-1"
                                                                    style={{ color: channel.color }}
                                                                >
                                                                    {channel.value}
                                                                </p>
                                                                <p className="text-xs text-gray-400">
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
                                            boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)'
                                        }}
                                    >
                                        <div className="grid grid-cols-3 gap-4 text-center">
                                            <div>
                                                <div className="text-2xl font-cyber text-neon-green glow-text">
                                                    24h
                                                </div>
                                                <div className="text-sm font-mono text-gray-400">
                                                    Response Time
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-cyber text-neon-blue glow-text">
                                                    100%
                                                </div>
                                                <div className="text-sm font-mono text-gray-400">
                                                    Secure Comms
                                                </div>
                                            </div>
                                            <div>
                                                <motion.div
                                                    className="text-2xl font-cyber text-neon-purple glow-text"
                                                    key={messagesSent}
                                                    initial={{ scale: 1 }}
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {messagesSent}
                                                </motion.div>
                                                <div className="text-sm font-mono text-gray-400">
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
                                        <span className="font-cyber text-xl text-neon-green glow-text uppercase">
                      MESSAGE_TERMINAL.EXEC
                    </span>
                                    }
                                    className="neon-border"
                                    style={{
                                        background: 'rgba(26, 26, 26, 0.9)',
                                        border: '1px solid #00ff00',
                                        boxShadow: '0 0 30px rgba(0, 255, 0, 0.2)'
                                    }}
                                >
                                    <Form
                                        form={form}
                                        layout="vertical"
                                        onFinish={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <Form.Item
                                            name="name"
                                            label={
                                                <span className="font-mono text-gray-300">
                          USER_NAME:
                        </span>
                                            }
                                            rules={[
                                                { required: true, message: 'Name required for secure transmission' },
                                                { min: 2, message: 'Name must be at least 2 characters' }
                                            ]}
                                        >
                                            <Input
                                                placeholder="Enter your name..."
                                                className="bg-black/50 border-neon-green text-neon-green font-mono"
                                                style={{
                                                    background: 'rgba(0, 0, 0, 0.5)',
                                                    borderColor: '#00ff00',
                                                    color: '#00ff00'
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="email"
                                            label={
                                                <span className="font-mono text-gray-300">
                          EMAIL_ADDRESS:
                        </span>
                                            }
                                            rules={[
                                                { required: true, message: 'Email required for response' },
                                                { type: 'email', message: 'Please enter a valid email address' }
                                            ]}
                                        >
                                            <Input
                                                placeholder="your.email@domain.com"
                                                className="bg-black/50 border-neon-green text-neon-green font-mono"
                                                style={{
                                                    background: 'rgba(0, 0, 0, 0.5)',
                                                    borderColor: '#00ff00',
                                                    color: '#00ff00'
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="subject"
                                            label={
                                                <span className="font-mono text-gray-300">
                          MESSAGE_SUBJECT:
                        </span>
                                            }
                                            rules={[
                                                { required: true, message: 'Subject required for message routing' }
                                            ]}
                                        >
                                            <Input
                                                placeholder="Brief description of your inquiry..."
                                                className="bg-black/50 border-neon-green text-neon-green font-mono"
                                                style={{
                                                    background: 'rgba(0, 0, 0, 0.5)',
                                                    borderColor: '#00ff00',
                                                    color: '#00ff00'
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="message"
                                            label={
                                                <span className="font-mono text-gray-300">
                          MESSAGE_CONTENT:
                        </span>
                                            }
                                            rules={[
                                                { required: true, message: 'Message content required' },
                                                { min: 20, message: 'Please provide more details (minimum 20 characters)' }
                                            ]}
                                        >
                                            <TextArea
                                                placeholder="Describe your project, opportunity, or inquiry in detail..."
                                                rows={6}
                                                className="bg-black/50 border-neon-green text-neon-green font-mono"
                                                style={{
                                                    background: 'rgba(0, 0, 0, 0.5)',
                                                    borderColor: '#00ff00',
                                                    color: '#00ff00',
                                                    resize: 'vertical'
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
                                                    className="w-full cyber-btn"
                                                    style={{
                                                        background: 'transparent',
                                                        borderColor: '#00ff00',
                                                        color: '#00ff00',
                                                        height: '48px',
                                                        fontFamily: 'JetBrains Mono, monospace',
                                                        fontWeight: 'bold',
                                                        textTransform: 'uppercase'
                                                    }}
                                                    icon={<SendIcon className="w-4 h-4" />}
                                                    onClick={playTerminalSound}
                                                >
                                                    {loading ? 'TRANSMITTING...' : 'TRANSMIT_MESSAGE'}
                                                </Button>
                                            </motion.div>
                                        </Form.Item>
                                    </Form>

                                    {/* Terminal Footer */}
                                    <div className="mt-6 pt-4 border-t border-neon-green/30">
                                        <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                                            <span>SECURE_TRANSMISSION_ENABLED</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
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
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="ascii-art text-neon-green opacity-30 text-xs">
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