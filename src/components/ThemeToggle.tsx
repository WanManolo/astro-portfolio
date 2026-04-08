import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(
        typeof localStorage !== 'undefined' ? localStorage.getItem('theme') || 'dark' : 'dark'
    );

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'light') {
            root.classList.remove('dark');
        } else {
            root.classList.add('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="tw:p-2 tw:rounded-lg tw:bg-slate-100 tw:dark:bg-slate-800 tw:text-slate-600 tw:dark:text-slate-400 tw:hover:bg-slate-200 tw:dark:hover:bg-slate-700 tw:transition-colors"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <Moon className="tw:h-5 tw:w-5" /> : <Sun className="tw:h-5 tw:w-5" />}
        </button>
    );
}
