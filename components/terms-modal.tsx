"use client"

import { useState } from "react"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl mx-auto max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Regler og vilkår gælder</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Luk"
            >
              ✕
            </button>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Vilkår og Betingelser</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                18+ | Spil ansvarligt – Test dig selv med Gamalyze! | Regler og vilkår gælder | StopSpillet – Ring til
                70 22 28 25 | Udeluk dig via ROFUS | Links markeret med , der kan bidrage til sidens
                indtjening
              </p>

              <p className="text-gray-700 text-sm leading-relaxed">
                18+ | Spil ansvarligt – Test dig selv med Gamalyze! | Regler og vilkår gælder | StopSpillet – Ring til
                70 22 28 25 | Udeluk dig via ROFUS | Links markeret med, der kan bidrage til sidens
                indtjening.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-bold text-gray-800 mb-2">StopSpillet</h4>
                <p className="text-sm text-gray-600 mb-2">Hjælpelinje for spilleproblemer</p>
                <p className="text-red-600 font-bold">70 22 28 25</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-bold text-gray-800 mb-2">ROFUS</h4>
                <p className="text-sm text-gray-600 mb-2">Udeluk dig selv</p>
                <p className="text-red-600 font-bold">spillemyndigheden.dk/rofus</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h4 className="font-bold text-gray-800 mb-2">Gamalyze</h4>
                <p className="text-sm text-gray-600 mb-2">Test dine spillevaner</p>
                <p className="text-red-600 font-bold">gamalyze.com</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-yellow-800 mb-2">Vigtig Information</h4>
              <p className="text-yellow-700 text-sm">
                Vi modtager provision, når du klikker på disse links og
                tilmelder dig. Dette påvirker ikke vores anmeldelser, som er baseret på grundig research og test.
              </p>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500 text-center border-t pt-4">
            18+ | Spil ansvarligt | ROFUS | StopSpillet | Gamalyze
          </div>
        </div>
      </div>
    </div>
  )
}

export function useTermsModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return { isOpen, openModal, closeModal }
}
