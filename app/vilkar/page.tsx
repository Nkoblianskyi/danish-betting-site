import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsAndConditions() {
  return (
    <main>
      <Header />
      <div className="container mx-auto py-8 px-4 flex justify-center">
        <div className="max-w-3xl w-full bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Vilkår og Betingelser</h1>

          <div className="prose max-w-none">
            <p>
              Velkommen til DK BEDSTE BETTING SIDER. Ved at bruge vores hjemmeside accepterer du disse vilkår og
              betingelser. Læs dem omhyggeligt, da de påvirker dine juridiske rettigheder og forpligtelser.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">1. Accepter af Vilkår</h2>
            <p>
              Ved at tilgå eller bruge DK BEDSTE BETTING SIDER accepterer du at være bundet af disse vilkår og
              betingelser, vores fortrolighedspolitik og alle gældende love og regler. Hvis du ikke accepterer disse
              vilkår, må du ikke bruge vores hjemmeside.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">2. Ændringer af Vilkår</h2>
            <p>
              Vi forbeholder os retten til at ændre disse vilkår og betingelser når som helst. Ændringer træder i kraft,
              når de offentliggøres på hjemmesiden. Din fortsatte brug af hjemmesiden efter sådanne ændringer udgør din
              accept af de nye vilkår.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">3. Brug af Hjemmesiden</h2>
            <p>Du accepterer at bruge hjemmesiden kun til lovlige formål og på en måde, der ikke:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Krænker andres rettigheder</li>
              <li>Er ulovlig, bedragerisk eller skadelig</li>
              <li>Distribuerer malware eller anden skadelig kode</li>
              <li>Forstyrrer hjemmesidens normale drift</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-4">4. Aldersgrænse</h2>
            <p>
              Vores hjemmeside indeholder information om gambling-produkter og -tjenester. For at bruge vores hjemmeside
              skal du være mindst 18 år gammel eller over den lovlige alder for gambling i din jurisdiktion, hvis denne
              er højere.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">5. Ansvarsfraskrivelse</h2>
            <p>
              DK BEDSTE BETTING SIDER er en informationshjemmeside, der giver anmeldelser og sammenligninger af
              forskellige bookmakere og gambling-tjenester. Vi er ikke en gambling-operatør og tilbyder ikke
              gambling-tjenester.
            </p>
            <p className="mt-2">
              Alle anmeldelser, vurderinger og information på vores hjemmeside er baseret på vores eksperters mening og
              research. Vi bestræber os på at give nøjagtig og opdateret information, men vi kan ikke garantere, at
              informationen altid er korrekt, fuldstændig eller aktuel.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">6. Affiliate Links og Reklame</h2>
            <p>
              DK BEDSTE BETTING SIDER indeholder affiliate links. Dette betyder, at vi kan modtage provision, hvis
              du klikker på et link på vores hjemmeside og derefter tilmelder dig en tjeneste eller foretager et køb.
              Dette påvirker ikke vores anmeldelser eller vurderinger, som er baseret på grundig research og test.
            </p>
            <p className="mt-2">
              Links markeret med * er reklamelinks. Vi oplyser tydeligt, når indhold er kommercielt eller sponsoreret.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">7. Ansvarligt Spil</h2>
            <p>
              Vi fremmer ansvarligt spil og opfordrer alle brugere til at spille ansvarligt. Gambling bør være en
              underholdende aktivitet og ikke en måde at tjene penge på eller løse økonomiske problemer.
            </p>
            <p className="mt-2">
              Hvis du eller nogen, du kender, har problemer med gambling, opfordrer vi dig til at søge hjælp fra
              organisationer som StopSpillet, ROFUS eller Center for Ludomani.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">8. Intellektuel Ejendomsret</h2>
            <p>
              Alt indhold på BEDSTE BETTING SIDER, herunder tekst, grafik, logoer, ikoner, billeder, lydklip,
              digitale downloads og software, er vores ejendom eller vores indholdsleverandørers ejendom og er beskyttet
              af danske og internationale love om ophavsret.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">9. Begrænsning af Ansvar</h2>
            <p>
              BEDSTE BETTING SIDER og dets ejere, medarbejdere og partnere er ikke ansvarlige for tab eller
              skader af nogen art, der opstår som følge af din brug af vores hjemmeside eller information, produkter
              eller tjenester, der er tilgængelige gennem vores hjemmeside.
            </p>
            <p className="mt-2">
              Vi er ikke ansvarlige for tab eller skader, der opstår som følge af din brug af gambling-tjenester, der er
              anmeldt eller linket til på vores hjemmeside.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">10. Gældende Lov</h2>
            <p>
              Disse vilkår og betingelser er underlagt og fortolkes i overensstemmelse med dansk lov. Enhver tvist, der
              opstår i forbindelse med disse vilkår og betingelser, er underlagt den eksklusive jurisdiktion af de
              danske domstole.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">11. Kontakt Os</h2>
            <p>
              Hvis du har spørgsmål om disse vilkår og betingelser, er du velkommen til at kontakte os via vores
              kontaktformular.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg mt-8">
              <p className="text-sm">
                Sidst opdateret:{" "}
                {new Date().toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
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
