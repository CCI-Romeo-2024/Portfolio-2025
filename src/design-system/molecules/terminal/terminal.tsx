import './style.scss';
import {useState, KeyboardEvent, useRef, Fragment, PropsWithChildren, useEffect} from 'react';

export const Terminal = () => {
    const [lineNumber, setLineNumber] = useState(0);
    const [terminalContent, setTerminalContent] = useState<JSX.Element[]>([]);
    const terminalRef = useRef<HTMLDivElement>(null);
    const lastInput = useRef<HTMLInputElement>(null);

    interface ColorInterface {
        c?: 'black' | 'white' | 'red' | 'blue' | 'green' | 'yellow' | 'cyan' | 'purple';
        b?: boolean;
    }

    const C = ({c = 'white', b = false, children}: PropsWithChildren<ColorInterface>) => {
        return <span className={`${c} ${b ? 'bold' : ''}`}>{children}</span>;
    };

    const Line = ({children, gap = '0px'}: PropsWithChildren<{ gap?: string }>) => {
        return <div className='line' key={lineNumber}>
            <div className='pre-command-text' style={{gap}}>
                {children}
            </div>
            <input
                type='text'
                id={`input-command-${lineNumber}`}
                onKeyDown={handleKeyDown}
                ref={lastInput}
                autoComplete='off'
                autoFocus
            />
        </div>
    }

    const CommandOutput = ({children}: PropsWithChildren) => {
        return <div className='line command-out' key={`out-${lineNumber}`}>
            {children}
        </div>
    }

    const addTerminalContent = (content: JSX.Element) => {
        setTerminalContent((prev) => [...prev, content]);
    };

    const newLine = () => {
        if (lastInput.current)
            lastInput.current.readOnly = true;


        addTerminalContent(
            <Line gap={'7px'}>
                <C c='green'>
                    <svg height="7" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 4H9.5M9.5 4L6.5 1M9.5 4L6.5 7" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </C>

                <C c='cyan' b={true}>Projects</C>
            </Line>
        );

        setLineNumber(prev => prev + 1);
    };

    type commandsList = {
        commandName: string;
        cb: (args: string[]) => JSX.Element | null;
    }[]

    const Li = ({c = 'white', children}: PropsWithChildren<ColorInterface>) => {
        return <div className='list-element' key={'caca'}>
            <div className="list-element-style">
                <svg className={c} width="6" height="6" viewBox="0 0 4 4" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="1"/>
                </svg>
            </div>

            <div className="list-element-content">
                {children}
            </div>
        </div>
    }

    const commandsList: commandsList = [
        {
            commandName: "help",
            cb: () => {
                return <div className={'list'}>
                    <Li><C c='red'>{'cat <file>'}</C> <C c='white'> - cat</C></Li>

                    <Li><C c='red'>{'<ls>'}</C><C c='white'> - cat</C></Li>

                    <Li><C c='red'>{'cd <dossier>'}</C><C>{' - Se déplace dans <dossier>, "cd .." pour se déplacer dans le dossier parent, "cd ~" pour se déplacer au T'}</C></Li>

                    <Li><C c='red'>{'git'}</C><C c='white'>{'- My github'}</C></Li>
                </div>


            }
        },
        {
            commandName: "clear",
            cb: () => {
                setTerminalContent(() => [])

                return null;
            },
        }
    ]

    const commandManager = (value: string | undefined) => {
        if (!value) return;
        const args = value.split(' ');
        const commandName = args.shift();

        const command = commandsList.find(command => command.commandName?.toLowerCase() === commandName?.toLowerCase());
        if (!command) {
            // caca

            return;
        }

        const returnCommand = command.cb(args)
        if (returnCommand)
            addTerminalContent(<CommandOutput>{returnCommand}</CommandOutput>)

    }


    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            console.log('↩️ New Line');

            commandManager(lastInput.current?.value);

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
