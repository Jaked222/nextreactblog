import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

export default function PostWrapper() {
  const router = useRouter();
  const [MarkDown, setMarkDown] = useState(null);

  let handleGoHomeClick = () => {
    router.push("/");
  };

  const { post } = router.query;
  useEffect(() => {
    setMarkDown(dynamic(() => import(`../../markdown/${post}.mdx`)));
  }, [post]);

  return (
    <div className="container">
      <Head>
        <title>post title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="page-title" onClick={handleGoHomeClick}>
          jake duncan &middot; developer
        </h1>
        <div className="post-body">
          <h2>Post Title</h2>
          <div>post subtitle - length</div>
          {MarkDown && <MarkDown />}
        </div>
      </main>

      <footer>
        <div className="footer-text">
          <a href="mailto:jakecduncan@gmail.com">jakecduncan@gmail.com</a>
        </div>
      </footer>
      <style jsx>{`
        .post-body {
          margin: 0px 0 0 20px;
        }

        .post-body div {
          color: var(--secondary-text);
          margin-top: -20px;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
