import ArrowRightSvg from "@/pages/svg/arrowRight";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

export const AboutModal = () => {
  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <section className="w-full h-full bg-main border border-grey rounded-lg p-8 mb-8">
        <header className="mb-2">
          <Link href="/">
            <ArrowRightSvg className="rotate-180" />
          </Link>
        </header>
        <h2 className="font-bold text-2xl my-5">
          Um pouco sobre a minha trajetória
        </h2>
        <p className="my-2 text-sm">
          Comecei a minha carreira como frontend estudando HTML,CSS e JS e
          posteriormente me aprofundando em React.
        </p>
        <p className="my-2 text-sm">
          Com o passar do tempo quis aprender mais sobre o ciclo completo de
          desenvolvimento de uma aplicação, estudando NodeJS como linguagem
          principal para backend, MariaDB para me aprofundar com bancos de dados
          e Linux para entender mais sobre servidores.
        </p>
        <p className="my-2 text-sm">
          Aualmente trabalho em uma startup que atua no setor logístico
          portuário, desenvolvendo sistemas complexos para controle operacional
          de navios. Atuo como desenvolvedor fullstack cuidando desde o
          planejamento da aplicação até o deploy e acompanhamento.
        </p>
        <p className="my-2 text-sm">
          Durante esses anos participei de vários projetos legais como: Sistema
          de descarga de navios, Sistema de chamados, Web Scrappers, Lib de
          componentes React com Material UI, desenvolvimento de dashboards BI.
        </p>
        <h2 className="font-bold text-2xl my-5">Por onde passei</h2>
        <h4 className="font-bold text-lg my-2">
          Blue Marble | 2021 - atualmente
        </h4>
        <p className="text-sm">
          -Desenvolvi uma lib de components utilizando React e Material UI,
          aumentando a padronização e facilitando a manutenção do código;
          <br />
          -Desenvolvimento de API REST utilizando Express, Knex ou Prisma;
          <br />
          -Implementação de testes unitários e de integração com Vitest;
          <br />
          -Trabalhei na otimização de dashboards BI, lidando com grande volume
          de dados;
          <br />
          -Configuração de ambiente EC2 AWS (NGINX, Github Actions e PM2).
        </p>
        <h4 className="font-bold text-lg mb-2 mt-4">
          Autônomo | 2020 - atualmente
        </h4>
        <p className="text-sm">
          -Desenvolvi uma lib de components utilizando React e Material UI,
          aumentando a padronização e facilitando a manutenção do código;
          <br />
          -Desenvolvimento de API REST utilizando Express, Knex ou
          Prisma;-Implementação de testes unitários e de integração com Vitest;
          <br />
          -Trabalhei na otimização de dashboards BI, lidando com grande volume
          de dados;
          <br />
          -Configuração de ambiente EC2 AWS (NGINX, Github Actions e PM2).
          <br />
        </p>
      </section>
    </div>
  );
};
