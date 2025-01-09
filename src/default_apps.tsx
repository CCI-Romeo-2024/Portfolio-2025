import {ProjectExample} from "@atoms/project_example/project_example.tsx";
import {ReactElement} from 'react'


export interface IApp {
    label: string,
    id: string,
    content: ReactElement,
    iconKey: 'whatsweb' | 'whatsecosystem' | 'server' | 'rootme' | 'oknestor' | 'contact' | 'document' | 'pages',
    state: 0 | 1 | 2,
    onClick?: () => void;
}

export const defaultApps: IApp[][] = [
    [
        {
            label: 'WhatsWeb',
            id: 'whatsweb',
            content: <ProjectExample key={'whatsweb'} />,
            iconKey: 'whatsweb',
            state: 2
        },
        {
            label: 'RootMe',
            id: 'rootme',
            content: <ProjectExample key={'rootme'} />,
            iconKey: 'rootme',
            state: 0,
            // onClick: () => { openFullscreen(document.querySelector('#app')) }
        }
    ],
    [
        {
            label: 'Contact',
            id: 'contact',
            content: <ProjectExample key={'contact'} />,
            iconKey: 'contact',
            state: 0
        }
    ]
]
