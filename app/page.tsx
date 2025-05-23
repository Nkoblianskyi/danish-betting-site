import { Header } from "@/components/header"
import { TopBonusesModal } from "@/components/top-bonuses-modal"
import { MatchList } from "@/components/match-list"
import { RatingCriteria } from "@/components/rating-criteria"
import { BookmakerTable } from "@/components/bookmaker-table"
import { ResponsibleGambling } from "@/components/responsible-gambling"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main>
      <Header />
      <TopBonusesModal />
      <MatchList />
      <BookmakerTable />
      <RatingCriteria />
      <ResponsibleGambling />
      <Footer />
      <CookieBanner />
    </main>
  )
}
