import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";
import Link from "next/link";

// 파일명 이중 대괄호 사용으로 cart에 index도 커버가능
export default function CartDateSlug() {
  const router = useRouter();
  const { date } = router.query;
  return (
    <>
      <h1>Cart DateSlug{JSON.stringify(date)}</h1>
      <Link href="/cart/2022/222/22">22링크</Link>
      <Link href="/cart">대괄호 써서 cart index도 커버햇지롱!</Link>
      <button onClick={() => router.push("/")}>버튼으로 라우터!</button>
    </>
  );
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
