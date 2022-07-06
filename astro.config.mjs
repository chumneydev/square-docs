import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        host: '192.168.12.12',
    },
    site: 'https://chumneydev.github.io',
    base: '/square-docs'

});
