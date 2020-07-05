import Head from "next/head";
import Bio from "../components/bio";
import Post from "../components/post";
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
        <div className="page-title">
          <h1 onClick={handleGoHomeClick}>jake duncan &middot; developer</h1>
          <div className="quote-text">
            quote text something wise something very very wise....
          </div>
        </div>
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
