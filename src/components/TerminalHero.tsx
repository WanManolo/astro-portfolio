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
        <section className="tw:relative tw:flex tw:min-h-screen tw:items-center tw:justify-center tw:overflow-hidden tw:p-6">
            {/* Grid Background */}
            <div className="tw:bg-cyber-grid tw:absolute tw:inset-0 tw:opacity-20"></div>

            <div className="tw:relative tw:z-10 tw:container tw:mx-auto tw:max-w-6xl">
                <div className="tw:grid tw:items-center tw:gap-12 tw:lg:grid-cols-2">
                    {/* Terminal Window */}
                    <motion.div
                        className="terminal-window tw:border-[#39ff14]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="terminal-header">
                            <div className="terminal-dot red"></div>
                            <div className="terminal-dot yellow"></div>
                            <div className="terminal-dot green"></div>
                            <span className="tw:ml-4 tw:font-mono tw:text-sm tw:text-gray-400">
                                root@infosec-terminal
                            </span>
                        </div>

                        <div className="tw:min-h-[400px] tw:bg-black/90 tw:p-6 tw:font-mono tw:text-sm">
                            {displayedLines.map((line, index) => (
                                <div key={index} className="tw:mb-2">
                                    <span className="tw:text-[#39ff14] glow-text">
                                        {line}
                                        {index === currentLineIndex && (
                                            <span className="tw:animate-blink tw:text-[#39ff14]">█</span>
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Profile Info */}
                    <motion.div
                        className="tw:space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="tw:space-y-4">
                            <motion.h1
                                className="tw:font-cyber tw:text-[#39ff14] glow-text tw:text-5xl tw:tracking-wider tw:uppercase tw:md:text-6xl"
                                data-text="JUAN MANUEL"
                            >
                                JUAN MANUEL
                            </motion.h1>

                            <motion.h2
                                className="tw:text-[#00d4ff] glow-text tw:font-mono tw:text-2xl tw:md:text-3xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                RODRIGUEZ_
                            </motion.h2>

                            <div className="tw:mt-6 tw:flex tw:flex-wrap tw:gap-4">
                                <div className="neon-border tw:flex tw:items-center tw:gap-2 tw:rounded tw:px-4 tw:py-2">
                                    <Shield className="text-[#39ff14] tw:h-5 tw:w-5" />
                                    <span className="text-[#39ff14] tw:font-mono tw:text-sm">
                                        INFOSEC_LEADER
                                    </span>
                                </div>

                                <div className="neon-border tw:flex tw:items-center tw:gap-2 tw:rounded tw:px-4 tw:py-2">
                                    <Code className="tw:text-[#00d4ff] tw:h-5 tw:w-5" />
                                    <span className="tw:text-[#00d4ff] tw:font-mono tw:text-sm">
                                        SENIOR_ENGINEER
                                    </span>
                                </div>

                                <div className="neon-border tw:flex tw:items-center tw:gap-2 tw:rounded tw:px-4 tw:py-2">
                                    <Users className="tw:text-[#bf00ff] tw:h-5 tw:w-5" />
                                    <span className="tw:text-[#bf00ff] tw:font-mono tw:text-sm">
                                        TEAM_LEAD
                                    </span>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            className="tw:space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                        >
                            <p className="tw:font-mono tw:text-lg tw:leading-relaxed tw:text-gray-300">
                                <span className="tw:text-[#39ff14]">[MISSION]</span> Building secure,
                                scalable applications while leading high-performance teams to
                                deliver exceptional results in the cybersecurity landscape.
                            </p>

                            <div className="tw:mt-8 tw:flex tw:flex-col tw:gap-4 tw:sm:flex-row">
                                <button className="cyber-btn tw:group">
                                    <span className="tw:flex tw:items-center tw:gap-2">
                                        <Terminal className="tw:h-5 tw:w-5" />
                                        ACCESS_PORTFOLIO
                                    </span>
                                </button>

                                <button className="cyber-btn tw:group">
                                    <span className="tw:flex tw:items-center tw:gap-2">
                                        <Shield className="tw:h-5 tw:w-5" />
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
                className="ascii-art tw:text-[#39ff14] tw:absolute tw:right-10 tw:bottom-10 tw:opacity-30"
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
