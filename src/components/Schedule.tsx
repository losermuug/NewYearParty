import React from 'react'
import { EVENT_CONFIG } from '../config'

export const Schedule: React.FC = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-slate-900 px-4 sm:px-6 lg:px-8 relative"
      aria-label="Event schedule and timeline"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Event Schedule
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-party-gold to-purple-500"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            {EVENT_CONFIG.schedule.map((item, index) => (
              <div
                key={index}
                className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="w-full md:w-5/12">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-party-gold transition-colors">
                    <h3 className="text-xl font-bold text-party-gold mb-2">{item.activity}</h3>
                    <p className="text-slate-300 mb-3">{item.description}</p>
                    <p className="text-sm text-slate-400 font-mono">⏰ {item.time}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-full md:w-2/12 flex justify-center relative">
                  <div className="w-4 h-4 bg-party-gold rounded-full border-4 border-slate-900 z-10"></div>
                </div>

                {/* Spacer */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
