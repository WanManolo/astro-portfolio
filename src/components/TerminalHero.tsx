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
    'root@wanman:~$ █'
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
                    setDisplayedLines(prev => {
                        const newLines = [...prev];
                        if (newLines[currentLineIndex]) {
                            newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
                        } else {
                            newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
                        }
                        return newLines;
                    });
                    setCurrentCharIndex(prev => prev + 1);
                }, 50);

                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setCurrentLineIndex(prev => prev + 1);
                    setCurrentCharIndex(0);
                }, 1000);

                return () => clearTimeout(timeout);
            }
        }
    }, [currentLineIndex, currentCharIndex]);

    return (
        <section className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Terminal Window */}
                    <motion.div
                        className="terminal-window"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="terminal-header">
                            <div className="terminal-dot red"></div>
                            <div className="terminal-dot yellow"></div>
                            <div className="terminal-dot green"></div>
                            <span className="ml-4 text-sm text-gray-400 font-mono">
                root@infosec-terminal
              </span>
                        </div>

                        <div className="p-6 min-h-[400px] bg-black/90 font-mono text-sm">
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
                                className="text-5xl md:text-6xl font-cyber uppercase tracking-wider text-neon-green glow-text"
                                data-text="JUAN MANUEL"
                            >
                                JUAN MANUEL
                            </motion.h1>

                            <motion.h2
                                className="text-2xl md:text-3xl font-mono text-neon-blue glow-text"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                RODRIGUEZ_
                            </motion.h2>

                            <div className="flex flex-wrap gap-4 mt-6">
                                <div className="flex items-center gap-2 px-4 py-2 neon-border rounded">
                                    <Shield className="w-5 h-5 text-neon-green" />
                                    <span className="text-sm font-mono text-neon-green">INFOSEC_LEADER</span>
                                </div>

                                <div className="flex items-center gap-2 px-4 py-2 neon-border rounded">
                                    <Code className="w-5 h-5 text-neon-blue" />
                                    <span className="text-sm font-mono text-neon-blue">SENIOR_ENGINEER</span>
                                </div>

                                <div className="flex items-center gap-2 px-4 py-2 neon-border rounded">
                                    <Users className="w-5 h-5 text-neon-purple" />
                                    <span className="text-sm font-mono text-neon-purple">TEAM_LEAD</span>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                        >
                            <p className="text-lg text-gray-300 font-mono leading-relaxed">
                                <span className="text-neon-green">[MISSION]</span> Building secure, scalable applications
                                while leading high-performance teams to deliver exceptional results in the cybersecurity landscape.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <button className="cyber-btn group">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-5 h-5" />
                    ACCESS_PORTFOLIO
                  </span>
                                </button>

                                <button className="cyber-btn group">
                  <span className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
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
                className="absolute bottom-10 right-10 ascii-art text-neon-green opacity-30"
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