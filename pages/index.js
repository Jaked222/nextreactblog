import Head from "next/head";
import Bio from "../components/bio";
import Post from "../components/post";
import QuoteSection from "../components/quoteSection";
import posts from "../post-config";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>jakeduncan.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>jakeduncan.dev</h1>
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

      <style jsx global>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1 {
          margin: 10px 0 0 0;
          color: white;
        }

        h6 {
          margin: 10px 0 0 0;
          color: hsla(0, 0%, 100%, 0.88);
        }

        a {
          color: gold;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background: #282c35;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
