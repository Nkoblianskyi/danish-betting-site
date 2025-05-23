"use client"
import { getCurrentDate } from "@/data/bookmakers"
import { GamalyzeModal, useGamalyzeModal } from "./gamalyze-modal"
import { AgeModal, useAgeModal } from "./age-modal"
import { TermsModal, useTermsModal } from "./terms-modal"
import Link from "next/link"

export function Header() {
  const currentDate = getCurrentDate()
  const gamalyzeModal = useGamalyzeModal()
  const ageModal = useAgeModal()
  const termsModal = useTermsModal()

  return (
    <>
      <header
        className="bg-gradient-to-b from-gray-200/90 to-gray-300/90 py-2 md:py-4 px-2 md:px-4 text-center backdrop-blur-sm shadow-md relative"
        style={{
          backgroundImage: "url('/ffc734bd790315719a71b737bff9ae27.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto relative z-10 bg-white bg-opacity-40 p-2 md:p-5">
          <div className="flex flex-col md:flex-row items-center justify-between mb-1 md:mb-3">
            <div className="flex items-center mb-1 md:mb-0">
              <div className="flex items-center">
                <Link href="/" className="hover:opacity-90 transition-opacity">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-red-600 rounded-lg flex items-center justify-center mr-2 md:mr-3 shadow-md">
                    <span className="text-white font-bold text-sm md:text-xl">🏆</span>
                  </div>
                </Link>
                <div className="text-left">
                  <h1 className="text-lg md:text-2xl font-bold">
                    BEDSTE <span className="text-red-600">BETTING</span> SIDER
                  </h1>
                  <h2 className="text-[10px] md:text-sm text-black">OPDATERET TIL {currentDate}</h2>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              <div className="flex items-center gap-1 bg-white bg-opacity-40 px-2 md:px-3 py-1 md:py-2 rounded-md text-[10px] md:text-sm">
                <span className="w-6 h-4 md:w-8 md:h-5 relative flex-shrink-0 overflow-hidden">
                  <div className="absolute inset-0 bg-red-600"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-full md:w-2 bg-white absolute left-1/4 transform -translate-x-1/2"></div>
                    <div className="h-1.5 w-full md:h-2 bg-white absolute top-1/2 transform -translate-y-1/2"></div>
                  </div>
                </span>
                <span>Dansk Licens</span>
              </div>
              <div className="flex items-center gap-1 bg-white bg-opacity-40 px-2 md:px-3 py-1 md:py-2 rounded-md text-[10px] md:text-sm">
                <span className="text-yellow-600 text-lg md:text-xl">💰</span>
                <span>Eksklusive Bonusser</span>
              </div>
              <div className="flex items-center gap-1 bg-white bg-opacity-40 px-2 md:px-3 py-1 md:py-2 rounded-md text-[10px] md:text-sm">
                <span className="text-blue-600 text-lg md:text-xl">🔍</span>
                <span>Testet i dag</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-xs md:text-sm mb-1 md:mb-3 bg-white bg-opacity-40 p-2 md:p-4 rounded-md">
            <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2 text-gray-800">
              Ekspertanmeldelser af Danmarks Bedste Betting Sider
            </h3>
            <p className="text-[10px] md:text-sm text-gray-700 mb-1 md:mb-2">
              Velkommen til Danmarks mest pålidelige guide til online betting! Vores ekspertteam har grundigt testet og
              anmeldt alle de bedste betting-sider, der er tilgængelige for danske spillere. Vi fokuserer på sikkerhed,
              bonusser, odds, brugeroplevelse og kundeservice for at give dig den mest præcise vurdering.
            </p>
            <p className="text-[8px] md:text-xs text-gray-600">
              Alle anbefalede bookmakere har gyldig dansk licens fra Spillemyndigheden og overholder danske spillelove.
              Vi opdaterer løbende vores anmeldelser for at sikre, at du altid får den nyeste information.
            </p>
          </div>

          <div className="text-[8px] md:text-xs bg-gray-800 text-white p-1 md:p-2 rounded-md flex flex-wrap justify-center gap-x-1">
            <button onClick={gamalyzeModal.openModal} className="hover:underline cursor-pointer">
              Test dig selv med Gamalyze
            </button>
            {" | "}
            <button onClick={ageModal.openModal} className="hover:underline cursor-pointer">
              18+ | Spil ansvarligt!
            </button>
            {" | "}
            <button onClick={termsModal.openModal} className="hover:underline cursor-pointer">
              Regler og vilkår gælder
            </button>
          </div>
        </div>
      </header>

      <GamalyzeModal isOpen={gamalyzeModal.isOpen} onClose={gamalyzeModal.closeModal} />
      <AgeModal isOpen={ageModal.isOpen} onClose={ageModal.closeModal} />
      <TermsModal isOpen={termsModal.isOpen} onClose={termsModal.closeModal} />
    </>
  )
}
