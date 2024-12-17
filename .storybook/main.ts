import type {StorybookConfig} from "@storybook/react-vite";
import path from 'path'

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    viteFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@atoms': path.resolve(__dirname, '../src/design-system/atoms'),
            '@molecules': path.resolve(__dirname, '../src/design-system/molecules'),
            '@assets': path.resolve(__dirname, '../src/assets'),
            '@css': path.resolve(__dirname, '../src/css'),
            '#': path.resolve(__dirname, '../src/'),
        };
        return config;
    },
};
export default config;
