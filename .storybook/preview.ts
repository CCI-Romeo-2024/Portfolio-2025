import type { Preview } from "@storybook/react";
// import '../src/css/reset.css'
// import '../src/css/global.scss'


const preview: Preview = {
    parameters: {
        layout: 'centered',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
