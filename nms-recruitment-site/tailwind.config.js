import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'custom-red' : '#C51D26',
      'custom-background' : '#f7f7f7',
      'custom-content-color' : '#ffffff',
      'custom-container' : "#ffffff"
    },
    extend: {
      
    },
  },
  plugins: [
    // require('daisyui'),
    daisyui
  ],
  daisyui: {
    theme: ["light"]
  }
}

