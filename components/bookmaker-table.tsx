import { bookmakers } from "@/data/bookmakers"
import { StarRating } from "@/components/ui/star-rating"
import Image from "next/image"

export function BookmakerTable() {
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="bg-white bg-opacity-95 rounded-lg p-4 backdrop-blur-sm">
        {/* Mobile Card Layout */}
        <div className="block md:hidden space-y-3">
          {bookmakers.map((bookmaker) => (
            <div
              key={bookmaker.id}
              className="border rounded-lg p-3 relative transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50"
            >
              {bookmaker.label && (
                <div className="absolute top-0 left-0 bg-red-600 text-white text-xs py-1 px-2 rounded-tl-lg">
                  {bookmaker.label}
                </div>
              )}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-16 h-8 relative flex-shrink-0 mr-2 transition-transform duration-300 hover:scale-110">
                    {bookmaker.logo ? (
                      <Image
                        src={bookmaker.logo || "/placeholder.svg"}
                        alt={bookmaker.name}
                        width={64}
                        height={32}
                        className="object-contain"
                      />
                    ) : (
                      <div className="text-sm font-bold">{bookmaker.name}</div>
                    )}
                  </div>
                  <span className="font-bold text-sm">{bookmaker.name}</span>
                </div>
                <div className="text-xl font-bold text-green-600">{bookmaker.rating.toFixed(1)}</div>
              </div>
              <div className="text-sm mb-2">{bookmaker.bonus}</div>
              <div className="flex justify-between items-center">
                <StarRating rating={bookmaker.rating} />
                <a
                  href={bookmaker.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm transition-all duration-300 hover:shadow-md hover:scale-105"
                >
                  FÅ BONUS! *
                </a>
              </div>
              <div className="text-xs text-gray-500 mt-3 pt-2 border-t">
                18+ | Kun nye kunder | Spil for 100 kr. til odds 1.8 eller højere og få et 100 kr. free bet til brug på
                sportsspil efter det kvalificerende spil er afgjort | Gyldig i 7 dage | Generelle regler og vilkå er
                altid gældende | SPIL ANSVARLIGT | STOPSPILLET.DK | ROFUS
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table Layout */}
        <div className="hidden md:block">
          <table className="w-full">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-3 px-4 text-left text-base">BOOKMAKERE</th>
                <th className="py-3 px-4 text-left text-base">BONUS</th>
                <th className="py-3 px-4 text-center text-base">VURDERING</th>
                <th className="py-3 px-4 text-center text-base">BEDØMMELSE</th>
                <th className="py-3 px-4 text-center text-base">SPIL</th>
              </tr>
            </thead>
            <tbody>
              {bookmakers.map((bookmaker, index) => (
                <>
                  <tr
                    key={bookmaker.id}
                    className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} transition-colors duration-300 hover:bg-gray-100`}
                  >
                    <td className="py-4 px-4 relative">
                      {bookmaker.label && (
                        <div className="absolute top-0 left-0 bg-red-600 text-white text-xs py-1 px-2">
                          {bookmaker.label}
                        </div>
                      )}
                      <div className="flex items-center">
                        <div className="w-24 h-12 relative flex-shrink-0 mr-3 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110">
                          {bookmaker.logo ? (
                            <Image
                              src={bookmaker.logo || "/placeholder.svg"}
                              alt={bookmaker.name}
                              width={96}
                              height={48}
                              className="object-contain max-w-full max-h-full"
                            />
                          ) : (
                            <div className="text-base font-bold">{bookmaker.name}</div>
                          )}
                        </div>
                        <span className="font-bold text-base">{bookmaker.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-base font-medium">{bookmaker.bonus}</div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center">
                        <StarRating rating={bookmaker.rating} size="lg" />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="text-2xl font-bold text-green-600 transition-all duration-300 hover:scale-110">
                        {bookmaker.rating.toFixed(1)}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <a
                        href={bookmaker.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-base inline-block transition-all duration-300 hover:shadow-md hover:scale-105"
                      >
                        FÅ BONUS! *
                      </a>
                      <div className="text-sm mt-2">
                        <a
                          href={bookmaker.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline transition-colors duration-300"
                        >
                          Besøg {bookmaker.name}
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr
                    key={`disclaimer-${bookmaker.id}`}
                    className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                  >
                    <td colSpan={5} className="py-2 px-4">
                      <div className="text-xs text-gray-500">
                        18+ | Kun nye kunder | Spil for 100 kr. til odds 1.8 eller højere og få et 100 kr. free bet til
                        brug på sportsspil efter det kvalificerende spil er afgjort | Gyldig i 7 dage | Generelle regler
                        og vilkå er altid gældende | SPIL ANSVARLIGT | STOPSPILLET.DK | ROFUS
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
