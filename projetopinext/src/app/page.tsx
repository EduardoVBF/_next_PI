"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";


export default function App() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  
  const handleLogin = async () => {
    const router = useRouter();
    try {
      const response = await axios.get("/analista");
      const analistas = response.data;
      
      const analista = analistas.find(
        (analista: { email: string; senha: string }) =>
          analista.email === email && analista.senha === password
      );
      
      if (analista) {
        if (router.isReady) { // Verifique se o roteador está pronto antes de usá-lo
          router.push("/home");
        }
      } else {
        setError("Usuário ou senha incorretos");
      }
    } catch (error) {
      setError("Ocorreu um erro ao fazer login");
    }
  };  

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            className="mt-2 w-10/12 lg:w-1/2 mb-6 rounded-xl py-6"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="w-1/4 h-10 bg-[#3e8721] hover:bg-[#29581f] text-white shadow-md rounded-xl hover:shadow-xl"
            type="submit"
            variant="default"
            size="default"
            onClick={handleLogin}
          >
            Login
          </Button>
          {error && <p>{error}</p>}
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
