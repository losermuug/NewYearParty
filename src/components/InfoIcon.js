import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export const InfoIcon = ({ text }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    return (_jsxs("div", { className: "relative inline-block ml-2", children: [_jsx("button", { className: "inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-party-gold text-party-deep-blue hover:bg-yellow-300 transition-colors focus:outline-none focus:ring-2 focus:ring-party-gold focus:ring-offset-2", onMouseEnter: () => setShowTooltip(true), onMouseLeave: () => setShowTooltip(false), onClick: () => setShowTooltip(!showTooltip), "aria-label": `Information: ${text}`, title: text, children: "i" }), showTooltip && (_jsxs("div", { className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-party-deep-blue text-white text-sm rounded-lg whitespace-nowrap border border-party-gold z-50", children: [text, _jsx("div", { className: "absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-party-deep-blue" })] }))] }));
};
