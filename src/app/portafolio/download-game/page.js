import Footer from '@/app/components/Footer';
import React from 'react';

function DownloadPage() {
    return (
        <>
            <section className="">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Diviertete jugando.
                            <strong className="font-extrabold text-red-700 sm:block"> Descarga ArechiSnake </strong>
                        </h1>
                        <p className="mt-4 sm:text-xl/relaxed">
                            ArechiSnake es un juego de serpiente en el que tienes que comer la mayor cantidad de guayabas posibles, pero ten cuidado con las paredes.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto" href="/ArechiSnake.rar">
                                Descargar
                            </a>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
}

export default DownloadPage;