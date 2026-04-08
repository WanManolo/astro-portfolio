import type { Config } from 'tailwindcss';

const config: Config = {
    prefix: 'tw:',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Source Code Pro', 'monospace'],
                display: ['Orbitron', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#f0f9fa',
                    100: '#d9f2f5',
                    200: '#b7e5eb',
                    300: '#86d0da',
                    400: '#4eb2c1',
                    500: '#3396a7', // Primary Teal
                    600: '#2d7a8a',
                    700: '#296472',
                    800: '#27525e',
                    900: '#244650',
                    950: '#132d36',
                },
                slate: {
                    // Refined slate for dark mode
                    900: '#0f172a',
                    950: '#020617',
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                slideUp: {
                    from: { transform: 'translateY(20px)', opacity: '0' },
                    to: { transform: 'translateY(0)', opacity: '1' },
                },
            },
            backgroundImage: {
                'subtle-grid': 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
            },
            backgroundSize: {
                'subtle-grid': '40px 40px',
            },
        },
    },
    plugins: [],
};

export default config;