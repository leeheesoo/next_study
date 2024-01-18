import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { useRouter } from "next/router";

export default function CategorySlug() {
  const router = useRouter();
  const { slug, from } = router.query; // 두번째 인자는 파라미터

  return (
    <>
      <h1>
        Category {slug}!! from {from}
      </h1>
    </>
  );
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
