import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',

    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    darkMode: "class",
    daisyui: {
        themes: ["light"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        base: false, // applies background color and foreground color for root element by default
    },

    plugins: [
        forms,
        require("daisyui")],
});
