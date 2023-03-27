import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
      <Head>
        <title>제이슨 포트</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </div>
  );
}
