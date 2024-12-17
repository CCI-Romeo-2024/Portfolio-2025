import { AppIcon } from '@atoms/app_icon/app_icon.tsx'

import './style.scss'

interface App {
    label: string;
    state: number;
    iconKey: 'whatsweb' | 'whatsecosystem' | 'server' | 'rootme' | 'oknestor' | 'contact' | 'document' | 'pages';
}

export interface DockProps {
    apps: App[];
}

export const Dock = ({apps}: DockProps) => {
    return <>
        <div className="dock">
            {apps.map(app => <AppIcon {...app} />)}
        </div>
    </>
};


