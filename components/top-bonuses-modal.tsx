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
      setIsOpen(true)
      localStorage.setItem("hasShownBonusModal", "true")
    }

    setTopBookmakers(getTopBookmakers(3))
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-2 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm mx-auto">
        <div className="p-3">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">Top Bonuser</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-sm"
              aria-label="Luk"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            {topBookmakers.map((bookmaker) => (
              <div
                key={bookmaker.id}
                className="border-2 border-gray-200 rounded-lg p-2 relative transition-all duration-300 hover:border-red-300 hover:shadow-lg hover:bg-gray-50"
              >
                {bookmaker.label && (
                  <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] py-0.5 px-1 rounded-tl-lg">
                    {bookmaker.label}
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-8 relative flex-shrink-0 mr-1 flex items-center justify-center overflow-hidden">
                      {bookmaker.logo ? (
                        <Image
                          src={bookmaker.logo || "/placeholder.svg"}
                          alt={bookmaker.name}
                          width={48}
                          height={32}
                          className="object-contain max-w-full max-h-full"
                        />
                      ) : (
                        <div className="text-xs font-bold">{bookmaker.name}</div>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-xs">{bookmaker.name}</div>
                      <div className="text-xs">{bookmaker.bonus}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-lg font-bold text-green-600">{bookmaker.rating.toFixed(1)}</div>
                    <StarRating rating={bookmaker.rating} size="sm" />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-1 pt-1 border-t">
                  <div className="text-[9px] text-gray-500 w-3/4">
                    18+ | Kun nye kunder | Regler gælder | SPIL ANSVARLIGT
                  </div>
                  <a
                    href={bookmaker.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    FÅ BONUS! *
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 text-[9px] text-gray-500 text-center">
            18+ | Spil ansvarligt | ROFUS | StopSpillet | Vilkår gælder
          </div>
        </div>
      </div>
    </div>
  )
}
