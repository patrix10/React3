import React from 'react'
import { useTheme } from './ThemeContext'

const Nineteen = () => {

  const {isDarkMode,toggleTheme} = useTheme()

  return (
    <div>
      <label htmlFor="">
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme}/>
        Dark Mode
      </label>
    </div>
  )
}

export default Nineteen
