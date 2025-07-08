'use client'

import { useState } from 'react'
import 'flag-icons/css/flag-icons.min.css'

export default function LanguageToggle() {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru')

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ru' : 'en'))
  }

  const flagClass = language === 'en' ? 'fi fi-gb' : 'fi fi-ru'

  return (
    <div className="fixed md:fixed md:top-6 md:left-6 z-50">
      <button
        onClick={toggleLanguage}
        className=" w-10 h-7 rounded-md hover:shadow transition flex items-center justify-center"
        aria-label="Toggle Language"
      >
        <span className={`${flagClass} text-lg`} />
      </button>
    </div>
  )
}
