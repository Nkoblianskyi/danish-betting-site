import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-800 bg-opacity-95 text-white py-8 px-4 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cookiepolicy" className="hover:underline">
                  Cookiepolitik
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Fortrolighedserklæring
                </Link>
              </li>
              <li>
                <Link href="/spil-sikkert" className="hover:underline">
                  Spil Sikkert
                </Link>
              </li>
              <li>
                <Link href="/vilkar" className="hover:underline">
                  Vilkår og Betingelser
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Ansvarligt Spil</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.stopspillet.dk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  <span className="mr-2">StopSpillet</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.spillemyndigheden.dk/rofus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  <span className="mr-2">ROFUS</span>
                </a>
              </li>
              <li>
                <a
                  href="https://ludomani.dk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center"
                >
                  <span className="mr-2">Ludomani</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Ansvarsfraskrivelse</h3>
            <p className="text-sm mb-4">
              DK BEDSTE BETTING SIDER modtager provision når du klikker på links og tilmelder
              dig. Dette påvirker ikke vores vurderinger, som er baseret på grundig research og test.
            </p>
            <div className="text-sm">
              <p className="mb-2">18+ | Spil ansvarligt | ROFUS | StopSpillet</p>
              <p>
                Gambling kan være vanedannende og resultere i tab. Spil altid ansvarligt og kun med penge, du har råd
                til at tabe. Hvis du eller nogen, du kender, har problemer med gambling, kontakt venligst StopSpillet på
                70 22 28 25.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row gap-20 items-center">
          <div className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DK BEDSTE BETTING SIDER. Alle rettigheder forbeholdes.
          </div>

          <div className="flex space-x-4 items-center">
            <a
              href="https://www.stopspillet.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/stopspillet.png"
                alt="StopSpillet"
                width={80}
                height={80}
                className=" rounded p-1"
              />
            </a>
            <a
              href="https://www.spillemyndigheden.dk/rofus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/rofus.png"
                alt="ROFUS"
                width={80}
                height={80}
                className="rounded p-1"
              />
            </a>
            <a
              href="https://ludomani.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/ludomani.png"
                alt="Ludomani"
                width={80}
                height={80}
                className="rounded p-1"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
