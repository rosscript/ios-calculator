'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Copyright */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Copyright</h3>
            <p className="text-gray-400">
              © {currentYear} Calcolatrice iOS. Tutti i diritti riservati.
            </p>
          </div>

          {/* Creato da */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Creato da</h3>
            <p className="text-gray-400">
              Sviluppato con ❤️ da Luigi
            </p>
          </div>

          {/* Link utili */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link utili</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/privacy" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Termini e Condizioni
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Separatore */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-gray-400 text-sm">
            Questa applicazione è stata creata utilizzando Next.js, React e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
} 