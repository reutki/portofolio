import Navigation from "@/components/Navigation/Navigation";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
//styles
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Header />
      <About />
    </main>
  );
}
