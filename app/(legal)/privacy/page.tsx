import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-4">
              La tua privacy è importante per noi. Questa Privacy Policy spiega come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Raccolta dei Dati</h2>
            <p className="text-gray-600 mb-4">
              La nostra calcolatrice non raccoglie alcun dato personale. Tutti i calcoli vengono eseguiti localmente sul tuo dispositivo.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Utilizzo dei Dati</h2>
            <p className="text-gray-600 mb-4">
              Non utilizziamo cookie o tecnologie di tracciamento. La tua cronologia dei calcoli viene salvata solo localmente sul tuo dispositivo.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Protezione dei Dati</h2>
            <p className="text-gray-600 mb-4">
              Implementiamo misure di sicurezza appropriate per proteggere i tuoi dati. Tuttavia, ricorda che nessun metodo di trasmissione su Internet è completamente sicuro.
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