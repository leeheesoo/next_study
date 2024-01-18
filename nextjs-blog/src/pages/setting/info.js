import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps() {
  // SSR : 서버에 부하 >> isr을 이용!
  console.log("server");
  return {
    props: {},
  };
}

export default function Myinfo() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { state = "111" } = router.query;

  return (
    <>
      <h1 className="title">My info</h1>
      <h1 className="title">Clicked: {String(clicked)}</h1>
      <h1 className="title">Status: {state}</h1>

      <div>
        <p>로컬 state 유지안됨 리렌더</p>
        <button
          onClick={() => {
            alert("edit");
            setClicked(true);
            location.replace("/setting/info?state=222");
          }}
        >
          edit
        </button>
      </div>

      <div>
        <p>로컬state유지 / date fetching 일어남</p>
        <button
          onClick={() => {
            alert("edit");
            setClicked(true);
            router.push("/setting/info?staus=edting");
          }}
        >
          router
        </button>
      </div>

      <div>
        <p>로컬state유지 / date fetching 안됌 (정말그냥 url만 변경됌)</p>
        <button
          onClick={() => {
            alert("edit");
            setClicked(true);
            router.push("/setting/info?staus=edting", undefined, {
              shallow: true,
            });
          }}
        >
          shallow
        </button>
      </div>
    </>
  );
}

Myinfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
