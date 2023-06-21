import code from '../public/code.png/';
import design from '../public/design.png/';
import consulting from '../public/consulting.png/';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import {Montserrat} from 'next/font/google';
import Image from 'next/image'
import devig from 'public/devigor.png';
import dtmoney from 'public/dtMoney.png';
import todo from 'public/toDoList.png';
import timer from 'public/timer.png';
import design_system from 'public/design_system.png';
import shop_model from 'public/shop_model.png';
import example_feed from 'public/example_feed.png';
import {useState} from 'react';

const montserrat = Montserrat({subsets: ['latin'], weight: ['400', '700', '800']});

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (<div className={darkMode ? "dark" : ""}>
    <main className={"bg-white px-10 md:px-20 lg:px-20 dark:bg-gray-900"}>
      {/* Header */}
      <section className={"min-h-screen"}>
        <header>
          <nav className={"py-10 mb-12 flex justify-between"}>
            <h1 className={`${montserrat.className} text-xl dark:text-white`}>Igor Paprocki</h1>
            <ul className={"flex items-center"}>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}
                                     className={"cursor-pointer text-2xl dark:text-white"}/>
              </li>
              <li>
                <a className={"bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"}
                   href={"#Portfolio"}>Portfólio</a>
              </li>
            </ul>
          </nav>
        </header>

        <div className={"text-center p-10"}>
          <h2 className={`${montserrat.className} text-5xl py-2 -text--blue-100 font-medium md:text-6xl`}>Igor
            Paprocki</h2>
          <h3 className={`${montserrat.className}text-2xl py-2 md:text-3xl dark:text-white`}>Software Developer</h3>
          <p className={`${montserrat.className} text-base py-5 leading-8 text-gray-800 md:text-xl max-w-full mx-auto dark:text-white`}>Profissional
            prestando serviços de programação e criando pacotes de design. Junte-se a mim abaixo e vamos entrar em
            contato!</p>
        </div>
        <div className={"text-5xl flex justify-center gap-16 py-3 text-gray-600"}>
          <a className={`dark:text-white`} href="https://twitter.com/IgorPaprockiDv"
             target="_blank"><AiFillTwitterCircle/></a>
          <a className={`dark:text-white`} href="https://www.linkedin.com/in/igorcastilhos/"
             target="_blank"><AiFillLinkedin/></a>
          <a className={`dark:text-white`} href="https://www.youtube.com/channel/UCmu8Ay9Gyuf4DQb9xaWLogw"
             target="_blank"><AiFillYoutube/></a>
        </div>
        <div>
          <Image className={"relative mx-auto rounded-full w-80 h-80 mt-20 md:h-96 md:w-96"} src={devig}
                 alt="Igor Image"/>
        </div>
      </section>

      {/* Services */}
      <section>
        <div>
          <h3 className={`${montserrat.className} text-3xl py-10 dark:text-white`}>Serviços</h3>
          <p className={`${montserrat.className}text-base py-2 leading-8 text-gray-800 dark:text-white`}>
            Desde o início da minha jornada como desenvolvedor, fiz muitos projetos que apresentam as mais recentes
            tecnologias. Trabalhando com <span className={"text-cyan-400"}>Desenvolvimento Web</span>, a gama de
            serviços que ofereço incluem <span className={"text-cyan-400"}>Landing Pages</span> até mesmo <span
              className={"text-teal-400"}> Saas.</span>
          </p>
        </div>

        <div className={"lg:flex gap-10"}>
          <div className={`${montserrat.className} text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1`}>
            <Image className={"mx-auto w-24 h-24"} src={design} alt="Design image"/>
            <h3 className={`text-lg font-medium pt-8 pb-2`}>
              Designs Modernos
            </h3>
            <p className={`py-2`}>
              Criando designs elegantes adequados às suas necessidades, seguindo as principais práticas
            </p>
            <h4 className={`py-4 text-teal-600`}>Design Tools</h4>
            <p className={`text-gray-800 py-1`}>Figma</p>
          </div>

          <div className={`${montserrat.className} text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1`}>
            <Image className={"mx-auto w-24 h-24"} src={code} width={96} height={96} quality={100} alt="Code image"/>
            <h3 className={"text-lg font-medium pt-8 pb-2"}>
              Tecnologias de mercado
            </h3>
            <p className={"py-2"}>
              Minha abordagem se baseia em identificar e implementar soluções tecnológicas estratégicas, capazes de
              impulsionar a eficiência operacional, melhorar a experiência do cliente e garantir a vantagem competitiva.
            </p>
            <h4 className={"py-4 text-teal-600"}>Linguagens | Bibliotecas | Frameworks</h4>
            <p className={"text-gray-800 py-1"}>JavaScript</p>
            <p className={"text-gray-800 py-1"}>React + NextJs</p>
            <p className={"text-gray-800 py-1"}>Tailwind CSS</p>
            <p className={"text-gray-800 py-1"}>Python</p>
          </div>

          <div className={`${montserrat.className} text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1`}>
            <Image className={"mx-auto w-24 h-24"} src={consulting} width={96} height={96} quality={100} alt="Design image"/>
            <h3 className={"text-lg font-medium pt-8 pb-2"}>
              Satisfação do consumidor
            </h3>
            <p className="py-2">
              Acredito que quando os clientes se sentem valorizados, eles se tornam defensores do produto e impulsionam
              o sucesso do negócio. Estou entusiasmado para colaborar em projetos que busquem elevar a satisfação do
              consumidor a um nível excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="Portfolio">
        <div>
          <h3 className={`${montserrat.className} text-3xl py-1 dark:text-white`}>Portfólio</h3>
          <p className={`${montserrat.className} text-base py-2 leading-8 text-gray-800 dark:text-white`}>
            Esses são alguns dos meus projetos. Você pode encontrar cada um deles no meu GitHub.
          </p>
        </div>

        <div className={"flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap mx-auto w-full h-full"}>

          <div className={"group w-96 h-96 flex-shrink mx-auto"}>
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={dtmoney} alt="Imagem de Ícones brilhantes"/>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold mb-4">Dashboard Financeiro</h1>
                  <p className="text-lg mb-2">Finance & Data</p>
                  <p className="text-base mb-4">Esse é um projeto que simula um sistema de compra e venda de ações/produtos.</p>
                  <a href="https://github.com/IgorCastilhos/DT-Money-React-TypeScript" target="_blank"><button className="mt-2 rounded-md bg-neutral-800 px-3 py-2 text-sm hover:-bg--blue-100">GitHub
                  </button></a>
                </div>
              </div>
            </div>
          </div>

          <div className={"group w-96 h-96 flex-shrink mx-auto"}>
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={todo} alt="Imagem de Ícones brilhantes"/>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold mb-4">Lista de Tarefas</h1>
                  <p className="text-lg mb-2">Storage</p>
                  <p className="text-base mb-4">Permite criar uma nova tarefa, exluir e marcar como completa.</p>
                  <a href="https://github.com/IgorCastilhos/ToDo-List-React-TypeScript" target="_blank"><button className="mt-2 rounded-md bg-neutral-800 px-3 py-2 text-sm hover:-bg--blue-100">GitHub
                  </button></a>
                </div>
              </div>
            </div>
          </div>

          <div className={"group w-96 h-96 flex-shrink mx-auto"}>
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={timer} alt="Imagem de Ícones brilhantes"/>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold mb-4">Pomodoro Timer</h1>
                  <p className="text-lg mb-2">Timing</p>
                  <p className="text-base mb-4">Esse projeto serve para praticar sessões de estudo e concentração.</p>
                  <a href="https://github.com/IgorCastilhos/Timer-React-TypeScript" target="_blank"><button className="mt-2 rounded-md bg-neutral-800 px-3 py-2 text-sm hover:-bg--blue-100">GitHub
                  </button></a>
                </div>
              </div>
            </div>
          </div>

          <div className={"group w-96 h-96 flex-shrink mx-auto"}>
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={design_system} alt="Imagem de Sistema de Design"/>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold mb-4">Design System</h1>
                  <p className="text-lg mb-2">Design Pattern</p>
                  <p className="text-base mb-4">Meu maior projeto. Consiste em um sistema com Storybook e um monorepo com os meus Design Tokens preferidos.</p>
                  <a href="https://github.com/IgorCastilhos/Design-System" target="_blank"><button className="mt-2 rounded-md bg-neutral-800 px-3 py-2 text-sm hover:-bg--blue-100">GitHub
                  </button></a>
                </div>
              </div>
            </div>
          </div>

          <div className={"group w-96 h-96 flex-shrink mx-auto"}>
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={shop_model} alt="Imagem de um modelo de site de compras"/>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold mb-4">Shop Model</h1>
                  <p className="text-lg mb-2">Store</p>
                  <p className="text-base mb-4">Esse é um projeto que simula um sistema de compra de camisetas. Realizei a conexão com a plataforma de pagamentos Stripe nesse projeto.</p>
                  <a href="https://github.com/IgorCastilhos/Shop-model" target="_blank"><button className="mt-2 rounded-md bg-neutral-800 px-3 py-2 text-sm hover:-bg--blue-100">GitHub
                  </button></a>
                </div>
              </div>
            </div>
          </div>

          <div className={"group w-96 h-96 flex-shrink mx-auto"}>
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={example_feed} alt="Imagem de um site inspirado em uma rede social"/>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold mb-4">Rede Social</h1>
                  <p className="text-lg mb-2">Social Network</p>
                  <p className="text-base mb-4">Site que simula uma rede social, com foto de perfil e comentários.</p>
                  <a href="https://github.com/IgorCastilhos/Example-Feed" target="_blank"><button className="mt-2 rounded-md bg-neutral-800 px-3 py-2 text-sm hover:-bg--blue-100">GitHub
                  </button></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </main>
  </div>);
}
