import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import { watch } from "vite-plugin-watch";

export default defineConfig({
    plugins: [
        watch({
            pattern: "routes/*.php",
            command: "php artisan trail:generate",
        }),
        laravel({
            input: "resources/js/app.ts",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
