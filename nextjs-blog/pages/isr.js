import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1, // ISR 1초마다 다시 패칭 / ssr + ssg의 장점
  };
}

export default function ISR({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <h1>
        <Link href="/">SSR index페이지로</Link>
      </h1>
    </>
  );
}
