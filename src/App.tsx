import { useState, useRef, useEffect, MutableRefObject } from 'react';

import { WindowServer } from '@molecules/window_server/window_server.tsx';
import { defaultApps, IApp } from '#/default_apps.tsx';
import { Dock } from '@molecules/dock/dock.tsx';
import { App } from '@molecules/app/app.tsx'

import Draggable from 'gsap/Draggable'
import gsap from 'gsap';

import '@css/App.scss'




gsap.registerPlugin(Draggable);

const createDraggableApp = (uniqueKey: string) => {
    Draggable.create(`.app-id-${uniqueKey}`, {
        bounds: '.apps-container',
        trigger: `.app-id-${uniqueKey} > .app-header`,
        allowEventDefault: true,
        zIndexBoost: false
    })
}

function MacOS() {

    const [appWindow, setAppWindow] = useState({
        focusAppName: 'Finder',
        menuItems: [
            { label: 'Fichier' },
            { label: 'Éditer' },
            { label: 'Présentation' },
            { label: 'Aller' },
            { label: 'Fenêtre' },
            { label: 'Aide' },
        ]
    })


    const [apps, setApps] = useState(defaultApps)

    const updateAppState = (id: string, newState: 0 | 1 | 2) => {
        setApps((prevApps) =>
            prevApps.map((group) =>
                group.map((app) =>
                    app.id === id ? { ...app, state: newState } : app
                )
            )
        );
    };


    const zIndexBoost = useRef(100);

    const appsContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!appsContainer.current) return;

        apps.forEach(appGroup => appGroup.forEach((app) => {
            createDraggableApp(app.id)
        }))

    }, [appsContainer])

    const handleZIndexBoost = (e: MutableRefObject<HTMLDivElement | null>, currentApp: IApp) => {
        if (!e.current) return
        console.log(`➡️ Focus : ${currentApp.id}`)

        e.current.style.zIndex = zIndexBoost.current.toString();
        zIndexBoost.current++;

        setAppWindow((prevState) =>
            ({...prevState, focusAppName: currentApp.label}))
    }


    return <div id="app">
        <WindowServer {...appWindow} />
        <div className="apps-container" ref={appsContainer}>

            {apps.map((appGroup, groupIndex) => (
                appGroup.map((app, appIndex) => (
                    <App label={app.label} state={app.state} uniqueKey={app.id} type={app.type} key={groupIndex+appIndex} onMouseDown={(e) => {handleZIndexBoost(e, app)}} updateState={(newState) => updateAppState(app.id, newState)}>
                        {app.content}
                    </App>
                ))
            ))}

        </div>
        <Dock apps={apps} updateAppState={updateAppState}/>
    </div>;
}

export default MacOS
