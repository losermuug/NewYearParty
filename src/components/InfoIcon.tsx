import React, { useState } from 'react'

interface InfoIconProps {
  text: string
}

export const InfoIcon: React.FC<InfoIconProps> = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="relative inline-block ml-2">
      <button
        className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-party-gold text-party-deep-blue hover:bg-yellow-300 transition-colors focus:outline-none focus:ring-2 focus:ring-party-gold focus:ring-offset-2"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
        aria-label={`Information: ${text}`}
        title={text}
      >
        i
      </button>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-party-deep-blue text-white text-sm rounded-lg whitespace-nowrap border border-party-gold z-50">
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-party-deep-blue"></div>
        </div>
      )}
    </div>
  )
}
