import React from 'react'
import { EVENT_CONFIG } from '../config'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-party-deep-blue text-white py-12 px-4 sm:px-6 lg:px-8"
      aria-label="Footer"
    >
      <div className="max-w-5xl mx-auto">
        

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {currentYear} New Year Party. All rights reserved.</p>
          <p>Made with ❤️ by the organizing departments</p>
        </div>

        {/* Accessibility Notice */}
       
      </div>
    </footer>
  )
}
