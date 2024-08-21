const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const colorizeText = (text) => {
    return text.split('').map((char, index) => (
        <span key={index} style={{ color: getRandomColor() }}>
            {char}
        </span>
    ));
};
