import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export const SantaSlide = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "fixed top-20 left-0 z-40 pointer-events-none animate-[slide_20s_linear_infinite]", style: {
                    animation: 'slide 25s linear infinite',
                }, children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx("span", { className: "text-2xl", children: "\uD83E\uDD8C" }), _jsx("span", { className: "text-2xl", children: "\uD83E\uDD8C" })] }), _jsx("div", { className: "text-5xl", children: "\uD83C\uDF85" })] }), _jsx("style", { children: `
        @keyframes slide {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px));
            opacity: 0;
          }
        }
      ` })] }));
};
