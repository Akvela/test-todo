import { ghPages } from "vite-plugin-gh-pages";

/** @type {import('vite').UserConfig} */
export default {
    base: "/test-todo/",
    plugins: [ghPages()],
};