import { ProjectTemplate } from "@atoms/project_template/project_template.tsx";
import { ReactElement } from 'react'
import { Terminal } from "@molecules/terminal/terminal.tsx";
import {Contact} from "@molecules/contact/contact.tsx";


export interface IApp {
    label: string,
    id: string,
    content: ReactElement,
    iconKey: 'whatsweb' | 'whatsecosystem' | 'server' | 'rootme' | 'oknestor' | 'contact' | 'document' | 'pages',
    state: 0 | 1 | 2,
    type: 'application' | 'project' | 'contact',
    onClick?: () => void;
}

export const defaultApps: IApp[][] = [
    [
        {
            label: 'WhatsWeb',
            id: 'whatsweb',
            content: <ProjectTemplate key={'whatsweb'} />,
            iconKey: 'whatsweb',
            state: 0,
            type: 'project'
        },
        {
            label: 'RootMe',
            id: 'rootme',
            content: <Terminal key={'rootme'} />,
            iconKey: 'rootme',
            state: 0,
            type: 'application'
            // onClick: () => { openFullscreen(document.querySelector('#app')) }
        }
    ],
    [
        {
            label: 'Contact',
            id: 'contact',
            content: <Contact key={'contact'} />,
            iconKey: 'contact',
            state: 2,
            type: 'contact'
        }
    ]
]
