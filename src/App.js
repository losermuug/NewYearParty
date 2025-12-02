import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Hero } from './components/Hero';
import { EventDetails } from './components/EventDetails';
import { Schedule } from './components/Schedule';
import { Footer } from './components/Footer';
import { GlobalSnow } from './components/GlobalSnow';
import { EVENT_CONFIG } from './config';
import './App.css';
function App() {
    const handleHeroCtaClick = () => {
        window.open(EVENT_CONFIG.googleFormUrl, '_blank');
    };
    return (_jsxs(_Fragment, { children: [_jsx(GlobalSnow, {}), _jsxs("main", { className: "overflow-x-hidden relative z-10", children: [_jsx(Hero, { onCtaClick: handleHeroCtaClick }), _jsx(EventDetails, {}), _jsx(Schedule, {})] }), _jsx(Footer, {})] }));
}
export default App;
