import React from 'react'
import { EVENT_CONFIG } from '../config'

export const Map: React.FC = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white px-4 sm:px-6 lg:px-8"
      aria-label="Location map"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-party-deep-blue mb-12 text-center">
          Find Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-party-deep-blue mb-2">📍 Location</h3>
              <p className="text-slate-700">{EVENT_CONFIG.location}</p>
              <p className="text-sm text-slate-600 mt-2">{EVENT_CONFIG.fullAddress}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-party-deep-blue mb-2">🚗 Getting There</h3>
              <p className="text-slate-700 text-sm mb-4">
                Easy access by car or public transportation.
              </p>
              <a
                href={EVENT_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-party-gold text-party-deep-blue font-bold rounded-lg hover:bg-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-party-gold focus:ring-offset-2"
              >
                Open in Google Maps →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold text-party-deep-blue mb-2">ℹ️ Parking</h3>
              <p className="text-slate-700 text-sm">
                Parking available on-site. Please arrive early.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg border-4 border-party-gold" style={{ paddingBottom: '66.66%' }}>
              <iframe
                src={EVENT_CONFIG.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event location on Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
