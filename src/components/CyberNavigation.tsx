import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Drawer } from 'antd';
import { TerminalIcon, ShieldIcon, CodeIcon, ClockIcon, MailIcon, MenuIcon } from 'lucide-react';

const menuItems = [
    { key: 'terminal', label: 'TERMINAL', icon: TerminalIcon, href: '#terminal' },
    { key: 'security', label: 'SECURITY', icon: ShieldIcon, href: '#security' },
    { key: 'skills', label: 'SKILLS', icon: CodeIcon, href: '#skills' },
    { key: 'timeline', label: 'TIMELINE', icon: ClockIcon, href: '#timeline' },
    { key: 'contact', label: 'CONTACT', icon: MailIcon, href: '#contact' },
];

export default function CyberNavigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, _setActiveSection] = useState('terminal');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={`tw:fixed tw:top-0 tw:right-0 tw:left-0 tw:z-50 tw:transition-all tw:duration-300 ${
                    isScrolled
                        ? 'tw:border-[#39ff14]/30 tw:border-b tw:bg-black/90 tw:backdrop-blur-md'
                        : 'tw:bg-transparent'
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="tw:container tw:mx-auto tw:px-6 tw:py-4">
                    <div className="tw:flex tw:items-center tw:justify-between">
                        {/* Logo */}
                        <motion.div
                            className="tw:flex tw:items-center tw:gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="tw:border-[#39ff14] tw:bg-[#39ff14]/20 tw:flex tw:h-8 tw:items-center tw:justify-center tw:rounded tw:border-2 w-8">
                                <TerminalIcon className="tw:text-[#39ff14] tw:h-5 tw:w-5" />
                            </div>
                            <span className="tw:font-cyber tw:text-[#39ff14] glow-text tw:text-xl">
                                JRO_TERMINAL
                            </span>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="tw:hidden tw:items-center tw:gap-8 tw:md:flex">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <motion.a
                                        key={item.key}
                                        href={item.href}
                                        className={`tw:flex tw:items-center tw:gap-2 tw:font-mono tw:text-sm tw:transition-all tw:duration-300 ${
                                            activeSection === item.key
                                                ? 'tw:text-[#39ff14] glow-text'
                                                : 'hover:tw:text-[#39ff14] tw:text-gray-400'
                                        }`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Icon className="tw:h-4 tw:w-4" />
                                        {item.label}
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Status Indicator */}
                        <div className="tw:hidden tw:items-center tw:gap-2 tw:md:flex">
                            <div className="tw:bg-[#39ff14] tw:h-2 tw:w-2 tw:animate-pulse tw:rounded-full" />
                            <span className="tw:text-[#39ff14] tw:font-mono tw:text-xs">
                                ONLINE
                            </span>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="tw:text-[#39ff14] tw:p-2 tw:md:hidden"
                            onClick={() => setIsMobileMenuOpen(true)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <MenuIcon className="tw:h-6 tw:w-6" />
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Drawer */}
            <Drawer
                title={
                    <span className="tw:font-cyber tw:text-[#39ff14] glow-text">
                        NAVIGATION_MENU
                    </span>
                }
                placement="right"
                onClose={() => setIsMobileMenuOpen(false)}
                open={isMobileMenuOpen}
                style={{
                    background: 'rgba(10, 10, 10, 0.95)',
                }}
                styles={{
                    header: {
                        background: 'rgba(10, 10, 10, 0.95)',
                        borderBottom: '1px solid #00ff00',
                    },
                    body: {
                        background: 'rgba(10, 10, 10, 0.95)',
                        padding: '20px',
                    },
                }}
            >
                <div className="tw:space-y-6">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.a
                                key={item.key}
                                href={item.href}
                                className="neon-border tw:hover:text-[#39ff14] tw:flex tw:items-center tw:gap-3 tw:rounded tw:text-gray-300 tw:transition-colors p-3"
                                onClick={() => setIsMobileMenuOpen(false)}
                                whileHover={{ x: 10 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon className="tw:h-5 tw:w-5" />
                                <span className="tw:font-mono">{item.label}</span>
                            </motion.a>
                        );
                    })}

                    <div className="neon-border tw:mt-8 tw:rounded tw:p-4">
                        <div className="tw:mb-2 tw:flex tw:items-center tw:gap-2">
                            <div className="tw:bg-[#39ff14] tw:h-2 tw:w-2 tw:animate-pulse tw:rounded-full" />
                            <span className="tw:text-[#39ff14] tw:font-mono tw:text-xs">
                                STATUS
                            </span>
                        </div>
                        <p className="tw:font-mono tw:text-sm tw:text-gray-300">
                            Available for leadership roles
                        </p>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
