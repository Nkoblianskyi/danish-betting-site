import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />
      <div className="container mx-auto py-8 px-4 flex justify-center">
        <div className="max-w-3xl w-full bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Fortrolighedserklæring</h1>

          <div className="prose max-w-none">
            <p>
              BedsteDanskeBettingsider.com respekterer dit privatliv og er forpligtet til at beskytte dine personlige
              oplysninger. Denne fortrolighedserklæring forklarer, hvordan vi indsamler, bruger og beskytter dine
              oplysninger.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Indsamling af oplysninger</h2>
            <p>Vi indsamler følgende typer oplysninger:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Oplysninger, du giver os frivilligt (f.eks. når du kontakter os)</li>
              <li>Oplysninger, der indsamles automatisk (f.eks. cookies og browseroplysninger)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-4">Brug af oplysninger</h2>
            <p>Vi bruger dine oplysninger til følgende formål:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>For at forbedre vores hjemmeside og tjenester</li>
              <li>For at personliggøre din oplevelse</li>
              <li>For at kommunikere med dig</li>
              <li>For at overholde lovmæssige forpligtelser</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-4">Deling af oplysninger</h2>
            <p>Vi deler ikke dine personlige oplysninger med tredjeparter, undtagen i følgende tilfælde:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Med dit samtykke</li>
              <li>For at overholde lovmæssige forpligtelser</li>
              <li>For at beskytte vores rettigheder og ejendom</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-4">Datasikkerhed</h2>
            <p>
              Vi implementerer passende sikkerhedsforanstaltninger for at beskytte dine personlige oplysninger mod
              uautoriseret adgang, ændring, offentliggørelse eller ødelæggelse.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Dine rettigheder</h2>
            <p>Du har følgende rettigheder vedrørende dine personlige oplysninger:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Ret til at få adgang til dine oplysninger</li>
              <li>Ret til at rette dine oplysninger</li>
              <li>Ret til at slette dine oplysninger</li>
              <li>Ret til at begrænse behandlingen af dine oplysninger</li>
              <li>Ret til at gøre indsigelse mod behandlingen af dine oplysninger</li>
              <li>Ret til dataportabilitet</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-4">Ændringer i vores fortrolighedserklæring</h2>
            <p>
              Vi kan opdatere vores fortrolighedserklæring fra tid til anden. Vi opfordrer dig til regelmæssigt at
              gennemgå denne side for at holde dig informeret om eventuelle ændringer.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Kontakt os</h2>
            <p>Hvis du har spørgsmål om vores fortrolighedserklæring, er du velkommen til at kontakte os.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
