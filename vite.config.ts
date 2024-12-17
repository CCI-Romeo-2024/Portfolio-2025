import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    base: '',
    plugins: [react()],

    resolve: {
        alias: {
            '@atoms': path.resolve(__dirname, 'src/design-system/atoms'),
            '@molecules': path.resolve(__dirname, 'src/design-system/molecules'),
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
