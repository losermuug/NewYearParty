import React, { useState, useEffect } from 'react'

interface CountdownProps {
  targetDate: string // YYYY-MM-DD format
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-4 justify-center items-center flex-wrap">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 min-w-[80px]">
        <div className="text-3xl font-bold text-party-gold">{timeLeft.days}</div>
        <div className="text-xs text-slate-300 uppercase tracking-wider">Days</div>
      </div>
      <div className="text-party-gold text-2xl">:</div>
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 min-w-[80px]">
        <div className="text-3xl font-bold text-party-gold">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <div className="text-xs text-slate-300 uppercase tracking-wider">Hours</div>
      </div>
      <div className="text-party-gold text-2xl">:</div>
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 min-w-[80px]">
        <div className="text-3xl font-bold text-party-gold">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <div className="text-xs text-slate-300 uppercase tracking-wider">Mins</div>
      </div>
      <div className="text-party-gold text-2xl">:</div>
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 min-w-[80px]">
        <div className="text-3xl font-bold text-party-gold">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <div className="text-xs text-slate-300 uppercase tracking-wider">Secs</div>
      </div>
    </div>
  )
}
