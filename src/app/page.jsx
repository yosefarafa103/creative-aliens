"use client"
import Header from "@/components/Header";
import './globals.css'
import TemplateOne from "@/components/TemplateOne";
import Landing from "@/components/Home";
import LocomotiveScroll from 'locomotive-scroll'
export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <main className="min-h-screen" data-scroll>
      <Header />
      <section className="px-[5vw] py-[87px]">
        <Landing />
      </section>
    </main>
  );
}
