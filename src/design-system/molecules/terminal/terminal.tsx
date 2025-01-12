import './style.scss';
import {useState, KeyboardEvent, useRef, Fragment, PropsWithChildren, useEffect} from 'react';

export const Terminal = () => {
    const [lineNumber, setLineNumber] = useState(0);
    const [terminalContent, setTerminalContent] = useState<JSX.Element[]>([]);
    const terminalRef = useRef<HTMLDivElement>(null);
    const lastInput = useRef<HTMLInputElement>(null);

    interface ColorInterface {
        c: 'black' | 'white' | 'red' | 'blue' | 'green' | 'yellow' | 'cyan' | 'purple';
        b?: boolean;
    }

    const C = ({ c, b = false, children }: PropsWithChildren<ColorInterface>) => {
        return <span className={`${c} ${b ? 'bold' : ''}`}>{children}</span>;
    };

    const Line = ({children}: PropsWithChildren) => {
        return <div className='line' key={lineNumber}>
            <div className='pre-command-text'>
                {children}
            </div>
            <input
                type='text'
                id={`input-command-${lineNumber}`}
                onKeyDown={handleKeyDown}
                ref={lastInput}
                autoFocus
            />
        </div>
    }

    const addTerminalContent = (content: JSX.Element) => {
        setTerminalContent((prev) => [...prev, content]);
    };

    const newLine = () => {
        if (lastInput.current)
            lastInput.current.readOnly = true;


        addTerminalContent(
            <Line>
                <C c='green'>➜ </C>
                <C c='cyan' b={true}>Projects </C>
            </Line>
        );

        setLineNumber(prev => prev + 1);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            console.log('↩️ New Line');
            newLine();
        }
    };

    const handleClick = () => {
        console.log('⬅️ Focus Input');
        if (lastInput.current)
            lastInput.current.focus()
    };

    let init = false;

    useEffect(() => {
        if (init) return

        newLine();
        init = true;
    }, []);

    useEffect(() => {
        console.log("lineNumber after render:", lineNumber); // Log après chaque rendu
    }, [lineNumber]);

    return (
        <div className="terminal terminal-app" id="terminal" onClick={handleClick}>
            <div className="content" id="terminal-content" ref={terminalRef}>
                {terminalContent.map((content, index) => (
                    <Fragment key={index}>{content}</Fragment>
                ))}
            </div>
        </div>

    );
};
