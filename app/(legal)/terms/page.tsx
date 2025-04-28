import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Termini e Condizioni</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-4">
              Utilizzando la nostra calcolatrice, accetti i seguenti termini e condizioni.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Utilizzo del Servizio</h2>
            <p className="text-gray-600 mb-4">
              La calcolatrice è fornita "così com'è" e non garantiamo che sarà sempre disponibile o priva di errori.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Limitazione di Responsabilità</h2>
            <p className="text-gray-600 mb-4">
              Non siamo responsabili per eventuali danni derivanti dall'uso della calcolatrice. L'utente è responsabile di verificare i risultati dei calcoli.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Proprietà Intellettuale</h2>
            <p className="text-gray-600 mb-4">
              Tutti i diritti di proprietà intellettuale relativi alla calcolatrice sono di nostra proprietà.
            </p>

            <div className="mt-8">
              <Link 
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Torna alla Calcolatrice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 