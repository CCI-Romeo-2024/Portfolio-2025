import type { Meta, StoryObj } from '@storybook/react';
import { Dock } from './dock.tsx';

const meta = {
    component: Dock,
    title: "Molecules/Dock",
} satisfies Meta<typeof Dock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        apps: [
            {
                label: 'WhatsWeb',
                iconKey: 'whatsweb',
                state: 1
            },
            {
                label: 'WhatsEcoSystem',
                iconKey: 'whatsecosystem',
                state: 0
            },
            {
                label: 'Server',
                iconKey: 'server',
                state: 0
            }
        ]
    },
};
