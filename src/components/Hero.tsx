import { TypeWriterEffect } from "../animation/TypewriterEffect";
import { HiDownload } from 'react-icons/hi';

function Hero() {
  return (
    <section className="rounded-br-[80px] bg-gradient-to-tr from-blue-900 to-blue-950 text-white md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">
        <div className="basis-1/2">
          <h1 className="mb-6 text-center md:text-left">
            <span className="font-handwriting block text-3xl text-center md:text-left">Salve!, me chamo</span>
            <span className="font-headline text-5xl font-semibold">Adriano</span>
            <span className="font-headline text-5xl font-light text-red-400">Lino</span>
          </h1>

          <h2 className="text-2xl flex items-center gap-2 text-center md:text-left">
            <div className="h-1 w-12 rounded-full bg-red-800" />
            <TypeWriterEffect text="Desenvolvedor Front-end React. " />
          </h2>

          <p className="text-gray-400 text-center md:text-left">
            Transforme ideias em código, e o código em realidade.
          </p>

          <div className="flex items-center gap-2 justify-center md:justify-start">
            <a href="#" className="underline font-bold text-white my-6 ">Fale Comigo</a>
            <span className="italic text-gray-500">ou</span>
            <a href="#" className="button text-gray-600 hover:text-red-400 gap-2 flex">
              <HiDownload />
              Baixe meu CV
            </a>
          </div>
        </div>
        <div className="basis-1/2">
        </div>
      </div>
    </section>
  )
}

export { Hero }