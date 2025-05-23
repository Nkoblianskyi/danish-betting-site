import Image from "next/image"
import Link from "next/link"

export function ResponsibleGambling() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white bg-opacity-75 rounded-xl p-8 backdrop-blur-sm shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Spil Sikkert og Ansvarligt</h2>

        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Gambling skal være underholdning - ikke en måde at løse økonomiske problemer på. Vi er forpligtet til at
            fremme ansvarligt spil og hjælpe med at forebygge spilleproblemer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-100 bg-opacity-90 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mr-4 shadow-sm">
                <span className="text-white text-2xl">🔞</span>
              </div>
              <h3 className="font-bold text-xl text-gray-700">Kun for 18+</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Gambling er kun for personer over 18 år. Alle bookmakere på vores side kræver aldersverifikation for at
              sikre, at denne lov overholdes.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Aldrig spil hvis du er under 18 år</li>
              <li>• Verificer altid din alder hos bookmakeren</li>
              <li>• Beskyt mindreårige fra gambling</li>
            </ul>
          </div>

          <div className="bg-gray-100 bg-opacity-90 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mr-4 shadow-sm">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="font-bold text-xl text-gray-700">Spil med Måde</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Sæt grænser for tid og penge. Spil kun for underholdning og aldrig for at tjene penge eller løse
              økonomiske problemer.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Sæt daglige/ugentlige grænser</li>
              <li>• Tag regelmæssige pauser</li>
              <li>• Spil aldrig når du er påvirket</li>
              <li>• Brug kun penge du har råd til at tabe</li>
            </ul>
          </div>

          <div className="bg-gray-100 bg-opacity-90 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mr-4 shadow-sm">
                <span className="text-white text-2xl">🆘</span>
              </div>
              <h3 className="font-bold text-xl text-gray-700">Få Hjælp</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Hvis du eller nogen, du kender, har problemer med gambling, er der hjælp at få. Kontakt professionelle
              organisationer.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Gratis og anonym rådgivning</li>
              <li>• Professionel behandling</li>
              <li>• Støtte til pårørende</li>
              <li>• Selvudelukkelse muligheder</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 bg-opacity-80 p-6 rounded-xl border border-gray-200 mb-10">
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-700">Advarselstegn på Spilleproblemer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-600">Økonomiske tegn:</h4>
              <ul className="text-gray-500 space-y-2">
                <li>• Spiller for mere end du har råd til</li>
                <li>• Låner penge til gambling</li>
                <li>• Sælger ejendele for at finansiere spil</li>
                <li>• Forsømmer regninger og udgifter</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-gray-600">Adfærdsmæssige tegn:</h4>
              <ul className="text-gray-500 space-y-2">
                <li>• Lyver om gambling-aktiviteter</li>
                <li>• Bruger mere tid på gambling</li>
                <li>• Forsøger at vinde tabte penge tilbage</li>
                <li>• Bliver irritabel når du ikke kan spille</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <a
            href="https://www.stopspillet.dk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-800  p-5 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
          >
            <Image src="/images/logos/stopspillet.png" alt="StopSpillet" width={80} height={40} className="mr-4" />
            <div>
              <h4 className="font-bold text-lg text-white transition-colors">StopSpillet</h4>
              <p className="text-sm text-gray-600">Hjælpelinje: 70 22 28 25</p>
              <p className="text-xs text-gray-500">Gratis og anonym rådgivning</p>
            </div>
          </a>

          <a
            href="https://www.spillemyndigheden.dk/rofus#ROFUS/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-800  p-5 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
          >
            <Image src="/rofus.png" alt="ROFUS" width={80} height={40} className="mr-4" />
            <div>
              <h4 className="font-bold text-lg text-white transition-colors">ROFUS</h4>
              <p className="text-sm text-gray-600">Selvudelukkelse</p>
              <p className="text-xs text-gray-500">Udeluk dig fra alle danske sider</p>
            </div>
          </a>

          <a
            href="https://ludomani.dk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-800 p-5 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
          >
            <Image src="/ludomani.png" alt="Ludomani" width={80} height={40} className="mr-4" />
            <div>
              <h4 className="font-bold text-lg text-white transition-colors">Ludomani</h4>
              <p className="text-sm text-gray-600">Telefon: 70 11 18 10</p>
              <p className="text-xs text-gray-500">Professionel behandling</p>
            </div>
          </a>
        </div>

        <div className="bg-gray-100 bg-opacity-80 p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-4">⚠️</span>
            <h3 className="font-bold text-xl text-gray-700">Vigtig Påmindelse</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Gambling kan være vanedannende og føre til alvorlige økonomiske og personlige problemer. Hvis du mærker, at
            dit gambling er ved at komme ud af kontrol, så søg hjælp med det samme.
          </p>
          <div className="text-center">
            <p className="font-bold text-lg text-gray-700">
              Alle bookmakere på vores side har dansk licens fra Spillemyndigheden og følger strenge regler for
              ansvarligt spil.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Læs mere om ansvarligt spil på vores{" "}
            <Link href="/spil-sikkert" className="text-gray-700 hover:underline font-medium">
              Spil Sikkert
            </Link>{" "}
            side.
          </p>
        </div>
      </div>
    </div>
  )
}
