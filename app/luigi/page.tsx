import Link from 'next/link';

export default function LuigiPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Luigi</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-4">
              Sono il creatore di questa calcolatrice.
              Sono un ragazzo che ama la tecnologia e la programmazione.
              Sono nato il 20 novembre 1996.
              Sono nato a Lecce.
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