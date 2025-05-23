"use client"

import { useState, useEffect } from "react"
import { type Bookmaker, getTopBookmakers } from "@/data/bookmakers"
import Image from "next/image"
import { StarRating } from "@/components/ui/star-rating"

export function TopBonusesModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [topBookmakers, setTopBookmakers] = useState<Bookmaker[]>([])

  useEffect(() => {
    // Check if the modal has been shown before
    const hasShownModal = localStorage.getItem("hasShownBonusModal")

    if (!hasShownModal) {
      // Open modal after 6 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem("hasShownBonusModal", "true")
      }, 8000)

      // Cleanup timer if component unmounts
      return () => clearTimeout(timer)
    }

    setTopBookmakers(getTopBookmakers(3))
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-2 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="p-2 sm:p-3 md:p-4 lg:p-6">
          <div className="flex justify-between items-center mb-1 sm:mb-2">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">Top Bonuser</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm"
              aria-label="Luk"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2">
            {topBookmakers.map((bookmaker) => (
              <div
                key={bookmaker.id}
                className="border border-gray-200 rounded-lg p-1 sm:p-2 md:p-3 lg:p-4 relative transition-all duration-300 hover:border-red-300 hover:shadow-lg hover:bg-gray-50"
              >
                {bookmaker.label && (
                  <div className="absolute top-0 left-0 bg-red-600 text-white text-[8px] sm:text-[10px] py-0.5 px-1 rounded-tl-lg">
                    {bookmaker.label}
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-6 sm:w-12 sm:h-8 relative flex-shrink-0 mr-1 flex items-center justify-center overflow-hidden">
                      {bookmaker.logo ? (
                        <Image
                          src={bookmaker.logo || "/placeholder.svg"}
                          alt={bookmaker.name}
                          width={32}
                          height={24}
                          className="object-contain max-w-full max-h-full"
                        />
                      ) : (
                        <div className="text-[10px] sm:text-xs font-bold">{bookmaker.name}</div>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-[10px] sm:text-xs">{bookmaker.name}</div>
                      <div className="text-[8px] sm:text-xs">{bookmaker.bonus}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-sm sm:text-lg font-bold text-green-600">{bookmaker.rating.toFixed(1)}</div>
                    <StarRating rating={bookmaker.rating} size="sm" />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-1 pt-1 border-t">
                  <div className="text-[7px] sm:text-[9px] text-gray-500 w-3/4">
                    18+ | Kun nye kunder | Regler gælder
                  </div>
                  <a
                    href={bookmaker.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-0.5 px-1 sm:py-1 sm:px-2 rounded text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    FÅ BONUS! *
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-1 sm:mt-2 text-[8px] sm:text-[9px] text-gray-500 text-center">
            18+ | Spil ansvarligt | ROFUS | StopSpillet
          </div>
        </div>
      </div>
    </div>
  )
}
