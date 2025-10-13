import React from 'react'

const Logo = ({ className = "w-8 h-8", showText = true, textClassName = "text-xl font-bold gradient-text" }) => {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src="/logo.svg" 
        alt="Tickfy Logo" 
        className={className}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/logo.png';
        }}
      />
      {showText && (
        <span className={textClassName}>Tickfy</span>
      )}
    </div>
  )
}

export default Logo