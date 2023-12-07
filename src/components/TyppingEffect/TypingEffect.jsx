import React, { useState, useEffect } from 'react';

const TypingEffect = () => {

    const [lines, setLines] = useState([
        'ESPERAS',
        'PRISAS',
        'PROBLEMAS',
        'COLAS',
    ]);

    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [showCursor, setShowCursor] = useState(false);

    useEffect(() => {
        const currentLine = lines[currentLineIndex];
        let timeout;

        if (currentText.length < currentLine.length) {
            timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + currentLine[currentText.length]);
            }, 100);
        } else {
            setShowCursor(false);
            timeout = setTimeout(() => {
                setCurrentText('');
                setCurrentLineIndex((prevIndex) =>
                    prevIndex === lines.length - 1 ? 0 : prevIndex + 1
                );
            }, 5000);
        }

        return () => clearTimeout(timeout);
    }, [currentText, currentLineIndex, lines]);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    };

    const textStyle = {
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        fontSize: '4em',
    };

    return (
        <div style={containerStyle}>
            <h1 style={textStyle}>
                DISFRUTA LA NOCHE
                <br />
                {currentLineIndex < lines.length && 'SIN '}
                {currentText}
                {showCursor && <span>|</span>}
            </h1>
        </div>
    );
};

export default TypingEffect;
