import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Drawer } from 'antd';
import {
    TerminalIcon,
    ShieldIcon,
    CodeIcon,
    ClockIcon,
    MailIcon,
    MenuIcon,
    XIcon,
} from 'lucide-react';

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
    const [activeSection, setActiveSection] = useState('terminal');

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
                className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'border-neon-green/30 border-b bg-black/90 backdrop-blur-md'
                        : 'bg-transparent'
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            className="flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="border-neon-green bg-neon-green/20 flex h-8 w-8 items-center justify-center rounded border-2">
                                <TerminalIcon className="text-neon-green h-5 w-5" />
                            </div>
                            <span className="font-cyber text-neon-green glow-text text-xl">
                                JRO_TERMINAL
                            </span>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden items-center gap-8 md:flex">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <motion.a
                                        key={item.key}
                                        href={item.href}
                                        className={`flex items-center gap-2 font-mono text-sm transition-all duration-300 ${
                                            activeSection === item.key
                                                ? 'text-neon-green glow-text'
                                                : 'hover:text-neon-green text-gray-400'
                                        }`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {item.label}
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Status Indicator */}
                        <div className="hidden items-center gap-2 md:flex">
                            <div className="bg-neon-green h-2 w-2 animate-pulse rounded-full"></div>
                            <span className="text-neon-green font-mono text-xs">ONLINE</span>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="text-neon-green p-2 md:hidden"
                            onClick={() => setIsMobileMenuOpen(true)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <MenuIcon className="h-6 w-6" />
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Drawer */}
            <Drawer
                title={
                    <span className="font-cyber text-neon-green glow-text">NAVIGATION_MENU</span>
                }
                placement="right"
                onClose={() => setIsMobileMenuOpen(false)}
                open={isMobileMenuOpen}
                style={{
                    background: 'rgba(10, 10, 10, 0.95)',
                }}
                headerStyle={{
                    background: 'rgba(10, 10, 10, 0.95)',
                    borderBottom: '1px solid #00ff00',
                }}
                bodyStyle={{
                    background: 'rgba(10, 10, 10, 0.95)',
                    padding: '20px',
                }}
            >
                <div className="space-y-6">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.a
                                key={item.key}
                                href={item.href}
                                className="neon-border hover:text-neon-green flex items-center gap-3 rounded p-3 text-gray-300 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                                whileHover={{ x: 10 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="font-mono">{item.label}</span>
                            </motion.a>
                        );
                    })}

                    <div className="neon-border mt-8 rounded p-4">
                        <div className="mb-2 flex items-center gap-2">
                            <div className="bg-neon-green h-2 w-2 animate-pulse rounded-full"></div>
                            <span className="text-neon-green font-mono text-xs">STATUS</span>
                        </div>
                        <p className="font-mono text-sm text-gray-300">
                            Available for leadership roles
                        </p>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
