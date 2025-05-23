import type { Bookmaker } from "@/data/bookmakers"
import { StarRating } from "@/components/ui/star-rating"
import Image from "next/image"

interface BonusCardProps {
  bookmaker: Bookmaker
}

export function BonusCard({ bookmaker }: BonusCardProps) {
  return (
    <div className="border rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 relative">
      {bookmaker.label && (
        <div className="absolute top-0 left-0 bg-red-600 text-white text-xs py-1 px-2 rounded-tl-lg rounded-br-lg">
          {bookmaker.label}
        </div>
      )}

      <div className="w-32 h-16 relative flex-shrink-0">
        <div className="w-full h-full flex items-center justify-center">
          {bookmaker.logo ? (
            <Image
              src={bookmaker.logo || "/placeholder.svg"}
              alt={bookmaker.name}
              width={128}
              height={64}
              className="object-contain"
            />
          ) : (
            <div className="text-xl font-bold">{bookmaker.name}</div>
          )}
        </div>
      </div>

      <div className="flex-grow text-center md:text-left">
        <h3 className="font-bold text-lg">{bookmaker.name}</h3>
        <p className="text-lg">{bookmaker.bonus}</p>
        <div className="flex justify-center md:justify-start mt-1">
          <StarRating rating={bookmaker.rating} />
          <span className="ml-2 text-2xl font-bold text-green-600">{bookmaker.rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="flex-shrink-0">
        <a
          href={bookmaker.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          FÅ BONUS! *
        </a>
      </div>

      <div className="w-full text-xs mt-2">{bookmaker.terms}</div>
    </div>
  )
}
