import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import posts from "../../post-config";

export default function PostWrapper() {
  const router = useRouter();
  const [DynamicComponent, setDynamicComponent] = useState(null);

  let handleGoHomeClick = () => {
    router.push("/");
  };

  const { post } = router.query;
  useEffect(() => {
    setDynamicComponent(dynamic(() => import(`../../markdown/${post}`)));
  }, [post]);

  return (
    <div className="container">
      <Head>
        <title>post title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 onClick={handleGoHomeClick}>jakeduncan.dev</h1>
        {DynamicComponent && (
          <DynamicComponent className="postBody" post={post} />
        )}
      </main>

      <footer>
        <div className="footer-text">
          Email me at{" "}
          <a href="mailto:jakecduncan@gmail.com">jakecduncan@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}
