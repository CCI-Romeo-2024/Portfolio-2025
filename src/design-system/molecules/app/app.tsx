import {PropsWithChildren, useState, useEffect, useRef, MutableRefObject} from "react";
import './style.scss'
import './style-project.scss'
import './style-application.scss'
import './style-contact.scss'

import {Controls} from "@atoms/controls/controls.tsx";


interface IAppC {
    label: string,
    uniqueKey: string,
    state: 0 | 1 | 2,
    type: 'project' | 'application' | 'contact',
    onMouseDown?: (e: MutableRefObject<HTMLDivElement | null>) => void,
    updateState?: (newState: 0 | 1 | 2) => void,
}

export const App = ({label, uniqueKey, state, type, children, onMouseDown = () => {}, updateState = () => {}}: PropsWithChildren<IAppC>) => {
    const [isVisible, setVisibility] = useState(state === 2);

    const component = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!component.current) return
        setVisibility(state === 2)
        onMouseDown(component)

    }, [state])


    return <div className={`app app-${type} app-id-${uniqueKey} ${isVisible ? 'active' : ''}`} ref={component} onMouseDown={() => onMouseDown(component)}>
        <div className={`app-header app-${type}-header`}>
            <Controls
                onClose={() => {
                    setVisibility(false);
                    updateState(0)
                }}
                onMinimise={() => {
                    setVisibility(false);
                    updateState(1)
                }}
            />
            <div className={`app-header-name app-${type}-header-name unselectable`}>{label}</div>
        </div>
        <div className={`app-body app-${type}-body`}>
            {children}
        </div>
    </div>
}
