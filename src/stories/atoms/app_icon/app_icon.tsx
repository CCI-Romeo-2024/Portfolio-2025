import './style.scss'

import whatsweb from './icons/whatsweb.svg';
// import whatsecosystem from './icons/whatsecosystem.svg';
// import server from './icons/server.svg';
// import rootme from './icons/rootme.svg';
// import oknestor from './icons/oknestor.svg';
import contact from './icons/contact.png';

const icons = {
    whatsweb,
    // whatsecosystem,
    // server,
    // rootme,
    // oknestor,
    contact,
};


export interface IconProps {
    label: string;
    state: number;
    iconKey: 'whatsweb' | 'whatsecosystem' | 'server' | 'rootme' | 'oknestor' | 'contact';
}

export const AppIcon = ({label, state, iconKey}: IconProps) => {

    return (<>
    <div className="appIcon">
        <div className="tool-tip-name">
            <div className="text">
                { label }
            </div>
            <svg width="27" height="8" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0 0L2.63415 4.60569e-07C2.63415 4.60569e-07 2.63415 4.60569e-07 2.63415 4.60569e-07C2.63415 4.60569e-07 5.26829 9.21138e-07 7.2439 2.02105C9.21951 4.0421 9.87805 5.05263 11.1951 6.73684C12.5122 8.42105 13.1707 8.42105 14.4878 6.73684C15.8049 5.05263 17.122 3.36842 18.439 2.02105C19.7561 0.673687 20.4146 3.56941e-06 23.7073 4.14512e-06C27 4.72083e-06 27 4.72083e-06 27 4.72083e-06C27 4.72083e-06 27 4.72083e-06 27 4.72083e-06L0 0Z"
                      fill="white"/>
            </svg>
        </div>

        <img src={icons[iconKey]} alt={iconKey}/>

        <div className={`open ${state ? 'active' : ''}`}></div>
    </div>
</>)
    ;
};
