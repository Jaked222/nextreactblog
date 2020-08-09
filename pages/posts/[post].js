import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

export default function PostWrapper() {
  const router = useRouter();
  const [MarkDown, setMarkDown] = useState(null);

  const { post } = router.query;
  useEffect(() => {
    setMarkDown(dynamic(() => import(`../../markdown/${post}.mdx`)));
  }, [post]);

  return (
    <div style={{ width: "100%", marginTop: "30px" }}>
      <Head>
        <title>Post Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>Post Title</h2>
        {MarkDown && <MarkDown />}
      </div>
    </div>
  );
}
