import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function SpilSikkert() {
  return (
    <main>
      <Header />
      <div className="container mx-auto py-8 px-4 flex justify-center">
        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg p-8 max-w-3xl w-full">
          <h1 className="text-3xl font-bold mb-6 text-center">Spil Sikkert</h1>

          <div className="prose max-w-none text-center">
            <p>
              På DK BEDSTE BETTING SIDER tager vi ansvarligt spil meget alvorligt. Vi er forpligtet til at fremme
              sikre og ansvarlige spillevaner og til at hjælpe med at forebygge og bekæmpe problematisk spilleadfærd.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Ansvarligt Spil</h2>
            <p>
              Gambling bør altid være en underholdende aktivitet og aldrig en måde at tjene penge på eller løse
              økonomiske problemer. Det er vigtigt at huske følgende principper:
            </p>
            <ul className="list-disc pl-6 mb-4 text-left mx-auto inline-block">
              <li>Spil kun for underholdningens skyld, ikke for at tjene penge</li>
              <li>Spil kun med penge, du har råd til at tabe</li>
              <li>Sæt tids- og pengebegrænsninger, og hold dig til dem</li>
              <li>Tag regelmæssige pauser fra gambling</li>
              <li>Spil ikke, når du er påvirket af alkohol eller stoffer</li>
              <li>Spil ikke, når du er deprimeret, stresset eller på anden måde sårbar</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-4">Tegn på Problematisk Spilleadfærd</h2>
            <p>Vær opmærksom på følgende advarselstegn på problematisk spilleadfærd:</p>
            <ul className="list-disc pl-6 mb-4 text-left mx-auto inline-block">
              <li>Spille for mere, end du har råd til at tabe</li>
              <li>Bruge mere og mere tid og penge på gambling</li>
              <li>Føle skyld eller bekymring over din gambling</li>
              <li>Prøve at vinde tabte penge tilbage</li>
              <li>Lyve om eller skjule din gambling</li>
              <li>Låne penge eller sælge ejendele for at finansiere gambling</li>
              <li>Gambling påvirker dit arbejde, dine studier eller dine personlige forhold</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-4">Værktøjer til Ansvarligt Spil</h2>
            <p>
              De fleste danske licenserede bookmakere tilbyder værktøjer til at hjælpe dig med at kontrollere din
              gambling:
            </p>
            <ul className="list-disc pl-6 mb-4 text-left mx-auto inline-block">
              <li>
                <strong>Indsatsgrænser:</strong> Sæt daglige, ugentlige eller månedlige grænser for, hvor meget du kan
                indsætte
              </li>
              <li>
                <strong>Tabsgrænser:</strong> Begræns hvor meget du kan tabe inden for en bestemt periode
              </li>
              <li>
                <strong>Sessionsgrænser:</strong> Begræns hvor lang tid du kan spille i en enkelt session
              </li>
              <li>
                <strong>Selvudelukkelse:</strong> Udeluk dig selv fra en bestemt bookmaker i en periode eller permanent
              </li>
              <li>
                <strong>Virkeligheds-check:</strong> Få påmindelser om, hvor længe du har spillet, og hvor meget du har
                vundet eller tabt
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-4">Hjælp og Support</h2>
            <p>Hvis du eller nogen, du kender, har problemer med gambling, er der hjælp at få:</p>

            <div className="space-y-4 mt-6">
              <div className="border p-4 rounded-lg bg-white bg-opacity-90">
                <div className="flex items-center mb-2 justify-center">
                  <Image
                    src="/stopspillet.png"
                    alt="StopSpillet"
                    width={60}
                    height={30}
                    className="mr-3"
                  />
                  <h3 className="font-bold text-xl">StopSpillet</h3>
                </div>
                <p>
                  StopSpillet er Spillemyndighedens hjælpelinje, der tilbyder gratis og anonym rådgivning om
                  problematisk spilleadfærd.
                </p>
                <p className="mt-2">
                  <strong>Telefon:</strong> 70 22 28 25
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.stopspillet.dk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    www.stopspillet.dk
                  </a>
                </p>
              </div>

              <div className="border p-4 rounded-lg bg-white bg-opacity-90">
                <div className="flex items-center mb-2 justify-center">
                  <Image src="/rofus.png" alt="ROFUS" width={60} height={30} className="mr-3" />
                  <h3 className="font-bold text-xl">ROFUS</h3>
                </div>
                <p>
                  Register Over Frivilligt Udelukkede Spillere (ROFUS) er et register, hvor du kan udelukke dig selv
                  midlertidigt eller permanent fra alle danske licenserede gambling-sider.
                </p>
                <p className="mt-2">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.spillemyndigheden.dk/rofus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    www.spillemyndigheden.dk/rofus
                  </a>
                </p>
              </div>

              <div className="border p-4 rounded-lg bg-white bg-opacity-90">
                <div className="flex items-center mb-2 justify-center">
                  <Image
                    src="/ludomani.png"
                    alt="Center for Ludomani"
                    width={60}
                    height={30}
                    className="mr-3"
                  />
                  <h3 className="font-bold text-xl">Center for Ludomani</h3>
                </div>
                <p>
                  Center for Ludomani tilbyder gratis behandling til personer med spilleproblemer og deres pårørende.
                </p>
                <p className="mt-2">
                  <strong>Telefon:</strong> 70 11 18 10
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://ludomani.dk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    www.ludomani.dk
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mt-8">
              <h3 className="font-bold text-xl mb-2">Husk:</h3>
              <p className="text-lg">
                Gambling bør være sjovt og underholdende. Hvis det ikke længere er sjovt, er det tid til at tage en
                pause og søge hjælp.
              </p>
              <p className="mt-2 font-bold">18+ | Spil ansvarligt | ROFUS | StopSpillet</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
