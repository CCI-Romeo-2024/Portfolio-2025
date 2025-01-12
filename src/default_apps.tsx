import {ProjectExample} from "@atoms/project_example/project_example.tsx";
import {ReactElement, StrictMode} from 'react'
import {Terminal} from "@molecules/terminal/terminal.tsx";


export interface IApp {
    label: string,
    id: string,
    content: ReactElement,
    iconKey: 'whatsweb' | 'whatsecosystem' | 'server' | 'rootme' | 'oknestor' | 'contact' | 'document' | 'pages',
    state: 0 | 1 | 2,
    type: 'application' | 'project',
    onClick?: () => void;
}

export const defaultApps: IApp[][] = [
    [
        {
            label: 'WhatsWeb',
            id: 'whatsweb',
            content: <ProjectExample key={'whatsweb'} />,
            iconKey: 'whatsweb',
            state: 0,
            type: 'project'
        },
        {
            label: 'RootMe',
            id: 'rootme',
            content: <StrictMode><Terminal key={'rootme'} /></StrictMode>,
            iconKey: 'rootme',
            state: 2,
            type: 'application'
            // onClick: () => { openFullscreen(document.querySelector('#app')) }
        }
    ],
    [
        {
            label: 'Contact',
            id: 'contact',
            content: <ProjectExample key={'contact'} />,
            iconKey: 'contact',
            state: 0,
            type: 'project'
        }
    ]
]
