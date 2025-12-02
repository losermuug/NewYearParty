import React from 'react'
import { computeEventData, EVENT_CONFIG } from '../config'
import { InfoIcon } from './InfoIcon'

export const EventDetails: React.FC = () => {
  const { displayPrice, displayTaxAmount, displayTotalPrice } = computeEventData()

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-slate-900 px-4 sm:px-6 lg:px-8 relative"
      aria-label="Event details"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Event Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Date & Time Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 border-t-4 border-party-gold border border-white/20">
            <h3 className="flex items-center text-xl font-bold text-white mb-4">
              📅 Date & Time
            </h3>
            <p className="text-slate-200 mb-2">
              <span className="font-semibold">Start:</span> {EVENT_CONFIG.startDateDisplay} {EVENT_CONFIG.startTime}
            </p>
            <p className="text-slate-200">
              <span className="font-semibold">End:</span> {EVENT_CONFIG.endDateDisplay} {EVENT_CONFIG.endTime}
            </p>
          </div>

          {/* Location Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 border-t-4 border-purple-500 border border-white/20">
            <h3 className="flex items-center text-xl font-bold text-white mb-4">
              📍 Location
            </h3>
            <p className="text-slate-200 mb-2">
              <span className="font-semibold">{EVENT_CONFIG.location}</span>
            </p>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              {EVENT_CONFIG.fullAddress}
            </p>
            <a
              href={EVENT_CONFIG.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-party-gold hover:text-yellow-300 font-semibold transition-colors focus:outline-none focus:underline"
            >
              Get Directions →
            </a>
          </div>

          {/* Dress Code Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 border-t-4 border-indigo-500 border border-white/20">
            <h3 className="flex items-center text-xl font-bold text-white mb-4">
              👔 Dress Code
            </h3>
            <p className="text-slate-200">{EVENT_CONFIG.dressCode}</p>
          </div>

          {/* Pricing Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 border-t-4 border-blue-500 border border-white/20">
            <h3 className="flex items-center text-xl font-bold text-white mb-4">
              💰 Tax
            </h3>
            <div className="space-y-4 text-slate-200">
              <div className="flex justify-between text-lg font-bold text-party-gold">
                <span>Үнэ:</span>
                <span>120'000₮</span>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
