import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Code, Users } from 'lucide-react';

const commands = [
    'root@wanman:~$ whoami',
    'Juan Manuel Rodríguez - Senior InfoSec Engineer',
    'root@wanman:~$ cat skills.txt',
    'Frontend/Fullstack Development | Information Security | Team Leadership',
    'root@wanman:~$ ls achievements/',
    'enterprise_security/ | scalable_apps/ | team_leadership/ | devsecops/',
    'root@wanman:~$ status',
    'STATUS: Available for leadership roles',
    'root@wanman:~$ █',
];

export default function TerminalHero() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    useEffect(() => {
        if (currentLineIndex < commands.length) {
            const currentLine = commands[currentLineIndex];

            if (currentCharIndex < currentLine.length) {
                const timeout = setTimeout(() => {
                    setDisplayedLines((prev) => {
                        const newLines = [...prev];
                        if (newLines[currentLineIndex]) {
                            newLines[currentLineIndex] = currentLine.substring(
                                0,
                                currentCharIndex + 1
                            );
                        } else {
                            newLines[currentLineIndex] = currentLine.substring(
                                0,
                                currentCharIndex + 1
                            );
                        }
                        return newLines;
                    });
                    setCurrentCharIndex((prev) => prev + 1);
                }, 50);

                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setCurrentLineIndex((prev) => prev + 1);
                    setCurrentCharIndex(0);
                }, 1000);

                return () => clearTimeout(timeout);
            }
        }
    }, [currentLineIndex, currentCharIndex]);

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden p-6">
            {/* Grid Background */}
            <div className="bg-cyber-grid absolute inset-0 opacity-20"></div>

            <div className="relative z-10 container mx-auto max-w-6xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Terminal Window */}
                    <motion.div
                        className="terminal-window tw:border-neon-green"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="terminal-header">
                            <div className="terminal-dot red"></div>
                            <div className="terminal-dot yellow"></div>
                            <div className="terminal-dot green"></div>
                            <span className="ml-4 font-mono text-sm text-gray-400">
                                root@infosec-terminal
                            </span>
                        </div>

                        <div className="min-h-[400px] bg-black/90 p-6 font-mono text-sm">
                            {displayedLines.map((line, index) => (
                                <div key={index} className="mb-2">
                                    <span className="text-neon-green glow-text">
                                        {line}
                                        {index === currentLineIndex && (
                                            <span className="animate-blink text-neon-green">█</span>
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Profile Info */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="space-y-4">
                            <motion.h1
                                className="font-cyber text-neon-green glow-text text-5xl tracking-wider uppercase md:text-6xl"
                                data-text="JUAN MANUEL"
                            >
                                JUAN MANUEL
                            </motion.h1>

                            <motion.h2
                                className="text-neon-blue glow-text font-mono text-2xl md:text-3xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                RODRIGUEZ_
                            </motion.h2>

                            <div className="mt-6 flex flex-wrap gap-4">
                                <div className="neon-border flex items-center gap-2 rounded px-4 py-2">
                                    <Shield className="text-neon-green h-5 w-5" />
                                    <span className="text-neon-green font-mono text-sm">
                                        INFOSEC_LEADER
                                    </span>
                                </div>

                                <div className="neon-border flex items-center gap-2 rounded px-4 py-2">
                                    <Code className="text-neon-blue h-5 w-5" />
                                    <span className="text-neon-blue font-mono text-sm">
                                        SENIOR_ENGINEER
                                    </span>
                                </div>

                                <div className="neon-border flex items-center gap-2 rounded px-4 py-2">
                                    <Users className="text-neon-purple h-5 w-5" />
                                    <span className="text-neon-purple font-mono text-sm">
                                        TEAM_LEAD
                                    </span>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                        >
                            <p className="font-mono text-lg leading-relaxed text-gray-300">
                                <span className="text-neon-green">[MISSION]</span> Building secure,
                                scalable applications while leading high-performance teams to
                                deliver exceptional results in the cybersecurity landscape.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <button className="cyber-btn group">
                                    <span className="flex items-center gap-2">
                                        <Terminal className="h-5 w-5" />
                                        ACCESS_PORTFOLIO
                                    </span>
                                </button>

                                <button className="cyber-btn group">
                                    <span className="flex items-center gap-2">
                                        <Shield className="h-5 w-5" />
                                        CONNECT_SECURE
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ASCII Art Decoration */}
            <motion.div
                className="ascii-art text-neon-green absolute right-10 bottom-10 opacity-30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 2 }}
            >
                {`    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
   ███████████████████████████████
  ███ ▄▄▄▄▄ █▀█ █▄█ █▄▄█ ▄▄▄▄▄ ███
  ███ █   █ █▄█ ███ █▄▄█ █   █ ███
  ███ █▄▄▄█ █▀█ █▀█ ███▄ █▄▄▄█ ███
  ███▄▄▄▄▄▄▄█▄█▄█▄█▄█▄▄█▄▄▄▄▄▄▄███
  ███ ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ ███
  █████████████████████████████████`}
            </motion.div>
        </section>
    );
}
