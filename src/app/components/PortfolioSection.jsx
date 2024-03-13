import React from "react";

function PortfolioSection() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden  ">
      <div className="min-h-28 ">
        <div className="bg-[#121212] w-full ">
          <h2 className="font-bold text-center font-semibold text-6xl text-white font-display">
            Portafolio Segundo Parcial
          </h2>
          <p className="text-center mt-4 font-medium text-red-500">
            Los Inkreivles
          </p>
        </div>
        <div className="max-w-screen-lg mx-auto py-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4 wrap gap-6 mt-10">
            <div className="bg-black/25 transition hover:bg-black/60  shadow rounded-lg overflow-hidden">
              <img
                src="/arechisnake.png"
                className="object-cover h-40 w-full"
                alt
              />
              <div className="p-6">
                <span className="block text-red-400 font-semibold text-sm">
                  por Octavio Guerrero
                </span>
                <h3 className="mt-3 font-bold text-lg hover:underline text-white pb-4 border-b border-slate-300">
                  <a href="/portafolio/download-game">ArechiSnake</a>
                </h3>
              </div>
            </div>
            <div className="bg-black/25 transition hover:bg-black/60  shadow rounded-lg overflow-hidden">
              <img
                src="/marco tetris.jpg"
                className="object-cover h-40 w-full"
                alt
              />
              <div className="p-6">
                <span className="block text-red-400 font-semibold text-sm">
                  por Marco Avila
                </span>
                <h3 className="mt-3 font-bold text-lg hover:underline text-white pb-4 border-b border-slate-300">
                  <a href="/portafolio/download-game">Tetris</a>
                </h3>
              </div>
            </div>
            <div className="bg-black/25 transition hover:bg-black/60  shadow rounded-lg overflow-hidden">
              <img
                src="/emonuel.jpg"
                className="object-cover h-40 w-full"
                alt
              />
              <div className="p-6">
                <span className="block text-red-400 font-semibold text-sm">
                  por Emmanuel Vargas
                </span>
                <h3 className="mt-3 font-bold text-lg hover:underline text-white pb-4 border-b border-slate-300">
                  <a href="/portafolio/download-game">Pong</a>
                </h3>
              </div>
            </div>
            <div className="bg-black/25 transition hover:bg-black/60  shadow rounded-lg overflow-hidden">
              <img src="/chuy.jpg" className="object-cover h-40 w-full" alt />
              <div className="p-6">
                <span className="block text-red-400 font-semibold text-sm">
                  por Jesus Rivera
                </span>
                <h3 className="mt-3 font-bold text-lg hover:underline text-white pb-4 border-b border-slate-300">
                  <a href="/portafolio/download-game">Laberinto</a>
                </h3>
              </div>
            </div>
            <div className="bg-black/25 transition hover:bg-black/60  shadow rounded-lg overflow-hidden">
              <img src="/jael.png" className="object-cover h-40 w-full" alt />
              <div className="p-6">
                <span className="block text-red-400 font-semibold text-sm">
                  por Jael Uriarte
                </span>
                <h3 className="mt-3 font-bold text-lg hover:underline text-white pb-4 border-b border-slate-300">
                  <a href="/portafolio/download-game">Flappy Bird</a>
                </h3>
              </div>
            </div>
            <div className="bg-black/25 transition hover:bg-black/60  shadow rounded-lg overflow-hidden">
              <img
                src="/buscaminas.jpg"
                className="object-cover h-40 w-full"
                alt
              />
              <div className="p-6">
                <span className="block text-red-400 font-semibold text-sm">
                  por Nayeli Fing
                </span>
                <h3 className="mt-3 font-bold text-lg hover:underline text-white pb-4 border-b border-slate-300">
                  <a href="/portafolio/download-game">BuscaMinas</a>
                </h3>
              </div>
            </div>
            <div className="bg-black/25 transition hover:bg-black/60  shadow rounded-lg overflow-hidden">
              <img src="/pipi.jpg" className="object-cover h-40 w-full" alt />
              <div className="p-6">
                <span className="block text-red-400 font-semibold text-sm">
                  por Victoria Alvarado
                </span>
                <h3 className="mt-3 font-bold text-lg hover:underline text-white pb-4 border-b border-slate-300">
                  <a href="/portafolio/download-game">Piedra Papel o Tijeras</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
