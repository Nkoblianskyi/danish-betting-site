"use client"

import { useState, useEffect } from "react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted")

    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 md:mr-4">
          <p>
            Vi bruger cookies for at forbedre din oplevelse på vores hjemmeside. Ved at fortsætte accepterer du vores
            brug af cookies.
          </p>
        </div>
        <button onClick={acceptCookies} className="bg-white text-gray-800 px-4 py-2 rounded font-bold">
          OK
        </button>
      </div>
    </div>
  )
}
