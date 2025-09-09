import Image from 'next/image';
import { Navbar } from '@/components/navbar/Navbar';
import {
  HomeComponent,
  Producto,
  Servicios,
  Soluciones,
  Conecta,
  Footer,
  Tecnologia,
} from '@/components';

export default function Home() {
  return (
    <>
      <div className="">
           <Navbar />
        <HomeComponent />
        <Producto />
        <Servicios />
        <Tecnologia />
        <Soluciones />
        <Conecta />

        <Footer />
      </div>
    </>
  );
}
