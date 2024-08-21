import bk1 from '../Images/BK1.jpg'
import config from './Config'; 
import Quicksum from './Quicksum'


// src/commands.js
export const about = () => {
    return `
Hi, I am ${config.name}
Welcome to my portofoilo!

Feel free to star and clone this <a href="${config.repo}" target="_blank">repository</a>, and modify it as you see fit. 
I grant anyone permission to use, copy, and adapt this code for personal 
or commercial projects, provided that the original repository is acknowledged.

I graduated from Seattle University with a BS in Computer Science 
and a minor in Mathematics. My interests span AI, machine learning, 
web development, and oil painting, as well as a wide range of outdoor 
activities. I’m originally from Arizona and have a beloved dog named 
Akame who’s a cherished part of my life.`;
}

export const contact = () => {
    return `You can reach me at: ${config.email}`;
};

export const help = () => {
    // List of commands max commands is 20 but can increase by increasing table sz
    const commandList = ['about', 'git', 'linkedin', 'contact', 'clear', 
                        'sum', '!wq', 'help'];

    // Create a 10x2 table
    const rows = 10;
    const cols = 2;
    let tableHTML = '<table style="border-collapse: collapse; width: 100%;">';

    for (let row = 0; row < rows; row++) {
        tableHTML += '<tr>';
        for (let col = 0; col < cols; col++) {
            const command = commandList[row * cols + col] || '';
            tableHTML += `<td padding: 5px; text-align: center; color: #ffffff;">${command}</td>`;
        }
        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    return tableHTML;
};

// Function to open GitHub
export const github = async (args) => {
    window.open(`https://github.com/${config.social.github}/`);
    return 'Opening GitHub...';
};

// Function to echo input text
export const linkedin = async (args) => {
    window.open(`https://linkedin.com/in/${config.social.linkedin}/`);
    return 'Opening Linkedin...';
};

export const sum = async (args) => {
    return await Quicksum(args);
};

// Default message for unknown commands
export const unknownCommand = () => {
    return 'Unknown command. Type "help" for a list of commands.';
};




export const banner = () => {
    return `
      <div style="display: inline-flex; align-items: center;">
        <img src="${bk1}" style="margin-rigth:2em; width: 180px;" />
          <span style="font-size: auto; color: white;">
            ██╗ █████╗ ██╗██████╗  █████╗ ███╗   ██╗    ██████╗  ██████╗ ██╗   ██╗ █████╗ ██╗      █████╗ 
            ██║██╔══██╗██║██╔══██╗██╔══██╗████╗  ██║    ██╔══██╗██╔═══██╗██║   ██║██╔══██╗██║     ██╔══██╗
            ██║███████║██║██║  ██║███████║██╔██╗ ██║    ██║  ██║██║   ██║██║   ██║███████║██║     ███████║
       ██   ██║██╔══██║██║██║  ██║██╔══██║██║╚██╗██║    ██║  ██║██║   ██║╚██╗ ██╔╝██╔══██║██║     ██╔══██║
       ╚█████╔╝██║  ██║██║██████╔╝██║  ██║██║ ╚████║    ██████╔╝╚██████╔╝ ╚████╔╝ ██║  ██║███████╗██║  ██║
        ╚════╝ ╚═╝  ╚═╝╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═════╝  ╚═════╝   ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
          </span>
          </div>
          Type 'help' to see the list of available commands.
      
    `;
};

  