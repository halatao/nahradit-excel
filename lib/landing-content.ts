export const quickTags = [
  "Náhrada Excelu",
  "Přehled zakázek",
  "Méně ruční práce",
  "Jasné stavy",
] as const;

export const trustCards = [
  {
    title: "Začneme vaším Excelem",
    description:
      "Nejdřív projdeme, co dnes řeší tabulky, kdo s nimi pracuje a kde vzniká nejvíc chyb nebo dohledávání.",
  },
  {
    title: "První etapa místo velkého systému",
    description:
      "Navrhnu jednoduchý první krok: evidenci poptávek, stav zakázek, návaznost na nabídky nebo provozní přehled.",
  },
  {
    title: "Prakticky bez agenturní vrstvy",
    description:
      "Jednáte přímo se mnou. Řeším proces s lidmi, kteří ho používají, bez tlaku na zbytečně velké a drahé řešení.",
  },
] as const;

export const problemItems = [
  {
    title: "Více verzí Excelu",
    description:
      "Každý má jinou kopii tabulky, data se doplňují bokem a není jasné, podle které verze se má řídit práce.",
  },
  {
    title: "Nejasný stav zakázky",
    description:
      "U poptávek, nabídek a realizací není na první pohled jasné, co čeká, co stojí a kdo má udělat další krok.",
  },
  {
    title: "Ruční přepisování",
    description:
      "Stejná data se opisují z e-mailu do Excelu, z nabídky do zakázky a potom znovu do přehledu pro tým nebo vedení.",
  },
  {
    title: "Chaos mezi kroky",
    description:
      "Poptávka, nabídka a realizace žijí odděleně. Informace se dohledávají v tabulkách, e-mailech, chatech a poznámkách.",
  },
] as const;

export const intentItems = [
  {
    title: "Evidence poptávek",
    description:
      "Nové poptávky, stav zpracování, odpovědný člověk a další krok jsou na jednom místě místo v několika tabulkách.",
  },
  {
    title: "Nabídky a schvalování",
    description:
      "Jasně vidíte, co je rozpracované, odeslané, čeká na reakci a co je potřeba připomenout.",
  },
  {
    title: "Evidence zakázek",
    description:
      "Zakázka má jasný stav od přijetí po realizaci, včetně termínů, odpovědnosti a důležitých poznámek.",
  },
  {
    title: "Návaznost poptávka -> nabídka -> realizace",
    description:
      "Data se nepřepisují mezi oddělenými soubory. Další krok navazuje na předchozí bez ztráty kontextu.",
  },
  {
    title: "Přehled pro tým i vedení",
    description:
      "Sdílený pohled ukáže, co běží, co čeká, co je po termínu a kde je potřeba zasáhnout.",
  },
  {
    title: "Méně ruční administrativy",
    description:
      "Méně dohledávání v inboxech a tabulkách, méně opisování a více práce podle jednoho aktuálního zdroje.",
  },
] as const;

export const practiceItems = [
  "Poptávky mají odpovědného člověka, stav a jasný další krok",
  "Nabídky navazují na poptávky bez hledání poslední verze v dokumentech a e-mailech",
  "Realizace vychází ze schválené nabídky a drží termíny, odpovědnosti i poznámky",
  "Tým vidí, co běží, co stojí, co je hotové a kde hrozí zpoždění",
  "Vedení má přehled bez ručního skládání reportů z několika Excelů",
] as const;

export const insightItems = [
  "Návrh jednoduchého interního systému místo přerostlého Excelu",
  "Rozdělení řešení na malou první etapu a další možné kroky",
  "Přehledná návaznost mezi poptávkou, nabídkou a realizací",
  "Méně ručního přepisování, předávání a dohledávání stavu zakázky",
  "Podle potřeby i realizace první funkční verze",
] as const;

