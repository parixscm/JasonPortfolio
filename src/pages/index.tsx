import Head from "next/head";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>제이슨 포트</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </>
  );
}
