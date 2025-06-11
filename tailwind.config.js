

// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",

    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],   // for Google Fonts
                myfont: ['MyFont', 'sans-serif'],     // for local fonts
                yatra: ["Yatra One", 'system-ui'],     // for local fonts
            },
        },
    },
    plugins: [],
}
