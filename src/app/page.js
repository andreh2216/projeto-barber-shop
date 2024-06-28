'use client';
import {useState} from "react";
import Image from "next/image";
import Logo from "../../public/barbearia.png";
import Banner from "../../public/banner.jpg";
import { CiDark } from "react-icons/ci";
import { WiSolarEclipse } from "react-icons/wi";


import estilos from "./page.module.css";

export default function Home() {

  const [tema, setTema] = useState(false);

  function alterarTema(){
     setTema(!tema)
  }



  return (
    <main  className={tema ? estilos.dark : estilos.light} >
      
        <header className={estilos.container_topo}>

          <Image src={Logo} className={estilos.logotipo}/>

          <button onClick={alterarTema}>{tema ?<WiSolarEclipse />  :  <CiDark /> }</button>

        </header>

        <section className={estilos.container_banner}>
        <Image src={Banner} className={estilos.banner}/>
        </section>

        <section className={estilos.container_texto}>

            <h1>Bem-vindo a Barber Shop</h1>

            <p className={estilos.paragrafo_preto}>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
            </p>

            <p className={estilos.paragrafo}>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
            </p>

            <p className={estilos.paragrafo_dois}>S. Kelly
            </p>

        </section>



    </main>
  );
}
