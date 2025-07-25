import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between px-4 md:px-8">
      {/* Header */}
      <header className="w-full max-w-6xl mx-auto py-6 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          Oppdragsportalen
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex md:items-center space-x-6 text-sm">
          <a href="#features" className="hover:text-gray-600">
            Funksjoner
          </a>
          <a href="#pricing" className="hover:text-gray-600">
            Priser
          </a>
          <a href="#contact" className="hover:text-gray-600">
            Kontakt
          </a>
          <a
            href="/login"
            className="ml-4 px-4 py-1 border border-gray-900 rounded hover:bg-black hover:text-white transition"
          >
            Logg inn
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </header>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 pb-6 text-gray-700 text-base">
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Funksjoner
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Priser
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Kontakt
          </a>
          <a
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-1 border border-gray-700 rounded hover:bg-black hover:text-white transition"
          >
            Logg inn
          </a>
        </nav>
      )}

      {/* Hero */}
      <main className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-6 mt-12 px-2 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
          Planlegg uken. Få kontroll på oppdragene.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          En enkel og effektiv tjeneste for alle som gjør oppdrag for andre.
          Hold styr på møter, huskelister, befaringer og oppgaver – alt på ett
          sted.
        </p>
        <a
          href="/signup"
          className="bg-black text-white px-6 py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition"
        >
          Kom i gang gratis
        </a>
        <p className="text-sm text-gray-500">
          Allerede kunde?{" "}
          <a href="/login" className="underline hover:text-black">
            Logg inn her
          </a>
        </p>
      </main>

      {/* Features */}
      <section
        id="features"
        className="max-w-6xl mx-auto px-6 py-24 space-y-16"
      >
        <h3 className="text-3xl font-bold text-center">Funksjoner</h3>
        <div className="grid gap-10 md:grid-cols-3 text-center">
          <div>
            <h4 className="text-xl font-semibold mb-2">Ukentlig planlegging</h4>
            <p className="text-gray-400">
              Få oversikt over avtaler, oppgaver og kundebesøk.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Kundeoppfølging</h4>
            <p className="text-gray-400">
              Se hvem du skal møte, hvor – og hva du må huske.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Konverteringsanalyse</h4>
            <p className="text-gray-400">
              Se hvilke gratis befaringer som blir betalende oppdrag.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Teamoversikt</h4>
            <p className="text-gray-400">
              Se hvem på laget som har vært hos hvilke kunder, og når.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Historikk</h4>
            <p className="text-gray-400">
              Få oversikt over alle tidligere oppdrag og kundebesøk.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Mobilvennlig</h4>
            <p className="text-gray-400">
              Designet for både PC og mobil – alltid tilgjengelig.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-900 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h3 className="text-3xl font-bold text-white">Priser</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-700 rounded-lg p-8 text-white">
              <h4 className="text-xl font-semibold mb-4">Gratis</h4>
              <p className="text-gray-400 mb-6">
                For deg som gjør små oppdrag og trenger enkel oversikt.
              </p>
              <ul className="space-y-2 text-left text-sm text-gray-300">
                <li>✔️ Planlegg 1 uke frem</li>
                <li>✔️ Opptil 5 kunder</li>
                <li>✔️ Mobilvennlig tilgang</li>
              </ul>
            </div>
            <div className="border border-gray-700 rounded-lg p-8 bg-white text-black">
              <h4 className="text-xl font-semibold mb-4">Pro – 79 kr/mnd</h4>
              <p className="text-gray-700 mb-6">
                For deg som driver for deg selv og vil ha full kontroll.
              </p>
              <ul className="space-y-2 text-left text-sm">
                <li>✔️ Ubegrenset planlegging</li>
                <li>✔️ Ubegrenset kunder</li>
                <li>✔️ Varslinger og påminnelser</li>
                <li>✔️ Egendefinerte huskelister</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt/Footer */}
      <footer
        id="contact"
        className="bg-[#1a1a1a] py-16 text-center text-gray-400 text-sm"
      >
        <p className="mb-4">
          Spørsmål? Kontakt oss på{" "}
          <a
            href="mailto:kontakt@oppdragsportalen.no"
            className="underline hover:text-white"
          >
            kontakt@oppdragsportalen.no
          </a>
        </p>
        <p>© 2025 Oppdragsportalen. Alle rettigheter reservert.</p>
      </footer>
    </div>
  );
}

export default App;
