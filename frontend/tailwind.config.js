/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {keyframes: {
  crazyFloat: {
    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
    '50%': { transform: 'translateY(-18px) rotate(2deg)' },
  },
  crazyFloatSlow: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-25px)' },
  },
  pulseSlow: {
    '0%, 100%': { opacity: '0.15' },
    '50%': { opacity: '0.35' },
  },
  slideLeftCrazy: {
    '0%': { opacity: '0', transform: 'translateX(-80px) scale(0.9)' },
    '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
  },
  slideRightCrazy: {
    '0%': { opacity: '0', transform: 'translateX(80px) scale(0.9)' },
    '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
  },
  imageShake: {
    '0%': { transform: 'translate(0,0)' },
    '25%': { transform: 'translate(4px,-4px)' },
    '50%': { transform: 'translate(-4px,4px)' },
    '75%': { transform: 'translate(4px,4px)' },
    '100%': { transform: 'translate(0,0)' },
  },
  textWave: {
    '0%': { letterSpacing: '1px' },
    '50%': { letterSpacing: '4px' },
    '100%': { letterSpacing: '1px' },
  }
},

animation: {
  crazyFloat: 'crazyFloat 4s ease-in-out infinite',
  crazyFloatSlow: 'crazyFloatSlow 6s ease-in-out infinite',
  pulseSlow: 'pulseSlow 6s infinite',
  imageShake: 'imageShake 0.4s linear',
  slideLeftCrazy: 'slideLeftCrazy 1s ease-out',
  slideRightCrazy: 'slideRightCrazy 1s ease-out',
  textWave: 'textWave 3s ease-in-out infinite',

  
}
},
  },
  plugins: [],
}
