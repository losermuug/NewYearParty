import React, { useState } from 'react'
import { EVENT_CONFIG } from '../config'
import { Confetti } from './animations/Confetti'

export const Participation: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSubmitClick = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
    window.open(EVENT_CONFIG.googleFormUrl, '_blank')
  }

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 px-4 sm:px-6 lg:px-8"
      aria-label="How to participate"
    >
      {showConfetti && <Confetti />}

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-party-deep-blue mb-8 text-center">
          How to Participate
        </h2>

        <p className="text-lg text-slate-700 text-center mb-12 max-w-2xl mx-auto">
          Have a performance, skill, or talent to share? Submit your contribution using the form
          below! We're looking for performers, speakers, artists, and more.
        </p>

        {/* Info boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
            <div className="text-3xl mb-2">📝</div>
            <h3 className="font-bold text-party-deep-blue mb-2">Step 1: Fill Form</h3>
            <p className="text-sm text-slate-700">Complete the submission form with details about your performance.</p>
          </div>

          <div className="text-center p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="font-bold text-party-deep-blue mb-2">Step 2: Review</h3>
            <p className="text-sm text-slate-700">Our team reviews submissions and confirms slot availability.</p>
          </div>

          <div className="text-center p-6 bg-indigo-50 rounded-lg border-2 border-indigo-200">
            <div className="text-3xl mb-2">🎉</div>
            <h3 className="font-bold text-party-deep-blue mb-2">Step 3: Perform</h3>
            <p className="text-sm text-slate-700">Showcase your talent at the New Year Party on January 20!</p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <button
            onClick={handleSubmitClick}
            className="px-10 py-4 bg-gradient-to-r from-party-gold to-yellow-400 text-party-deep-blue font-bold text-xl rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2"
            aria-label={EVENT_CONFIG.googleFormLabel}
          >
            ✨ {EVENT_CONFIG.googleFormLabel}
          </button>
          <p className="text-sm text-slate-600 mt-4">
            Form opens in a new tab • No personal data collected on this site
          </p>
        </div>
      </div>
    </section>
  )
}
