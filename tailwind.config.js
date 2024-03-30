/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: [],
    theme: {
        extend: {},
        screens: {
            'xxs': '360px',
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1920px'
        }
    },
    fontFamily: {
        sans: ['Roboto', "sans-serif"],
        rubik: ['Rubik', "sans-serif"],
        montserrat: ['Montserrat', "sans-serif"],
        quicksand: ['Quicksand', "sans-serif"],
        bitter: ['Bitter', "serif"],
        literata: ['Literata', "serif"],
        robotoslab: ['"Roboto Slab"', "serif"],
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [{
            custom_lemonade: {
                "primary": "oklch(58.92% 0.199 134.6)",
                "secondary": "oklch(77.75% 0.196 111.09)",
                "accent": "oklch(85.39% 0.201 100.73)",
                "neutral": "oklch(30.98% 0.075 108.6)",
                "base-100": "oklch(98.71% 0.02 123.72)",
                "info": "oklch(86.19% 0.047 224.14)",
                "success": "oklch(86.19% 0.047 157.85)",
                "warning": "oklch(86.19% 0.047 102.15)",
                "error": "#ef4444",
            }
        }, "halloween"],
    },
}

