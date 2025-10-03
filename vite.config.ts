import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        VueRouter(),
        vue(),
        tailwindcss(),
        Components({
            dirs: ['src/components', 'src/layouts'],
            deep: true,
            extensions: ['vue'],
        }),
        AutoImport({
            include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
            imports: [
                'vue',
                'vue-router',
                {
                    '@/helpers/http': ['http'],
                    '@/stores/header': ['useHeaderStore'],
                },
            ],
            dts: './auto-imports.d.ts',
            vueTemplate: true,
            viteOptimizeDeps: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
