import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    base: '',
    plugins: [react()],

    resolve: {
        alias: {
            '@atoms': path.resolve(__dirname, 'src/stories/atoms'),
            '@molecules': path.resolve(__dirname, 'src/stories/molecules'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@css': path.resolve(__dirname, 'src/css'),
            '#': path.resolve(__dirname, 'src/'),
        },
    },

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@css/global";`,
            },
        }
    },
})
