// env.に設定してる NEXT_PUBLIC_ process.envで呼び出せる
// import Image from "next/image";
import Layout from "../components/Layout";
import Auth from "../components/Auth";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_RESTAPI_URL);
  return (
    <Layout title="Login">
      <Auth />
    </Layout>
  );
}
