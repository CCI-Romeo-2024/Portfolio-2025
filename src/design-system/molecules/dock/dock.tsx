import { AppIcon } from '@atoms/app_icon/app_icon.tsx'
import {IApp} from '#/default_apps.tsx';

import './style.scss'


export interface DockProps {
    apps: IApp[][];
    updateAppState: (id: string, state: 0 | 1 | 2) => void;
}

export const Dock = ({apps, updateAppState}: DockProps) => {
    const handleClick = (id: string) => {
        updateAppState(id, 2)
        console.log(`✅ Open : ${id}`)
    }

    return <div className="dock">
            <div className="dock-bg"></div>
            <div className="dock-apps">
                {apps.map((appsGroup, iG) =>
                    <div className='apps-group' key={iG}>
                        {appsGroup.map((app, i) =>
                            <AppIcon onClick={() => handleClick(app.id)} {...app} key={i+(iG+1)} index={i+((iG+1) * 2)}/>
                        )}
                    </div>)}
            </div>
        </div>
};


