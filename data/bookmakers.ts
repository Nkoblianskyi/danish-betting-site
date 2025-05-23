export interface Bookmaker {
  id: string
  name: string
  url: string
  bonus: string
  rating: number
  label: string
  terms: string
  logo: string
}

export const bookmakers: Bookmaker[] = [
  {
    id: "betinia",
    name: "Betinia",
    url: "https://betinia.dk/dk/sport",
    bonus: "100% Bonus Op Til 1000 Kr",
    rating: 9.9,
    label: "TOP MÆRKE",
    terms: "Min. 18 år | Kun nye spillere | Min. indbetaling 100 kr...",
    logo: "/betinia.png",
  },
  {
    id: "campobet",
    name: "Campobet",
    url: "https://campobet.dk/dk/sport",
    bonus: "100% Bonus Op Til 1000 Kr",
    rating: 9.8,
    label: "EKSKLUSIVT TILBUD",
    terms: "Min. 18 år | Kun nye spillere | Min. indbetaling 100 kr...",
    logo: "/campo.webp",
  },
  // {
  //   id: "getlucky",
  //   name: "GetLucky",
  //   url: "https://getlucky.dk",
  //   bonus: "Få Et 100 Kr Free Bet",
  //   rating: 9.9,
  //   label: "NYT MÆRKE",
  //   terms: "18+ | Kun nye kunder | Spil for 100 kr. til odds 1.8...",
  //   logo: "/images/logos/getlucky.png",
  // },
  // {
  //   id: "expekt",
  //   name: "Expekt",
  //   url: "https://expekt.dk",
  //   bonus: "Og Få 500 Kr I Freebet",
  //   rating: 9.8,
  //   label: "BEDSTE TILBUD",
  //   terms:
  //     "18+ | Regler og vilkår gælder. Spil ansvarligt. Udeluk/Beskyt via ROFUS hos Spillemyndigheden. Hjælpelinje på StopSpillet.dk. Kun for nye spillere...",
  //   logo: "/images/logos/expekt.png",
  // },
  // {
  //   id: "comeon",
  //   name: "ComeOn!",
  //   url: "https://comeon.dk",
  //   bonus: "100% Bonus Op Til 1000 Kr.",
  //   rating: 9.8,
  //   label: "",
  //   terms: "18+ | KUN FOR NYE KUNDER | VILKÅR GÆLDER | SPIL ANSVARLIGT | STOPSPILLET | ROFUS",
  //   logo: "/images/logos/comeon.png",
  // },
]

export const getTopBookmakers = (count = 3): Bookmaker[] => {
  return [...bookmakers].sort((a, b) => b.rating - a.rating).slice(0, count)
}

export const getCurrentDate = (): string => {
  const date = new Date()
  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }
  return date.toLocaleDateString("da-DK", options)
}

export interface Match {
  id: string
  homeTeam: string
  awayTeam: string
  date: string
  time: string
}

export const upcomingMatches: Match[] = [
  {
    id: "match1",
    homeTeam: "FC Nordsjælland",
    awayTeam: "AGF",
    date: "16 May",
    time: "7:00 pm",
  },
  {
    id: "match2",
    homeTeam: "Aab",
    awayTeam: "Silkeborg",
    date: "18 May",
    time: "2:00 pm",
  },
  {
    id: "match3",
    homeTeam: "Viborg",
    awayTeam: "Vejle",
    date: "18 May",
    time: "2:00 pm",
  },
  {
    id: "match4",
    homeTeam: "Sønderjyske",
    awayTeam: "Lyngby",
    date: "18 May",
    time: "4:00 pm",
  },
  {
    id: "match5",
    homeTeam: "Randers FC",
    awayTeam: "FC København",
    date: "18 May",
    time: "6:00 pm",
  },
]
