/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#495E57', 
          dark: '#495E57',    
          light: '#F4CE14',   
        },
        secondary: {
          peach: '#EE9972',  
          blush: '#FBDAAB',  
          gray: '#EDEFEE',  
          charcoal: '#333333', 
        },
      },
    },
  },
  plugins: [],
}
