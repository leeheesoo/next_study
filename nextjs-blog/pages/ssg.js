import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  // dev에서는 동작x / dev에서는 ssr처럼 동작
  // build 할 때, 페이지 미리 그려버림
  // 언제쓸까.. >> 서버의 부하없이 정적인 사이트

  // SSG
  console.log("server");
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function SSG({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <h1>
        <Link href="/">SSR index페이지로</Link>
      </h1>
    </>
  );
}
