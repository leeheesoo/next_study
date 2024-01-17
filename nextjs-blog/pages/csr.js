import Link from "next/link";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";
import { useEffect, useState } from "react";

export default function CSR() {
  const [time, setTime] = useState();

  useEffect(() => {
    console.log("client");
    setTime(new Date().toISOString());
  }, []);
  return (
    <>
      <h1>{time}</h1>
      <h1>
        <Link href="/">SSR index페이지로</Link>
      </h1>
    </>
  );
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
