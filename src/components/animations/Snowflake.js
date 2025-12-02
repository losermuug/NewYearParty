import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Snowflake = ({ delay }) => {
    const left = Math.random() * 100;
    const size = Math.random() * 8 + 4;
    const duration = Math.random() * 3 + 7;
    const opacity = Math.random() * 0.4 + 0.6;
    const rotation = Math.random() * 360;
    return (_jsxs("div", { className: "absolute pointer-events-none", style: {
            left: `${left}%`,
            top: '-20px',
            animation: `fall ${duration}s linear ${delay}s infinite`,
            opacity: opacity,
        }, children: [_jsx("div", { className: "relative", style: {
                    animation: `rotate ${duration * 0.5}s linear infinite`,
                }, children: _jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", style: {
                        filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8)) drop-shadow(0 0 4px rgba(200,230,255,0.6)) drop-shadow(0 0 8px rgba(150,200,255,0.4))',
                        transform: `rotate(${rotation}deg)`,
                    }, children: [_jsx("path", { d: "M12 2L12 22M2 12L22 12M5.5 5.5L18.5 18.5M5.5 18.5L18.5 5.5M12 2L9 5L12 8M12 22L9 19L12 16M12 2L15 5L12 8M12 22L15 19L12 16M2 12L5 9L8 12M22 12L19 9L16 12M2 12L5 15L8 12M22 12L19 15L16 12", stroke: "white", strokeWidth: "1", fill: "none", strokeLinecap: "round" }), _jsx("circle", { cx: "12", cy: "12", r: "2", fill: "white", opacity: "0.8" })] }) }), _jsx("style", { children: `
        @keyframes fall {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(100vh) translateX(${Math.random() * 40 - 20}px);
          }
        }
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      ` })] }));
};
