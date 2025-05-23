import Image from "next/image"
import Link from "next/link"

export function ResponsibleGambling() {
  return (
    <div className="container mx-auto py-6 px-4">
      <div className="bg-white bg-opacity-95 rounded-lg p-6 backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Spil Sikkert og Ansvarligt</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 text-xl">🔞</span>
              </div>
              <h3 className="font-bold text-lg text-blue-800">Kun for 18+</h3>
            </div>
            <p className="text-blue-700 text-sm">
              Gambling er kun for personer over 18 år. Alle bookmakere på vores side kræver aldersverifikation for at
              sikre, at denne lov overholdes.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600 text-xl">⚖️</span>
              </div>
              <h3 className="font-bold text-lg text-green-800">Spil med Måde</h3>
            </div>
            <p className="text-green-700 text-sm">
              Sæt grænser for tid og penge. Spil kun for underholdning og aldrig for at tjene penge eller løse
              økonomiske problemer.
            </p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-red-600 text-xl">🆘</span>
              </div>
              <h3 className="font-bold text-lg text-red-800">Få Hjælp</h3>
            </div>
            <p className="text-red-700 text-sm">
              Hvis du eller nogen, du kender, har problemer med gambling, er der hjælp at få. Kontakt StopSpillet på 70
              22 28 25.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
          <Link
            href="/spil-sikkert"
            className="flex items-center bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Image src="/images/logos/stopspillet.png" alt="StopSpillet" width={80} height={40} className="mr-3" />
            <div>
              <h4 className="font-bold">StopSpillet</h4>
              <p className="text-sm text-gray-600">70 22 28 25</p>
            </div>
          </Link>

          <Link
            href="/spil-sikkert"
            className="flex items-center bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Image src="/images/logos/rofus.png" alt="ROFUS" width={80} height={40} className="mr-3" />
            <div>
              <h4 className="font-bold">ROFUS</h4>
              <p className="text-sm text-gray-600">Udeluk dig selv</p>
            </div>
          </Link>

          <Link
            href="/spil-sikkert"
            className="flex items-center bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Image src="/images/logos/ludomani.png" alt="Ludomani" width={80} height={40} className="mr-3" />
            <div>
              <h4 className="font-bold">Ludomani</h4>
              <p className="text-sm text-gray-600">Få behandling</p>
            </div>
          </Link>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>
            Alle bookmakere på vores side har dansk licens fra Spillemyndigheden og følger strenge regler for ansvarligt
            spil.
            <br />
            Læs mere om ansvarligt spil på vores{" "}
            <Link href="/spil-sikkert" className="text-blue-600 hover:underline">
              Spil Sikkert
            </Link>{" "}
            side.
          </p>
        </div>
      </div>
    </div>
  )
}
