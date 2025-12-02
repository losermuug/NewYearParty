import React, { useEffect, useState } from 'react'

interface ConfettiPiece {
  id: number
  left: number
  delay: number
  duration: number
  color: string
}

export const Confetti: React.FC = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const colors = ['bg-party-gold', 'bg-red-500', 'bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-green-500']
    const newPieces = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setPieces(newPieces)
  }, [])

  return (
    <>
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className={`fixed ${piece.color} rounded-full pointer-events-none`}
          style={{
            width: '8px',
            height: '8px',
            left: `${piece.left}%`,
            top: '-10px',
            animation: `confettiFall ${piece.duration}s linear ${piece.delay}s forwards`,
            zIndex: 9999,
          }}
        />
      ))}
      <style>{`
        @keyframes confettiFall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
