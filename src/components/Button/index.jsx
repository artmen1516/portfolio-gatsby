import React from 'react'


function Button({ label, onClick }) {
  const primaryButton = "m-2 p-2 text-white rounded-xl shadow-lg shadow-cyan-500 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 hover:shadow-cyan-400 transition duration-0 ease-in-out"

  // const primaryButton = "bg-blue-500 hover:bg-red-500 transition duration-1000 ease-in-out"

  return (
    <button type='button' onClick={onClick} className={primaryButton}>{label}</button>
  )
}

export default Button
