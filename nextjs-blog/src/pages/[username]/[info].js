import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserInfo() {
  const router = useRouter();
  const { username, info, uid } = router.query;
  const [name, setName] = useState("");

  // useEffect(() => {
  //   fetch("/api/user")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setName(data.name);
  //     });
  // });

  useEffect(() => {
    console.log(uid);
    if (uid !== null) {
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
        });
    }
  }, [uid]); // uid가 바뀔때마다 실행

  // http://localhost:3000/test/eeww?uid=%22ewe%22
  return (
    <>
      <h1>
        UserInfo {username}'s {info}
      </h1>

      <h1>api에서 가져온 정보 이름 : {name}</h1>
    </>
  );
}

UserInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
