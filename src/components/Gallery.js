import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
const images = [
    '/IMG_1054.webp',
    '/IMG_1055-1200x900.webp',
    '/IMG_1056-1200x900.webp',
    '/IMG_1057-1200x900.webp',
    '/IMG_1059-1200x900.webp'
];
export const Gallery = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "py-16 sm:py-20 lg:py-24 bg-slate-900 px-4 sm:px-6 lg:px-8 relative", children: _jsx("div", { className: "max-w-7xl mx-auto relative z-10", children: _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8", children: images.map((src, index) => (_jsxs("div", { className: `group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer
                  ${hoveredIndex === index ? 'scale-105 z-20' : 'scale-100'}
                  ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}
                  ${index === 2 ? 'lg:row-span-2' : ''}
                `, onMouseEnter: () => setHoveredIndex(index), onMouseLeave: () => setHoveredIndex(null), onClick: () => setSelectedImage(index), style: {
                                transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                            }, children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-500/50 via-pink-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" }), _jsxs("div", { className: "relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-2xl", children: [_jsx("img", { src: src, alt: `Gallery image ${index + 1}`, className: `w-full object-cover transition-all duration-700 
                      ${index === 0 ? 'h-96 sm:h-full' : 'h-64'}
                      ${hoveredIndex === index ? 'scale-110 brightness-110' : 'scale-100 brightness-90'}
                    ` }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: _jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs("p", { className: "text-white font-semibold text-lg", children: ["\u0417\u0443\u0440\u0430\u0433 #", index + 1] }), _jsx("p", { className: "text-gray-300 text-sm", children: "\u0422\u043E\u043C\u0440\u0443\u0443\u043B\u0436 \u0445\u0430\u0440\u0430\u0445" })] }), _jsx("div", { className: "w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center", children: _jsx("svg", { className: "w-5 h-5 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" }) }) })] }) }) }), _jsx("div", { className: "absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" })] }), hoveredIndex === index && (_jsx("div", { className: "absolute inset-0 pointer-events-none", children: [...Array(6)].map((_, i) => (_jsx("div", { className: "absolute w-1 h-1 bg-white rounded-full animate-ping", style: {
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            animationDelay: `${i * 0.2}s`,
                                        } }, i))) }))] }, index))) }) }) }), selectedImage !== null && (_jsxs("div", { className: "fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fadeIn", onClick: () => setSelectedImage(null), children: [_jsx("button", { className: "absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors", onClick: () => setSelectedImage(null), children: _jsx("svg", { className: "w-6 h-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }), _jsxs("div", { className: "relative max-w-6xl max-h-[90vh] animate-scaleIn", children: [_jsx("img", { src: images[selectedImage], alt: `Gallery image ${selectedImage + 1}`, className: "max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl", onClick: (e) => e.stopPropagation() }), _jsxs("div", { className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4", children: [_jsx("button", { className: "w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-50", onClick: (e) => {
                                            e.stopPropagation();
                                            setSelectedImage(prev => prev > 0 ? prev - 1 : images.length - 1);
                                        }, children: _jsx("svg", { className: "w-6 h-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }) }), _jsx("button", { className: "w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors", onClick: (e) => {
                                            e.stopPropagation();
                                            setSelectedImage(prev => prev < images.length - 1 ? prev + 1 : 0);
                                        }, children: _jsx("svg", { className: "w-6 h-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }) })] })] })] })), _jsx("style", { children: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      ` })] }));
};
