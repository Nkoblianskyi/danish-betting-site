import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicy() {
  return (
    <main>
      <Header />
      <div className="container mx-auto py-8 px-4 flex justify-center">
        <div className="max-w-3xl w-full bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Cookiepolitik</h1>

          <div className="prose max-w-none">
            <p>
              DK BEDSTE BETTING SIDER bruger cookies for at give dig den bedste oplevelse på vores hjemmeside. Ved
              at fortsætte med at bruge vores hjemmeside accepterer du vores brug af cookies.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Hvad er cookies?</h2>
            <p>
              Cookies er små tekstfiler, der gemmes på din computer eller mobile enhed, når du besøger en hjemmeside. De
              bruges til at huske dine præferencer og give en mere personlig oplevelse.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Hvordan bruger vi cookies?</h2>
            <p>Vi bruger cookies til følgende formål:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>For at huske dine præferencer og indstillinger</li>
              <li>For at analysere, hvordan vores hjemmeside bruges</li>
              <li>For at forbedre vores hjemmeside og tjenester</li>
              <li>For at levere relevant indhold og annoncer</li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-4">Typer af cookies</h2>
            <p>Vi bruger følgende typer af cookies:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Nødvendige cookies:</strong> Disse er nødvendige for, at hjemmesiden kan fungere korrekt.
              </li>
              <li>
                <strong>Præferencecookies:</strong> Disse husker dine præferencer og indstillinger.
              </li>
              <li>
                <strong>Statistikcookies:</strong> Disse hjælper os med at forstå, hvordan besøgende interagerer med
                hjemmesiden.
              </li>
              <li>
                <strong>Marketingcookies:</strong> Disse bruges til at spore besøgende på tværs af hjemmesider for at
                levere relevant indhold og annoncer.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-6 mb-4">Sådan administrerer du cookies</h2>
            <p>
              Du kan administrere cookies gennem dine browserindstillinger. Du kan slette eksisterende cookies og
              blokere for nye cookies. Bemærk, at hvis du blokerer cookies, kan nogle funktioner på vores hjemmeside
              muligvis ikke fungere korrekt.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Ændringer i vores cookiepolitik</h2>
            <p>
              Vi kan opdatere vores cookiepolitik fra tid til anden. Vi opfordrer dig til regelmæssigt at gennemgå denne
              side for at holde dig informeret om eventuelle ændringer.
            </p>

            <h2 className="text-2xl font-bold mt-6 mb-4">Kontakt os</h2>
            <p>Hvis du har spørgsmål om vores cookiepolitik, er du velkommen til at kontakte os.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
