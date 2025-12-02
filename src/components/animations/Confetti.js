import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
export const Confetti = () => {
    const [pieces, setPieces] = useState([]);
    useEffect(() => {
        const colors = ['bg-party-gold', 'bg-red-500', 'bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-green-500'];
        const newPieces = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 0.5,
            duration: 2 + Math.random() * 1,
            color: colors[Math.floor(Math.random() * colors.length)],
        }));
        setPieces(newPieces);
    }, []);
    return (_jsxs(_Fragment, { children: [pieces.map((piece) => (_jsx("div", { className: `fixed ${piece.color} rounded-full pointer-events-none`, style: {
                    width: '8px',
                    height: '8px',
                    left: `${piece.left}%`,
                    top: '-10px',
                    animation: `confettiFall ${piece.duration}s linear ${piece.delay}s forwards`,
                    zIndex: 9999,
                } }, piece.id))), _jsx("style", { children: `
        @keyframes confettiFall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      ` })] }));
};
