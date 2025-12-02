import React from 'react'

export const SantaSlide: React.FC = () => {
  return (
    <>
      {/* Santa with reindeer flying across screen */}
      <div
        className="fixed top-20 left-0 z-40 pointer-events-none animate-[slide_20s_linear_infinite]"
        style={{
          animation: 'slide 25s linear infinite',
        }}
      >
        {/* Reindeer */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🦌</span>
          <span className="text-2xl">🦌</span>
        </div>
        {/* Santa */}
        <div className="text-5xl">🎅</div>
      </div>

      <style>{`
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
      `}</style>
    </>
  )
}
