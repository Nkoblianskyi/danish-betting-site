"use client"

import { useState } from "react"

interface GamalyzeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function GamalyzeModal({ isOpen, onClose }: GamalyzeModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-auto max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-600">Test dig selv med Gamalyze</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Luk"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              bedstedanskebettingsider.com is an independent professional comparison site supported by referral fees
              from the sites which are ranked on the site. The Casino site and information that we present are from
              companies from which bedstedanskebettingsider.com receives compensation. This compensation impacts the
              ranking of the sites. Other factors, including our own opinions, your location, and the likelihood of
              signing up, may also impact how the ranking of the sites appears to a particular user.
              bedstedanskebettingsider.com cannot and does not present information about every Casino site or Casino
              site offer available.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">Gamalyze Test</h3>
              <p className="text-blue-700 text-sm">
                Gamalyze er et værktøj, der hjælper dig med at vurdere dine spillevaner og identificere potentielle
                risikofaktorer. Testen er anonym og gratis.
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

export function useGamalyzeModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return { isOpen, openModal, closeModal }
}
