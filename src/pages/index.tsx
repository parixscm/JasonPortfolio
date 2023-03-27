import Head from "next/head";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <div className="h-screen bg-[rgb(36,36,36)] text-white">
      <Head>
        <title>제이슨 포트</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section id="hero">
        <Hero />
      </section>
    </div>
  );
}
