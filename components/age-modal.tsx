"use client"

import { useState } from "react"

interface AgeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeModal({ isOpen, onClose }: AgeModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-red-600">18+ | Spil ansvarligt!</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Luk"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-bold text-red-800 mb-2">Kun for personer over 18 år</h3>
              <p className="text-red-700">
                Alle betting-sider og gambling-tjenester på denne hjemmeside er kun for personer over 18 år. Gambling er
                forbudt for mindreårige.
              </p>
            </div>

            <p className="text-gray-700">
              Ifølge dansk lovgivning er det ulovligt for personer under 18 år at deltage i gambling-aktiviteter. Alle
              bookmakere og casinoer kræver aldersverifikation for at sikre, at denne lov overholdes.
            </p>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">Ansvarlig Gambling</h4>
              <p className="text-yellow-700 text-sm">
                Vi opfordrer alle brugere til at spille ansvarligt og kun med penge, de har råd til at tabe. Hvis du
                eller nogen, du kender, har problemer med gambling, kontakt venligst StopSpillet på 70 22 28 25.
              </p>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500 text-center border-t pt-4">
            18+ | Spil ansvarligt | ROFUS | StopSpillet
          </div>
        </div>
      </div>
    </div>
  )
}

export function useAgeModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return { isOpen, openModal, closeModal }
}
