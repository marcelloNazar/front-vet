import { parseCookies } from "nookies";
import { GetServerSidePropsContext } from "next";
import Header from "../components/partials/Header";
import Head from "next/head";
import { SelectedOwnerProvider } from "../contexts/SelectedOwnerContext";
import { AnimalProvider } from "../contexts/AnimalContext";
import Adicionar from "@/components/admin/Adicionar/Adicionar";
import TodosAtendimentos from "@/components/admin/TodosAtendimentos";
import AtendimentoPagosFalse from "@/components/admin/AtendimentosPagosFalse";

import PropUser from "@/components/proprietario/Propietario";
import AnimalUser from "@/components/animal/Animal";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const AdminHomePage = () => {
  return (
    <SelectedOwnerProvider>
      <AnimalProvider>
        <Head>
          <title>Vetcenter</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="w-full flex  bg-white dark:bg-black text-black">
          <header className="h-10 w-full absolute items-center top-0">
            <Header />
          </header>
          <div className="w-full flex max-w-7xl mx-auto">
            <main className="flex pt-10 w-screen h-screen">
              <div className="w-1/3 flex flex-col overflow-hidden p-2 pr-0">
                <Adicionar />
              </div>
              <div className="w-2/3 flex flex-col h-full">
                <div className="w-full h-1/4 p-2 pb-0">
                  <PropUser />
                </div>
                <div className="w-full h-1/4 p-2 pb-0">
                  <AnimalUser />
                </div>
                <div className="w-full flex h-2/4">
                  <div className="w-1/2 h-full p-2 pr-0">
                    <TodosAtendimentos />
                  </div>
                  <div className="w-1/2 h-full p-2">
                    <AtendimentoPagosFalse />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </AnimalProvider>
    </SelectedOwnerProvider>
  );
};

export default AdminHomePage;
