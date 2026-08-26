'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, ChevronDown, Mail, Menu, Phone, ShieldCheck, X } from 'lucide-react'

const toc = [
  ['Waarom werkt mijn e-mail niet?', 'waarom'],
  ['Kan niet inloggen op mijn e-mail', 'inloggen'],
  ['E-mails komen niet binnen', 'ontvangen'],
  ['Ik kan geen e-mail versturen', 'versturen'],
  ['E-mail werkt niet op telefoon', 'telefoon'],
  ['E-mail werkt niet op computer', 'computer'],
  ['E-mail wachtwoord vergeten', 'wachtwoord'],
  ['E-mail foutmelding oplossen', 'foutmelding'],
  ['Wanneer moet ik contact opnemen met de Helpdesk?', 'helpdesk'],
  ['Veilig gebruik van E-mail Ondersteuning', 'veiligheid'],
  ['Veelgestelde vragen over E-mail Problemen', 'faq'],
]

const faqs = [
  ['Waarom werkt mijn e-mail vandaag niet?', 'Dit kan komen door een internetprobleem, storing, verkeerd wachtwoord, volle mailbox of een probleem met de e-mailapp. Controleer eerst uw verbinding en probeer opnieuw in te loggen.'],
  ['Wat moet ik doen als ik mijn e-mailwachtwoord vergeten ben?', 'Gebruik de officiële functie voor wachtwoordherstel van uw e-mailprovider. Deel uw herstelcode nooit met onbekende personen.'],
  ['Waarom ontvang ik geen e-mails?', 'Controleer de Spam-map, beschikbare opslagruimte, internetverbinding en instellingen van uw account. Vraag indien nodig officiële Hulp of Ondersteuning.'],
  ['Waarom kan ik geen e-mails versturen?', 'Controleer uw internetverbinding, het e-mailadres van de ontvanger en eventuele grote bijlagen. Test ook of een korte e-mail zonder bijlage wel wordt verzonden.'],
  ['Hoe vind ik het juiste Telefoonnummer van de Klantenservice?', 'Zoek het officiële Telefoonnummer via de officiële website of app van uw e-mailprovider. Gebruik niet zomaar een Nummer van een onbekende website.'],
  ['Kan de Helpdesk mijn wachtwoord zien?', 'Een betrouwbare officiële Helpdesk hoort niet om uw volledige wachtwoord of persoonlijke verificatiecode te vragen. Gebruik alleen veilige herstelmethoden.'],
  ['Mijn e-mail werkt niet op mijn telefoon. Wat kan ik doen?', 'Controleer WiFi of mobiele data, update de app, start uw telefoon opnieuw op en controleer of uw account via de officiële website werkt.'],
]

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-32 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all md:p-12">
      <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
      <div className="mt-6 max-w-3xl space-y-6 text-[17px] leading-8 text-slate-600">{children}</div>
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-slate-50">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blue-600" aria-hidden="true" />
          <span className="text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-slate-50/50 text-slate-900 selection:bg-blue-600 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3 group" aria-label="E-mail Hulp Nederland home">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25 transition-transform group-hover:scale-105">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            <span className="text-base font-bold tracking-tight text-slate-900">E-mail Hulp Nederland</span>
          </a>
          
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#oplossingen" className="transition-colors hover:text-blue-600">Oplossingen</a>
            <a href="#veiligheid" className="transition-colors hover:text-blue-600">Veiligheid</a>
            <a href="#faq" className="transition-colors hover:text-blue-600">Veelgestelde vragen</a>
          </nav>

          {/* 1st Place: Top Header Button */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://helpdeskbellennummer.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone size={15} />
              <span>+31-20-225-4839</span>
            </a>
          </div>

          <button className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu openen" aria-expanded={menuOpen}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-3 border-t border-slate-200 bg-white px-5 py-6 text-sm font-semibold text-slate-700 md:hidden shadow-lg animate-in slide-in-from-top duration-200">
            <a href="https://helpdeskbellennummer.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-white shadow-md">
              <Phone size={16} /> +31-20-225-4839
            </a>
            <a href="#oplossingen" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50">Oplossingen</a>
            <a href="#veiligheid" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50">Veiligheid</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-50">Veelgestelde vragen</a>
          </nav>
        )}
      </header>

      <div id="top" className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-950 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-blue-300 backdrop-blur-md mb-8">
              <span className="size-2 rounded-full bg-blue-400 animate-pulse" /> Onafhankelijke hulp en ondersteuning
            </div>
            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              E-mail Werkt Niet?<br />
              <span className="text-blue-300 font-semibold text-3xl md:text-5xl mt-2 block">E-mail Hulp, Helpdesk en Ondersteuning in Nederland</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
              Werkt uw e-mail niet? Lees oplossingen voor e-mailproblemen, inloggen, wachtwoorden en berichten ontvangen met handige hulp en ondersteuning in Nederland.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#oplossingen" className="inline-flex items-center gap-2.5 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-2xl hover:-translate-y-0.5">
                Bekijk oplossingen <ArrowRight className="size-4" />
              </a>
              {/* 2nd Place: Hero Section CTA Button */}
              <a href="https://helpdeskbellennummer.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:-translate-y-0.5">
                <Phone className="size-4 text-blue-400" /> +31-20-225-4839
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="oplossingen" className="mx-auto grid max-w-7xl gap-12 px-5 py-12 md:grid-cols-[280px_1fr] md:px-8 md:py-20">
        <aside className="hidden md:block">
          <div className="sticky top-32 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-600">Op deze pagina</p>
            <nav className="space-y-2 border-l border-slate-100 pl-4 text-sm font-medium text-slate-600">
              {toc.map(([label, id]) => (
                <a key={id} href={`#${id}`} className="block py-1.5 transition-colors hover:text-blue-600 hover:font-semibold">{label}</a>
              ))}
            </nav>
          </div>
        </aside>

        <article className="space-y-12">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm md:p-12">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-blue-600 mb-3 bg-blue-50 px-3 py-1 rounded-full">Praktische gids</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">E-mail werkt niet? Veelvoorkomende problemen en oplossingen</h2>
            <p className="mt-6 text-[17px] leading-8 text-slate-600">
              E-mail is voor veel mensen belangrijk voor werk, school, online accounts en contact met familie en vrienden. Daarom kan het erg vervelend zijn wanneer uw e-mail niet werkt. Misschien kunt u niet inloggen, ontvangt u geen nieuwe berichten of lukt het niet om een e-mail te verzenden. Soms verschijnt er ook een foutmelding.
            </p>
            <p className="mt-5 text-[17px] leading-8 text-slate-600">
              In dit artikel leest u meer over veelvoorkomende e-mailproblemen, mogelijke oorzaken en eenvoudige oplossingen. U vindt ook informatie over Helpdesk, Klantenservice, Telefoonnummer, Hulp, Nummer en Ondersteuning in Nederland.
            </p>
          </div>

          <Section id="waarom" title="Waarom werkt mijn e-mail niet?">
            <p>Er kunnen verschillende redenen zijn waarom een e-mailaccount problemen geeft. Een veelvoorkomend probleem is een onjuist wachtwoord. Het is ook mogelijk dat de internetverbinding niet goed werkt.</p>
            <p>Andere mogelijke oorzaken zijn:</p>
            <BulletList items={[
              'Onjuist e-mailadres of wachtwoord',
              'Problemen met de internetverbinding',
              'Volle mailbox of onvoldoende opslagruimte',
              'Verouderde e-mailapp',
              'Problemen met browser, cookies of cache',
              'Onjuiste serverinstellingen',
              'Tijdelijke storing bij de e-maildienst',
              'Beveiligingscontrole van uw account'
            ]} />
            <p>Wanneer u niet zeker weet wat het probleem veroorzaakt, kunt u stap voor stap controleren waar de fout zit.</p>
          </Section>

          <Section id="inloggen" title="Kan niet inloggen op mijn e-mail">
            <p>Een van de meest voorkomende problemen is dat gebruikers niet kunnen inloggen. Controleer eerst of u het juiste e-mailadres invoert. Let ook goed op hoofdletters, cijfers en speciale tekens in uw wachtwoord.</p>
            <p>Wanneer u uw wachtwoord bent vergeten, gebruik dan alleen de officiële optie voor wachtwoordherstel van uw e-mailprovider. Deel uw wachtwoord of verificatiecodes nooit met onbekende personen.</p>
            {/* 3rd Place: Login Section Highlighted Link */}
            <p>
              Als het probleem blijft bestaan, kunt u contact opnemen met de officiële Klantenservice of Helpdesk van uw e-mailprovider voor veilige Hulp en <a href="https://helpdeskbellennummer.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 underline">Ondersteuning</a>.
            </p>
          </Section>

          <Section id="ontvangen" title="E-mails komen niet binnen">
            <p>Ontvangt u geen nieuwe e-mails? Controleer dan eerst uw internetverbinding. Open daarna uw inbox opnieuw en kijk ook in de map Spam, Ongewenste e-mail of Prullenbak.</p>
            <p>Soms worden belangrijke berichten per ongeluk gefilterd. Controleer daarom ook uw e-mailregels en instellingen.</p>
            <p>Controleer daarnaast of uw mailbox voldoende vrije ruimte heeft. Wanneer de opslagruimte vol is, kunnen nieuwe berichten mogelijk niet correct worden ontvangen.</p>
            <p>Dit probleem kan vaak worden opgelost door:</p>
            <ol className="grid gap-3.5 list-none pl-0">
              {[
                'Spam en ongewenste berichten te controleren.',
                'Oude e-mails en grote bijlagen te verwijderen.',
                'De internetverbinding opnieuw te starten.',
                'De e-mailapp te sluiten en opnieuw te openen.',
                'De browsercache en cookies te wissen.',
                'Opnieuw in te loggen op uw account.'
              ].map((step, idx) => (
                <li key={step} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-xs font-bold text-white">{idx + 1}</span>
                  <span className="text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
            <p>Voor aanvullende E-mail Hulp Nederland kunt u de officiële ondersteuningspagina van uw provider gebruiken.</p>
          </Section>

          <Section id="versturen" title="Ik kan geen e-mail versturen">
            <p>Soms kunt u wel e-mails ontvangen, maar niet verzenden. Dit kan gebeuren door een slechte internetverbinding, een probleem met de uitgaande server of een grote bijlage.</p>
            <p>Probeer eerst een korte testmail zonder bijlage te versturen. Werkt dit wel? Dan kan de grootte of het bestandstype van de bijlage het probleem veroorzaken.</p>
            <p>Controleer ook of het e-mailadres van de ontvanger correct is geschreven. Een kleine fout in het adres kan ervoor zorgen dat het bericht niet wordt bezorgd.</p>
            <p>Blijft het probleem bestaan, controleer dan de officiële instellingen of vraag technische Ondersteuning aan bij de betreffende e-maildienst.</p>
          </Section>

          <Section id="telefoon" title="E-mail werkt niet op telefoon">
            <p>Veel gebruikers ervaren problemen met e-mail op een smartphone of tablet. De e-mailapp kan bijvoorbeeld geen verbinding maken met de server of steeds om een wachtwoord vragen.</p>
            <p>Probeer de volgende stappen:</p>
            <BulletList items={[
              'Controleer of WiFi of mobiele data werkt.',
              'Start de telefoon opnieuw op.',
              'Update de e-mailapp.',
              'Controleer de datum en tijd van het apparaat.',
              'Verwijder en voeg het e-mailaccount opnieuw toe, als dat veilig en nodig is.',
              'Controleer of het account via de officiële website wel werkt.'
            ]} />
            <p>Als uw account online wel werkt, maar niet in de app, ligt het probleem mogelijk bij de app of apparaatinstellingen.</p>
          </Section>

          <Section id="computer" title="E-mail werkt niet op computer">
            <p>Wanneer uw e-mail op een computer niet goed werkt, kan het probleem worden veroorzaakt door de browser. Oude cookies, cachebestanden of browserextensies kunnen soms storingen veroorzaken.</p>
            <p>Probeer daarom:</p>
            <BulletList items={[
              'Een andere browser.',
              'Een privévenster.',
              'Cookies en cache verwijderen.',
              'Browserextensies tijdelijk uitschakelen.',
              'De browser opnieuw starten.',
              'Uw computer opnieuw opstarten.'
            ]} />
            <p>Controleer daarna opnieuw of u kunt inloggen en berichten kunt verzenden of ontvangen.</p>
          </Section>

          <Section id="wachtwoord" title="E-mail wachtwoord vergeten">
            <p>Bent u uw e-mailwachtwoord vergeten? Gebruik dan de officiële pagina voor wachtwoordherstel. Meestal moet u uw identiteit bevestigen via een herstelmethode die eerder aan uw account is gekoppeld.</p>
            <p>Maak na herstel een sterk wachtwoord. Gebruik bij voorkeur een unieke combinatie die u niet voor andere accounts gebruikt. Schakel ook tweestapsverificatie in wanneer deze beschikbaar is.</p>
            <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-50/50 p-6 text-slate-700">
              <strong>Let op:</strong> een echte Klantenservice zal normaal gesproken niet zomaar vragen om uw volledige wachtwoord. Geef nooit uw wachtwoord, herstelcode of beveiligingscode aan onbekende personen.
            </div>
          </Section>

          <Section id="foutmelding" title="E-mail foutmelding oplossen">
            <p>Een foutmelding kan verschillende oorzaken hebben. Lees de melding zorgvuldig voordat u actie onderneemt. Noteer eventueel de foutcode en zoek deze op via de officiële documentatie van uw e-mailprovider.</p>
            <p>Veel voorkomende meldingen hebben te maken met:</p>
            <BulletList items={[
              'Onjuiste inloggegevens',
              'Geen internetverbinding',
              'Serverproblemen',
              'Onvoldoende opslagruimte',
              'Onjuiste beveiligingsinstellingen',
              'Problemen met synchronisatie'
            ]} />
            <p>Door de exacte foutmelding te controleren, kunt u gerichter Hulp en Ondersteuning vinden.</p>
          </Section>

          <Section id="helpdesk" title="Wanneer moet ik contact opnemen met de Helpdesk?">
            <p>U kunt contact opnemen met de officiële Helpdesk of Klantenservice wanneer eenvoudige oplossingen niet werken. Dit is vooral belangrijk wanneer u denkt dat uw account is geblokkeerd, gehackt of zonder uw toestemming is gewijzigd.</p>
            <p>Zoek het officiële Telefoonnummer of contactkanaal altijd via de website of app van uw eigen e-mailprovider. Controleer goed of u werkelijk met de juiste organisatie contact opneemt.</p>
            <p>Gebruik geen willekeurig Nummer dat u in een advertentie, onbekende website of pop-up ziet. Dit helpt u om fraude en ongewenste toegang tot uw account te voorkomen.</p>
          </Section>

          <Section id="veiligheid" title="Veilig gebruik van E-mail Ondersteuning">
            <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-indigo-50/30 p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-blue-600 p-3 text-white shadow-md">
                  <ShieldCheck className="size-6 shrink-0" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Bescherm uw gegevens</h3>
                  <p className="mt-2 text-slate-600">Wanneer u online zoekt naar E-mail Helpdesk Nederland, Klantenservice E-mail, E-mail Telefoonnummer, E-mail Hulp of Technische Ondersteuning, kunnen veel verschillende websites verschijnen.</p>
                </div>
              </div>
              <p className="mt-6 font-semibold text-slate-800">Voor uw veiligheid is het verstandig om:</p>
              <div className="mt-4">
                <BulletList items={[
                  'Alleen officiële websites te gebruiken.',
                  'Geen wachtwoorden telefonisch door te geven.',
                  'Geen verificatiecodes met onbekenden te delen.',
                  'Geen onbekende software te installeren.',
                  'Geen externe persoon zomaar toegang tot uw computer te geven.',
                  'Het officiële contactnummer van de provider te controleren.'
                ]} />
              </div>
              <p className="mt-6 text-slate-600">Legitieme ondersteuning kan u helpen met technische problemen, maar uw persoonlijke beveiligingsgegevens moeten beschermd blijven.</p>
            </div>
          </Section>

          <Section id="faq" title="Veelgestelde vragen over E-mail Problemen">
            <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {faqs.map(([question, answer], index) => (
                <div key={question} className="transition-colors hover:bg-slate-50/50">
                  <button
                    className="flex w-full items-center justify-between gap-5 p-6 text-left font-semibold text-slate-900"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span>{index + 1}. {question}</span>
                    <ChevronDown className={`size-5 shrink-0 text-blue-600 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-base leading-7 text-slate-600 animate-in slide-in-from-top-2 duration-200">
                      {answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>

          <Section id="conclusie" title="Conclusie">
            <p>Wanneer uw e-mail niet werkt, hoeft het probleem niet altijd ernstig te zijn. In veel gevallen kan een controle van uw internetverbinding, wachtwoord, browser, app of opslagruimte het probleem oplossen.</p>
            {/* Conclusion Section Link */}
            <p>
              Heeft u nog steeds problemen met inloggen, e-mails ontvangen of berichten versturen? <a href="https://helpdeskbellennummer.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 underline">Neem direct contact op via onze hulppagina</a> of zoek naar de officiële Helpdesk, Klantenservice en Ondersteuning in Nederland van uw specifieke e-mailprovider.
            </p>
            <p>Gebruik altijd officiële contactkanalen en bescherm uw wachtwoord, verificatiecodes en persoonlijke gegevens. Zo kunt u uw e-mailprobleem zo veilig mogelijk oplossen.</p>
          </Section>
        </article>
      </div>

      <footer className="border-t border-slate-200 bg-white text-slate-600">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Mail className="size-4" />
            </span>
            <span className="font-bold text-slate-900">E-mail Hulp Nederland</span>
          </div>
          <span className="text-sm">Veilige, praktische informatie over e-mailproblemen.</span>
        </div>
      </footer>
    </main>
  )
}