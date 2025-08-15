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
    XIcon
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
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-black/90 backdrop-blur-md border-b border-neon-green/30'
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
                            <div className="w-8 h-8 border-2 border-neon-green rounded bg-neon-green/20 flex items-center justify-center">
                                <TerminalIcon className="w-5 h-5 text-neon-green" />
                            </div>
                            <span className="font-cyber text-xl text-neon-green glow-text">
                JRO_TERMINAL
              </span>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <motion.a
                                        key={item.key}
                                        href={item.href}
                                        className={`flex items-center gap-2 font-mono text-sm transition-all duration-300 ${
                                            activeSection === item.key
                                                ? 'text-neon-green glow-text'
                                                : 'text-gray-400 hover:text-neon-green'
                                        }`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {item.label}
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Status Indicator */}
                        <div className="hidden md:flex items-center gap-2">
                            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                            <span className="font-mono text-xs text-neon-green">ONLINE</span>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden p-2 text-neon-green"
                            onClick={() => setIsMobileMenuOpen(true)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <MenuIcon className="w-6 h-6" />
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Drawer */}
            <Drawer
                title={
                    <span className="font-cyber text-neon-green glow-text">
                    NAVIGATION_MENU
                    </span>
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
                                className="flex items-center gap-3 p-3 rounded neon-border text-gray-300 hover:text-neon-green transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                                whileHover={{ x: 10 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="font-mono">{item.label}</span>
                            </motion.a>
                        );
                    })}

                    <div className="mt-8 p-4 neon-border rounded">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                            <span className="font-mono text-xs text-neon-green">STATUS</span>
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