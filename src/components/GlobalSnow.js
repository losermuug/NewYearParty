import { jsx as _jsx } from "react/jsx-runtime";
import { Snowflake } from './animations/Snowflake';
export const GlobalSnow = () => {
    return (_jsx("div", { className: "fixed inset-0 pointer-events-none overflow-hidden z-50", children: Array.from({ length: 60 }).map((_, i) => (_jsx(Snowflake, { delay: i * 0.2 }, i))) }));
};
