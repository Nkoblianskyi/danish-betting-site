import { bookmakers } from "@/data/bookmakers"
import { StarRating } from "@/components/ui/star-rating"
import Image from "next/image"

export function BookmakerTable() {
  return (
    <div className="container mx-auto py-4 px-1 sm:px-4">
      <div className="bg-white bg-opacity-90 rounded-xl p-2 sm:p-4 backdrop-blur-sm shadow-lg border border-gray-200">
        {/* Mobile Card Layout */}
        <div className="block lg:hidden space-y-2">
          {bookmakers.map((bookmaker, index) => (
            <div key={bookmaker.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              {/* Compact header */}
              <div className="p-2 flex items-center justify-between relative bg-gray-50">
                {bookmaker.label && (
                  <div className="absolute top-0 left-0 bg-red-600 text-white text-[10px] py-0.5 px-1 rounded-br-md font-medium">
                    {bookmaker.label}
                  </div>
                )}
                <div className="flex items-center flex-1 mt-1">
                  <div className="w-12 h-8 relative flex-shrink-0 mr-2">
                    {bookmaker.logo ? (
                      <Image
                        src={bookmaker.logo || "/placeholder.svg"}
                        alt={bookmaker.name}
                        width={48}
                        height={32}
                        className="object-contain max-w-full max-h-full"
                      />
                    ) : (
                      <div className="text-xs font-bold text-center">{bookmaker.name}</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm text-gray-800 truncate">{bookmaker.name}</h3>
                    <div className="flex items-center">
                      <StarRating rating={bookmaker.rating} size="sm" />
                      <span className="ml-1 text-sm font-bold text-green-600">{bookmaker.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact content */}
              <div className="p-2">
                <div className="text-xs text-gray-600 mb-1">Bonus:</div>
                <div className="font-medium text-gray-800 text-xs leading-tight mb-2">{bookmaker.bonus}</div>

                <a
                  href={bookmaker.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-md text-center block transition-all duration-300 text-xs"
                >
                  FÅ BONUS! *
                </a>

                <div className="text-[10px] text-gray-500 leading-tight mt-2 pt-2 border-t border-gray-100">
                  18+ | Kun nye kunder | Vilkår gælder | SPIL ANSVARLIGT | STOPSPILLET.DK | ROFUS
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table Layout */}
        <div className="hidden lg:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead className="bg-black text-white">
                <tr>
                  <th className="py-4 px-4 text-left text-base font-bold">BOOKMAKERE</th>
                  <th className="py-4 px-4 text-left text-base font-bold">BONUS</th>
                  <th className="py-4 px-4 text-center text-base font-bold">VURDERING</th>
                  <th className="py-4 px-4 text-center text-base font-bold">BEDØMMELSE</th>
                  <th className="py-4 px-4 text-center text-base font-bold">SPIL</th>
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
                          <div className="absolute top-0 left-0 bg-red-600 text-white text-xs py-1 px-2 rounded-br-lg">
                            {bookmaker.label}
                          </div>
                        )}
                        <div className="flex items-center pt-2">
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
                          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-base inline-block transition-all duration-300 hover:shadow-md hover:scale-105"
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
                          18+ | Kun nye kunder | Spil for 100 kr. til odds 1.8 eller højere og få et 100 kr. free bet
                          til brug på sportsspil efter det kvalificerende spil er afgjort | Gyldig i 7 dage | Generelle
                          regler og vilkår er altid gældende | SPIL ANSVARLIGT | STOPSPILLET.DK | ROFUS
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
    </div>
  )
}
