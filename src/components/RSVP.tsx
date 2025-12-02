import React from 'react'
import { EVENT_CONFIG } from '../config'

export const RSVP: React.FC = () => {
  const handleRsvpClick = () => {
    window.open(EVENT_CONFIG.googleFormUrl, '_blank')
  }

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 px-4 sm:px-6 lg:px-8"
      aria-label="RSVP and tickets section"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
          Secure Your Spot
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Tickets Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/30">
            <h3 className="text-2xl font-bold text-party-gold mb-4">🎫 Limited Seats</h3>
            <div className="text-white space-y-4">
              <p>
                <span className="block text-sm text-white/70">Total Capacity</span>
                <span className="text-3xl font-bold">{EVENT_CONFIG.totalSeats}</span>
              </p>
              <p>
                <span className="block text-sm text-white/70">Remaining Seats</span>
                <span className="text-3xl font-bold text-party-gold">
                  {EVENT_CONFIG.remainingSeats}
                </span>
              </p>
              <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-party-gold to-yellow-400 h-full"
                  style={{
                    width: `${(EVENT_CONFIG.remainingSeats / EVENT_CONFIG.totalSeats) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-white/70">
                {Math.round(
                  (EVENT_CONFIG.remainingSeats / EVENT_CONFIG.totalSeats) * 100
                )}% capacity available
              </p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/30">
            <h3 className="text-2xl font-bold text-party-gold mb-4">✨ Quick Info</h3>
            <ul className="text-white space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-party-gold text-lg">✓</span>
                <span>No personal data collected on this site</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-party-gold text-lg">✓</span>
                <span>Form handles all registration details securely</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-party-gold text-lg">✓</span>
                <span>Confirmation sent via email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-party-gold text-lg">✓</span>
                <span>First come, first served basis</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <button
            onClick={handleRsvpClick}
            className="px-10 py-4 bg-party-gold text-party-deep-blue font-bold text-xl rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-indigo-700"
            aria-label="RSVP and register"
          >
            🎉 {EVENT_CONFIG.rsvpLabel}
          </button>
          <p className="text-white/70 text-sm mt-4">
            Limited seats available • Register early!
          </p>
        </div>
      </div>
    </section>
  )
}
