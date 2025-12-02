import React from 'react'
import { Snowflake } from './animations/Snowflake'
import { Countdown } from './Countdown'

interface HeroProps {
  onCtaClick?: () => void
}

// Star component for night sky
const Star: React.FC<{ delay: number }> = ({ delay }) => {
  const left = Math.random() * 100
  const top = Math.random() * 60 // Top 60% of screen
  const opacity = Math.random() * 0.6 + 0.4

  return (
    <div
      className="absolute rounded-full bg-white animate-pulse"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: '2px',
        height: '2px',
        opacity: opacity,
        animationDelay: `${delay}s`,
      }}
    />
  )
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Night sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-800 opacity-100" />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <Star key={`star-${i}`} delay={i * 0.2} />
        ))}
      </div>

      {/* Snowflakes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <Snowflake key={`snow-${i}`} delay={i * 0.5} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl animate-fade-up">
        {/* Countdown */}
        <div className="mb-8">
          <Countdown targetDate="2025-12-27T18:00:00" />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          {/* Gradient text effect */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-party-gold via-yellow-300 to-yellow-200">
            ШИНЭ ЖИЛИЙН БАЯР 2026
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-yellow-100 mb-4 font-semibold">
            программ хангамж, мэдээллийн технологи, мэдээллийн системийн оюутнуудын шинэ жилийн баярт урьж байна!
        </p>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Шинэ оныг хамтдаа угтацгаая!
        </p>

        {/* Event Date & Time */}
        <div className="mb-10 bg-white/10 backdrop-blur-md rounded-lg p-6 inline-block border border-white/20">
          <p className="text-slate-100 text-sm font-semibold tracking-wide uppercase mb-2">
            📅 Date & Time
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-party-gold">
            2025 оны 12 сарын 27 • 18:00 
          </p>
        </div>

        {/* Main CTA Button */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onCtaClick}
            className="px-8 py-4 bg-gradient-to-r from-party-gold to-yellow-400 text-party-deep-blue font-bold text-lg rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2"
            aria-label="Join the party - opens registration form"
          >
            🎉 Бүртгүүлэх
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-party-gold"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
