import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './TermElements.css';
import {
    banner,
    about,
    contact,
    help,
    unknownCommand,
    github,
    linkedin,
    sum
} from '../Utils/Commands';
// import {colorizeText} from  './colorizeText'


const Term = () => {
    const history = useHistory(); // Initialize useNavigate
    const [promptEmoji, setPromptEmoji] = useState(''); // State to hold the selected emoji
    const [commands, setCommands] = useState([
        { command: '', output: banner() } // Banner as the first output
    ]); 
    const [input, setInput] = useState(''); // State to manage the input field

    useEffect(() => {
        // Array of emoji options
        const emojis = ['💔', '🖤', '👾', '🔥', '⚡', '🚀', '👻', '🎮'];

        // Select a random emoji
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        setPromptEmoji(randomEmoji);
    }, []);

    const handleKeyPress = async(e) => {
        if (e.key === 'Enter') {
            const trimmedInput = input.trim();
            const args = trimmedInput.split(' ').slice(1); // Extract arguments from command

            // Map command strings to functions
            const commandsMap = {
                'about': about,
                'git': github,
                'linkedin': linkedin,
                'contact': contact,
                'help': help,
                'sum': sum,
                'clear': () => { // Handle the clear command
                    // Reset commands and optionally emoji
                    setCommands([]);
                },
                '!wq': () => {
                    history.push('/'); // Navigate to the home page
                    return 'Navigating to home page...';
                }
            };

            const commandFunction = commandsMap[trimmedInput.split(' ')[0]] || unknownCommand;
            const output = await commandFunction(args); // Call the command function with arguments

            // Update the commands list with the new command and output if not clearing
            if (trimmedInput !== 'clear') {
                setCommands(prevCommands => [
                    ...prevCommands,
                    { command: trimmedInput, output }
                ]);
            }

            setInput(''); // Clear the input field
        }
    };
    const handleFocus = (e) => {
        e.target.focus();
    };

    return (
        <div className="terminal">
            <div className="terminal-output">
                {commands.map((cmd, index) => (
                    <div key={index}>
                        <div>
                            <span className="command">
                                <span className="username">JaidanDovala</span>
                                <span className="at-symbol">@</span>
                                <span className="command">{promptEmoji} </span>
                                <span className="dollar-symbol">$ </span>
                                {/* uncommenting this line and importing {colorizeText}.. Actually check 
                                yourself */}
                                {/* <span className="input">{colorizeText(cmd.command)}</span> */}
                                <span className="input">{cmd.command}</span>
                            </span>
                        </div>
                        <div className="output" dangerouslySetInnerHTML={{ __html: cmd.output }} />
                    </div>
                ))}
                <div className="input-line" onClick={handleFocus}>
                    <span className="prompt">
                        <span className="username">JaidanDovala</span>
                        <span className="at-symbol">@</span>
                        <span className="command">{promptEmoji} </span>
                        <span className="dollar-symbol">$</span>
                    </span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        autoFocus
                        className="terminal-input"
                    />
                </div>
            </div>
        </div>
    );
};

export default Term;
