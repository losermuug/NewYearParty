import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
export const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    useEffect(() => {
        const calculateTimeLeft = () => {
            const target = new Date(targetDate).getTime();
            const now = new Date().getTime();
            const difference = target - now;
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
            else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };
        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);
    return (_jsxs("div", { className: "flex gap-4 justify-center items-center flex-wrap", children: [_jsxs("div", { className: "bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 min-w-[80px]", children: [_jsx("div", { className: "text-3xl font-bold text-party-gold", children: timeLeft.days }), _jsx("div", { className: "text-xs text-slate-300 uppercase tracking-wider", children: "Days" })] }), _jsx("div", { className: "text-party-gold text-2xl", children: ":" }), _jsxs("div", { className: "bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 min-w-[80px]", children: [_jsx("div", { className: "text-3xl font-bold text-party-gold", children: String(timeLeft.hours).padStart(2, '0') }), _jsx("div", { className: "text-xs text-slate-300 uppercase tracking-wider", children: "Hours" })] }), _jsx("div", { className: "text-party-gold text-2xl", children: ":" }), _jsxs("div", { className: "bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 min-w-[80px]", children: [_jsx("div", { className: "text-3xl font-bold text-party-gold", children: String(timeLeft.minutes).padStart(2, '0') }), _jsx("div", { className: "text-xs text-slate-300 uppercase tracking-wider", children: "Mins" })] }), _jsx("div", { className: "text-party-gold text-2xl", children: ":" }), _jsxs("div", { className: "bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 min-w-[80px]", children: [_jsx("div", { className: "text-3xl font-bold text-party-gold", children: String(timeLeft.seconds).padStart(2, '0') }), _jsx("div", { className: "text-xs text-slate-300 uppercase tracking-wider", children: "Secs" })] })] }));
};
