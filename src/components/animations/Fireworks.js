import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
const Firework = ({ delay, duration, colors, }) => {
    const particles = Array.from({ length: 30 });
    const startY = 15 + Math.random() * 25;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "absolute pointer-events-none", style: {
                    width: '3px',
                    height: '25px',
                    left: '50%',
                    top: '100%',
                    background: 'linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,220,150,0.8), transparent)',
                    boxShadow: '0 0 15px rgba(255,220,150,0.9), 0 0 25px rgba(255,200,100,0.5)',
                    filter: 'blur(0.5px)',
                    animation: `launch ${duration * 0.35}s ease-out ${delay}s forwards`,
                    '--target-y': `${startY}%`,
                } }), particles.map((_, i) => {
                const angle = (i / particles.length) * Math.PI * 2;
                const baseDistance = 90 + Math.random() * 70;
                const x = Math.cos(angle) * baseDistance;
                const y = Math.sin(angle) * baseDistance;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = 3 + Math.random() * 5;
                const trailLength = 15 + Math.random() * 25;
                const delayOffset = delay + duration * 0.35;
                // Өнгийн RGB утга
                const colorMap = {
                    'bg-red-500': '239, 68, 68',
                    'bg-orange-400': '251, 146, 60',
                    'bg-yellow-300': '253, 224, 71',
                    'bg-blue-400': '96, 165, 250',
                    'bg-cyan-300': '103, 232, 249',
                    'bg-white': '255, 255, 255',
                    'bg-purple-500': '168, 85, 247',
                    'bg-pink-400': '244, 114, 182',
                    'bg-fuchsia-300': '240, 171, 252',
                    'bg-green-400': '74, 222, 128',
                    'bg-emerald-300': '110, 231, 183',
                    'bg-lime-300': '190, 242, 100',
                    'bg-amber-300': '252, 211, 77',
                    'bg-indigo-500': '99, 102, 241',
                    'bg-violet-400': '167, 139, 250',
                };
                const rgb = colorMap[color] || '255, 255, 255';
                return (_jsxs(React.Fragment, { children: [_jsx("div", { className: "absolute pointer-events-none", style: {
                                width: '2.5px',
                                height: `${trailLength}px`,
                                left: '50%',
                                top: `${startY}%`,
                                background: `linear-gradient(to bottom, rgba(${rgb}, 0.9), rgba(${rgb}, 0.4), transparent)`,
                                filter: 'blur(1.5px)',
                                boxShadow: `0 0 8px rgba(${rgb}, 0.6)`,
                                animation: `explode ${duration * 0.8}s ease-out ${delayOffset}s forwards, fadeTrail ${duration * 1.2}s ease-out ${delayOffset}s forwards`,
                                '--x': `${x}px`,
                                '--y': `${y}px`,
                            } }), _jsx("div", { className: `absolute ${color} rounded-full pointer-events-none`, style: {
                                width: `${size}px`,
                                height: `${size}px`,
                                left: '50%',
                                top: `${startY}%`,
                                boxShadow: `
                  0 0 ${size * 3}px rgba(${rgb}, 1),
                  0 0 ${size * 6}px rgba(${rgb}, 0.8),
                  0 0 ${size * 10}px rgba(${rgb}, 0.5),
                  0 0 ${size * 15}px rgba(${rgb}, 0.3)
                `,
                                animation: `explode ${duration * 0.8}s ease-out ${delayOffset}s forwards, glow ${duration * 0.3}s ease-in-out ${delayOffset}s forwards, fadeOut ${duration * 1.5}s ease-out ${delayOffset}s forwards`,
                                '--x': `${x}px`,
                                '--y': `${y}px`,
                            } }), i % 2 === 0 && (_jsx("div", { className: "absolute bg-white rounded-full pointer-events-none", style: {
                                width: '2.5px',
                                height: '2.5px',
                                left: '50%',
                                top: `${startY}%`,
                                boxShadow: `0 0 6px rgba(255, 255, 255, 0.9), 0 0 12px rgba(255, 255, 255, 0.5)`,
                                animation: `sparkle ${duration * 1.5}s ease-out ${delayOffset + 0.1}s forwards`,
                                '--x': `${x * 0.7}px`,
                                '--y': `${y * 0.7}px`,
                            } })), i % 4 === 0 && (_jsx("div", { className: `absolute ${color} rounded-full pointer-events-none`, style: {
                                width: '1.5px',
                                height: '1.5px',
                                left: '50%',
                                top: `${startY}%`,
                                boxShadow: `0 0 4px rgba(${rgb}, 0.8)`,
                                animation: `floatAndStay ${duration * 1.2}s ease-out ${delayOffset}s forwards`,
                                '--x': `${x * 1.1}px`,
                                '--y': `${y * 1.1}px`,
                            } }))] }, i));
            })] }));
};
export const Fireworks = ({ side }) => {
    const colorSets = [
        ['bg-red-500', 'bg-orange-400', 'bg-yellow-300'],
        ['bg-cyan-300', 'bg-blue-400', 'bg-white'],
        ['bg-purple-500', 'bg-pink-400', 'bg-fuchsia-300'],
        ['bg-emerald-300', 'bg-green-400', 'bg-lime-300'],
        ['bg-yellow-300', 'bg-amber-300', 'bg-orange-400'],
        ['bg-indigo-500', 'bg-violet-400', 'bg-purple-500'],
        ['bg-pink-400', 'bg-fuchsia-300', 'bg-purple-500'],
        ['bg-lime-300', 'bg-yellow-300', 'bg-orange-400'],
    ];
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed top-0 z-20 pointer-events-none", style: {
                    [side]: '5%',
                    width: '120px',
                    height: '100vh',
                }, children: Array.from({ length: 10 }).map((_, i) => (_jsx(Firework, { delay: i * 2.2, duration: 2.8, colors: colorSets[i % colorSets.length] }, i))) }), _jsx("style", { children: `
        @keyframes launch {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(calc(-100vh + var(--target-y, 20%))) scale(0.5);
            opacity: 0;
          }
        }
        
        @keyframes explode {
          0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(var(--x, 100px) - 50%), calc(var(--y, 100px) - 50%)) scale(1) rotate(180deg);
            opacity: 0.8;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.8);
          }
        }
        
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          70% {
            opacity: 0.4;
          }
          100% {
            opacity: 0;
          }
        }
        
        @keyframes fadeTrail {
          0% {
            opacity: 1;
          }
          60% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
          }
        }
        
        @keyframes sparkle {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.8;
          }
          40% {
            opacity: 1;
            transform: translate(calc(var(--x, 60px) * 0.5 - 50%), calc(var(--y, 60px) * 0.5 - 50%)) scale(1.2);
          }
          100% {
            transform: translate(calc(var(--x, 60px) - 50%), calc(var(--y, 60px) - 50%)) scale(0.3);
            opacity: 0;
          }
        }
        
        @keyframes floatAndStay {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          30% {
            opacity: 0.7;
          }
          100% {
            transform: translate(calc(var(--x, 110px) - 50%), calc(var(--y, 110px) - 50%)) scale(1);
            opacity: 0.15;
          }
        }
      ` })] }));
};
