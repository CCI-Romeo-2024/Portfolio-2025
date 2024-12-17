import type { Meta, StoryObj } from '@storybook/react';
import { AppIcon } from './app_icon.tsx';


const meta = {
    title: 'Atom/AppIcon',
    component: AppIcon
} satisfies Meta<typeof AppIcon>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Base: Story = {
    args: {
        label: "WhatsWeb",
        state: 0,
        iconKey: 'whatsweb'
    },
};

export const Contact: Story = {
    args: {
        label: "Contact",
        state: 1,
        iconKey: 'contact'
    },
};

export const Spotify: Story = {
    args: {
        label: "Spotify",
        state: 0,
        iconKey: "whatsweb"
    }
};
