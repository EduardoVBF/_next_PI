"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Footer from "../components/footer";
import Image from "next/image";
import React from "react";


export default function App() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-[url('/img/sean-pollock-PhYq704ffdA-unsplash.jpg')] bg-cover bg-center">
      <div className="w-10/12 md:w-3/5 lg:w-1/3 min-h-full py-10 md:py-4 md:pl-2 pl-0 lg:pl-0 lg:py-10 items-center justify-center text-sm flex flex-col lg:flex-col md:flex-row rounded-2xl bg-[#0b4c71c5]">
        <Image
          src="/img/logo_RobAt_Bco.png"
          width={150}
          height={150}
          alt="logo robotic"
          className="mx-auto mb-10 lg:mb-10 md:mb-0 h-full"
        />
        <div className="justify-center w-full flex flex-col items-center">
          <p className="text-white">Faça login para continuar</p>
          <Input
            type="text"
            placeholder="Usuário"
            className="mt-2 w-10/12 lg:w-1/2 mb-1 rounded-xl py-6"
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            className="mt-2 w-10/12 lg:w-1/2 mb-6 rounded-xl py-6"
            required
          />
          <Button
            className="w-1/4 h-10 bg-[#3e8721] hover:bg-[#29581f] text-white shadow-md rounded-xl hover:shadow-xl"
            type="submit"
            variant="default"
            size="default"
            onClick={() => router.push("/home")}
          >
            Login
          </Button>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}