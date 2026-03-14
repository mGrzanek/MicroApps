/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontSize: {
          base: '17px',
        },
        colors: {
            main: '#06042B',
            light: '#FFFFFF',
            danger: '#ED1C24',
            grass: '#4CAF50',
            cloud: 'gray-200',
            icons: '#D9D9D9',
            form: '#E4E4EA',
        },
        fontFamily: {
            inter: ['var(--font-inter)', 'sans-serif'],
            montserrat: ['var(--font-montserrat)', 'sans-serif'],
        },
    },
  },
  plugins: [],
}

export default config;