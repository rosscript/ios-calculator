import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Chi Siamo</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-4">
              Benvenuti nella nostra Calcolatrice iOS! Questa applicazione è stata creata utilizzando
              le tecnologie più moderne del web, tra cui Next.js, React e Tailwind CSS.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Caratteristiche Principali</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Design ispirato alla calcolatrice iOS</li>
              <li>Interfaccia utente reattiva e moderna</li>
              <li>Supporto per operazioni matematiche di base</li>
              <li>Animazioni fluide e feedback tattile</li>
            </ul>

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