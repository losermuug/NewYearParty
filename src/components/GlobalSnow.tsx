import React from 'react'
import { Snowflake } from './animations/Snowflake'

export const GlobalSnow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {Array.from({ length: 60 }).map((_, i) => (
        <Snowflake key={i} delay={i * 0.2} />
      ))}
    </div>
  )
}
