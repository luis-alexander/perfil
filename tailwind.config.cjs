/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend:{},
    },
    plugins: [],
}
export default {
    content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
    safelist: ["opacity-100", "translate-y-0", "opacity-0", "translate-y-10"],
    theme: { extend: {} },
    plugins: [],
}