"use client";

import { useState } from "react";

export default function Homepage() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [newNumber, setNewNumber] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const handleNumber = (num: string) => {
    if (display === "0" || newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperation = (op: string) => {
    setFirstNumber(display);
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(display);
    let result = 0;
    let opSymbol = operation;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "×":
        result = num1 * num2;
        break;
      case "÷":
        result = num1 / num2;
        break;
      default:
        opSymbol = "";
    }
    setDisplay(result.toString());
    setNewNumber(true);
    if (opSymbol) {
      setHistory([`${firstNumber} ${opSymbol} ${display} = ${result}`,...history]);
    }
    setOperation("");
    setFirstNumber("");
  };

  const clear = () => {
    setDisplay("0");
    setFirstNumber("");
    setOperation("");
    setNewNumber(false);
  };

  const operatorButtons = [
    { symbol: "÷" },
    { symbol: "×" },
    { symbol: "-" },
    { symbol: "+" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-8">
      <div className="flex gap-8">
        {/* Calcolatrice */}
        <div className="w-80 bg-black rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300 flex flex-col">
          <div className="h-32 flex items-end justify-end mb-4">
            <h1 className="text-5xl font-light text-white text-right w-full overflow-hidden">
              {firstNumber && operation ? `${firstNumber} ${operation}` : ""}
              <br />
              {display}
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {/* Prima riga */}
            <button onClick={clear} className="col-span-3 h-16 rounded-full bg-gray-500 text-white text-xl hover:bg-gray-600 transition-colors">
              AC
            </button>
            <button
              onClick={() => handleOperation(operatorButtons[0].symbol)}
              className={`h-16 rounded-full text-white text-xl transition-colors ${operation === operatorButtons[0].symbol ? "bg-orange-400" : "bg-orange-500 hover:bg-orange-600"}`}
            >
              {operatorButtons[0].symbol}
            </button>
            {/* Seconda riga */}
            {[7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="h-16 rounded-full bg-gray-700 text-white text-xl hover:bg-gray-600 transition-colors"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleOperation(operatorButtons[1].symbol)}
              className={`h-16 rounded-full text-white text-xl transition-colors ${operation === operatorButtons[1].symbol ? "bg-orange-400" : "bg-orange-500 hover:bg-orange-600"}`}
            >
              {operatorButtons[1].symbol}
            </button>
            {/* Terza riga */}
            {[4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="h-16 rounded-full bg-gray-700 text-white text-xl hover:bg-gray-600 transition-colors"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleOperation(operatorButtons[2].symbol)}
              className={`h-16 rounded-full text-white text-xl transition-colors ${operation === operatorButtons[2].symbol ? "bg-orange-400" : "bg-orange-500 hover:bg-orange-600"}`}
            >
              {operatorButtons[2].symbol}
            </button>
            {/* Quarta riga */}
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="h-16 rounded-full bg-gray-700 text-white text-xl hover:bg-gray-600 transition-colors"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleOperation(operatorButtons[3].symbol)}
              className={`h-16 rounded-full text-white text-xl transition-colors ${operation === operatorButtons[3].symbol ? "bg-orange-400" : "bg-orange-500 hover:bg-orange-600"}`}
            >
              {operatorButtons[3].symbol}
            </button>
            {/* Quinta riga */}
            <button
              onClick={() => handleNumber("0")}
              className="col-span-2 h-16 rounded-full bg-gray-700 text-white text-xl hover:bg-gray-600 transition-colors"
            >
              0
            </button>
            <button
              onClick={() => handleNumber(".")}
              className="h-16 rounded-full bg-gray-700 text-white text-xl hover:bg-gray-600 transition-colors"
            >
              .
            </button>
            <button
              onClick={calculate}
              className="h-16 rounded-full bg-orange-500 text-white text-xl hover:bg-orange-600 transition-colors col-span-1"
            >
              =
            </button>
          </div>
        </div>
        {/* Cronologia */}
        <div className="w-72 bg-black/80 rounded-3xl shadow-2xl p-6 flex flex-col">
          <h2 className="text-xl font-bold text-white mb-4 text-center">Cronologia</h2>
          <div className="flex-1 overflow-y-auto space-y-2">
            {history.length === 0 ? (
              <p className="text-gray-400 text-center">Nessuna operazione</p>
            ) : (
              history.map((item, idx) => (
                <div key={idx} className="text-white bg-gray-800 rounded-lg px-3 py-2 text-sm">
                  {item}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
