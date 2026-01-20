/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: 'hsl(var(--color-primary))',
                secondary: 'hsl(var(--color-secondary))',
                accent: '#3b82f6', // Bright Blue (Keeping consistent accent)
                gold: '#f59e0b',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Playfair Display', 'serif'],
            },
            textColor: {
                DEFAULT: 'hsl(var(--color-text))',
                muted: 'hsl(var(--color-text-muted))',
            }
        },
    },
    plugins: [],
}
