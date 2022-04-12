import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature1 from "../components/Feature1";
import Feature2 from "../components/Feature2";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Danger is near</title>
        <meta name="description" content="Danger is near" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Footer />
    </div>
  );
}
