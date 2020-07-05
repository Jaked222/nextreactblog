import Head from "next/head";
import Bio from "../components/bio";
import Post from "../components/post";
import QuoteSection from "../components/quoteSection";
import posts from "../post-config";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  let handleGoHomeClick = () => {
    router.push("/");
  };

  return (
    <div className="container">
      <Head>
        <title>jakeduncan.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 onClick={handleGoHomeClick}>jakeduncan.dev</h1>
        <Bio className="post" />
        <QuoteSection className="post" />
        {posts.map((postDetail) => {
          return (
            <Post
              key={postDetail.title}
              className="post"
              details={postDetail}
            />
          );
        })}
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
