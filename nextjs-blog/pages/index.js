import Link from "next/link";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  // SSR : 서버에 부하 >> isr을 이용!
  console.log("server");
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Home({ time }) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>
      <h1>
        <Link href="/csr">CSR페이지로!</Link>
      </h1>

      <h1>
        <Link href="/ssg">SSG 페이지로!</Link>
      </h1>

      <h1>
        <Link href="/isr">ISR 페이지로!</Link>
      </h1>
    </>
  );
}
