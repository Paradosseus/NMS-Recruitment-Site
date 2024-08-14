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
    themes: [
      {
        mytheme: {
            "primary": "#c51d26",       
            "primary-content": "#c51d26",
            "secondary": "#ff00ff",
            "secondary-content": "#160016",
            "accent": "#00ffff",       
            "accent-content": "#001616",      
            "neutral": "#ff00ff",                
            "neutral-content": "#160016",         
            "base-100": "#ffffff",                    
            "base-200": "#d4575e",                  
            "base-300": "#bebebe",                   
            "base-content": "#161616",                   
            "info": "#0000ff",                    
            "info-content": "#c6dbff",                   
            "success": "#00ff00",                   
            "success-content": "#001600",                    
            "warning": "#00ff00",                    
            "warning-content": "#001600",
            "error": "#ff0000",                  
            "error-content": "#160000",
          },
        },
    ]
  }
}

