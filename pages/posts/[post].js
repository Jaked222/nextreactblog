import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import posts from "../../post-config";

export default function PostWrapper() {
  const router = useRouter();
  const { post } = router.query;
  const [DynamicComponent, setDynamicComponent] = useState(null);

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
        <h1>jakeduncan.dev</h1>
        {DynamicComponent && <DynamicComponent />}
      </main>

      <footer>
        <div className="footer-text">
          Email me at{" "}
          <a href="mailto:jakecduncan@gmail.com">jakecduncan@gmail.com</a>
        </div>
      </footer>

      <style jsx>{`
        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 80%;
          height: 80%;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
        }

        footer {
          width: 80%;
          height: 50px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .footer-text {
          color: hsla(0, 0%, 100%, 0.88);
          margin: 0 10px;
        }
      `}</style>
    </div>
  );
}