export const situationsItems = [
  {
    title: "Výroba a zakázková činnost",
    description:
      "Poptávka přijde e-mailem, nabídka vznikne ručně a po schválení se realizace hlídá v Excelu bez jasného aktuálního stavu.",
  },
  {
    title: "Služby a realizace pro klienty",
    description:
      "Tým řeší více klientů najednou, předává si úkoly ručně a vedení potřebuje rychle vidět, co je rozpracované.",
  },
  {
    title: "Menší obchodní tým",
    description:
      "Poptávky, nabídky a follow-upy běží v e-mailu nebo osobních Excelech a chybí společný přehled.",
  },
] as const;

export const processItems = [
  {
    title: "Krátký call",
    description:
      "Ukážete mi, co dnes držíte v Excelu, kdo s tím pracuje a kde vzniká nejvíc dohledávání, přepisování nebo chyb.",
  },
  {
    title: "Návrh první etapy",
    description:
      "Navrhnu jednoduchý první krok: evidenci poptávek, přehled zakázek, návaznost na nabídky nebo menší automatizaci.",
  },
  {
    title: "Realizace, když to dává smysl",
    description:
      "Pokud si sedne rozsah i očekávání, navážu vývojem první funkční verze. Když Excel zatím stačí, řeknu to rovnou.",
  },
] as const;

export const fitItems = {
  goodFit: [
    "Excel už nestačí na poptávky, nabídky, realizace nebo předávání mezi lidmi",
    "Chcete konkrétní zlepšení, které ušetří dohledávání, přepisování a chyby",
    "Nechcete hned robustní ERP, ale potřebujete první rozumný krok k internímu systému",
    "Máte opakovaný proces, více lidí v týmu a jasnou bolest, kterou chcete řešit",
  ],
  badFit: [
    "zatím evidujete pár položek měsíčně a Excel vám reálně nekomplikuje práci",
    "hledáte hotové ERP se všemi moduly, účetnictvím a skladovým hospodářstvím hned od začátku",
    "chcete jen nejlevnější nástroj bez ochoty upravit způsob práce",
    "není jasné, kdo bude řešení ve firmě používat a kdo za něj ponese odpovědnost",
  ],
} as const;

export const faqItems = [
  {
    question: "Kdy dává smysl nahradit Excel a kdy ještě ne?",
    answer:
      "Dává to smysl ve chvíli, kdy Excel řídí opakovaný proces, pracuje s ním víc lidí a stav poptávek, nabídek nebo zakázek se často dohledává ručně. Pokud máte pár jednoduchých záznamů měsíčně a Excel nikoho nebrzdí, vlastní systém by byl zatím zbytečný.",
  },
  {
    question: "Musí z toho být velký projekt?",
    answer:
      "Nemusí. Často stačí malá první etapa: evidence poptávek, přehled zakázek, návaznost nabídek na realizace nebo jednoduchý provozní přehled. Cílem je vyřešit největší bolest v Excelu, ne přepsat celou firmu najednou.",
  },
  {
    question: "Umíte řešení i postavit?",
    answer:
      "Ano. Pomohu s návrhem i vývojem interního systému na míru. Pokud se ukáže, že je lepší hotový nástroj nebo menší automatizace, řeknu to rovnou.",
  },
  {
    question: "Co když zatím nevíme, jaké řešení přesně chceme?",
    answer:
      "To je běžné. Stačí popsat, co dnes běží v Excelu, kde vznikají chyby a kdo potřebuje přehled. Z toho se dá navrhnout první jednoduchý krok, případně rovnou říct, že zatím není potřeba nic stavět.",
  },
  {
    question: "Kolik času to bude chtít od nás?",
    answer:
      "Na začátku obvykle stačí 20-30 minut a základní popis současné evidence. U realizace je potřeba dostupnost člověka, který proces zná, ale cílem není zatížit tým další administrativou.",
  },
  {
    question: "Kolik to obvykle stojí?",
    answer:
      "Záleží na rozsahu a technickém řešení. Menší první etapa nebo prototyp bývá úplně jiná investice než kompletní interní systém. Po úvodním callu proto raději navrhnu realistický rozsah a orientační rámec, než abych posílal univerzální ceník.",
  },
] as const;
