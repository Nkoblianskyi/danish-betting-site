"use client"

import { upcomingMatches } from "@/data/bookmakers"

export function MatchList() {
  return (
    <div
      className="bg-green-700 text-white py-1 px-4 [&_.animate-marquee]:animate-[marquee_20s_linear_infinite]"
      style={{
        maxHeight: "50px",
        "--marquee-duration": "20s",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="bg-green-800 py-1 px-2 md:w-48 flex-shrink-0 flex items-center">
            <h3 className="text-sm font-bold">Kommende Kampe</h3>
          </div>

          <div className="flex-grow overflow-hidden">
            <div
              className="flex space-x-8 whitespace-nowrap"
              style={{
                animation: "marquee 20s linear infinite",
                animationName: "marquee",
              }}
            >
              {upcomingMatches.map((match) => (
                <div key={match.id} className="border-l border-green-600 pl-2 whitespace-nowrap">
                  <div className="text-sm font-medium">
                    {match.homeTeam} vs {match.awayTeam}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}
