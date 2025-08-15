import type { Config } from 'tailwindcss';

export const config: Config = {
    prefix: 'tw:',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                mono: ['JetBrains Mono', 'Source Code Pro', 'monospace'],
                cyber: ['Orbitron', 'monospace'],
            },
            colors: {
                cyber: {
                    50: '#00ff9f',
                    100: '#00e693',
                    200: '#00cc87',
                    300: '#00b37b',
                    400: '#00996f',
                    500: '#008063',
                    600: '#006657',
                    700: '#004d4b',
                    800: '#00333f',
                    900: '#001a33',
                },
                neon: {
                    green: '#39ff14',
                    blue: '#00d4ff',
                    purple: '#bf00ff',
                    pink: '#ff10f0',
                    orange: '#ff4500',
                },
                terminal: {
                    bg: '#0a0a0a',
                    green: '#00ff00',
                    amber: '#ffbf00',
                    red: '#ff0040',
                },
            },
            animation: {
                glow: 'glow 2s ease-in-out infinite alternate',
                matrix: 'matrix 20s linear infinite',
                scan: 'scan 2s linear infinite',
                type: 'type 3.5s steps(40, end)',
                blink: 'blink 1s infinite',
                flicker: 'flicker 0.5s infinite alternate',
            },
            keyframes: {
                glow: {
                    from: { textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00' },
                    to: { textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00' },
                },
                matrix: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100vh)' },
                },
                scan: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100vw)' },
                },
                type: {
                    from: { width: '0' },
                    to: { width: '100%' },
                },
                blink: {
                    '0%, 50%': { opacity: '1' },
                    '51%, 100%': { opacity: '0' },
                },
                flicker: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0.8' },
                },
            },
            backgroundImage: {
                'cyber-grid':
                    'linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)',
                'terminal-scan':
                    'linear-gradient(90deg, transparent, rgba(0,255,0,0.3), transparent)',
            },
            backgroundSize: {
                'cyber-grid': '50px 50px',
            },
        },
    },
    plugins: [],
    // corePlugins: {
    //     preflight: false, // Disable Tailwind's preflight to avoid conflicts with Ant Design
    // }
};
