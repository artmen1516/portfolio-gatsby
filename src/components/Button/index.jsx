import React from 'react'


function Button({ label, onClick }) {
  const primaryButton = "py-2 px-4 bg-primary text-white font-semibold rounded-lg shadow-md transition ease-in-out hover:scale-110"

  return (
    <button type='button' onClick={onClick} className={primaryButton}>{label}</button>
  )
}

export default Button
