import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (_jsx("footer", { className: "bg-party-deep-blue text-white py-12 px-4 sm:px-6 lg:px-8", "aria-label": "Footer", children: _jsxs("div", { className: "max-w-5xl mx-auto", children: [_jsx("div", { className: "border-t border-white/20 my-8" }), _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center text-sm text-slate-400", children: [_jsxs("p", { children: ["\u00A9 ", currentYear, " New Year Party. All rights reserved."] }), _jsx("p", { children: "Made with \u2764\uFE0F by the organizing departments" })] })] }) }));
};
