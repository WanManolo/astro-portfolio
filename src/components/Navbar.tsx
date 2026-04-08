import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Drawer } from 'antd';
import {
    Shield,
    Menu as MenuIcon,
    X,
    Github,
    Linkedin,
    ExternalLink
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const menuItems = [
    { key: 'about', label: 'About', href: '#about' },
    { key: 'expertise', label: 'Expertise', href: '#expertise' },
    { key: 'experience', label: 'Experience', href: '#experience' },
    { key: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`tw:fixed tw:top-0 tw:right-0 tw:left-0 tw:z-50 tw:transition-all tw:duration-300 ${
                isScrolled
                    ? 'tw:bg-white/80 tw:dark:bg-slate-950/80 tw:backdrop-blur-md tw:border-b tw:border-slate-200 tw:dark:border-slate-800 tw:py-3'
                    : 'tw:bg-transparent tw:py-6'
            }`}
        >
            <div className="tw:max-w-7xl tw:mx-auto tw:px-6">
                <div className="tw:flex tw:items-center tw:justify-between">
                    {/* Logo */}
                    <a href="#" className="tw:flex tw:items-center tw:gap-2.5 tw:group">
                        <div className="tw:bg-brand-500 tw:text-white tw:p-1.5 tw:rounded-lg tw:transition-transform tw:group-hover:scale-110">
                            <Shield className="tw:h-5 tw:w-5" />
                        </div>
                        <span className="tw:font-display tw:font-bold tw:text-lg tw:tracking-tight tw:text-slate-900 tw:dark:text-white">
                            JR<span className="tw:text-brand-500">.</span>ENGINEERING
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="tw:hidden tw:items-center tw:gap-8 tw:md:flex">
                        {menuItems.map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                className="tw:text-sm tw:font-medium tw:text-slate-600 tw:dark:text-slate-400 tw:hover:text-brand-500 tw:dark:hover:text-brand-400 tw:transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="tw:h-4 tw:w-px tw:bg-slate-200 tw:dark:bg-slate-800" />
                        <div className="tw:flex tw:items-center tw:gap-4">
                            <ThemeToggle />
                            <a
                                href="https://github.com/wanman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="tw:text-slate-600 tw:dark:text-slate-400 tw:hover:text-slate-900 tw:dark:hover:text-white"
                            >
                                <Github className="tw:h-5 tw:w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="tw:flex tw:items-center tw:gap-4 tw:md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="tw:p-2 tw:text-slate-600 tw:dark:text-slate-400"
                        >
                            <MenuIcon className="tw:h-6 tw:w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <Drawer
                title={
                    <span className="tw:font-display tw:font-bold tw:dark:text-white">
                        Menu
                    </span>
                }
                placement="right"
                onClose={() => setIsMobileMenuOpen(false)}
                open={isMobileMenuOpen}
                className="tw:dark:bg-slate-950"
                styles={{
                    header: { borderBottom: '1px solid #1e293b' },
                    body: { padding: '24px' }
                }}
            >
                <div className="tw:flex tw:flex-col tw:gap-6">
                    {menuItems.map((item) => (
                        <a
                            key={item.key}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="tw:text-lg tw:font-medium tw:text-slate-900 tw:dark:text-white tw:hover:text-brand-500"
                        >
                            {item.label}
                        </a>
                    ))}
                    <hr className="tw:border-slate-800" />
                    <div className="tw:flex tw:gap-6">
                        <a href="#" className="tw:text-slate-400 tw:hover:text-white"><Github /></a>
                        <a href="#" className="tw:text-slate-400 tw:hover:text-white"><Linkedin /></a>
                    </div>
                </div>
            </Drawer>
        </nav>
    );
}
