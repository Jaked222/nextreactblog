import Head from "next/head";
import Bio from "../components/bio";
import Post from "../components/post";
import posts from "../post-config";
import { useRouter } from "next/router";
import QuoteSection from "../components/quoteSection";
import { displayQuoteSection } from "../site-config";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { useRef, useState } from "react";

export default function Home() {
  const [showCopied, setShowCopied] = useState(false);
  const router = useRouter();
  const textAreaRef = useRef(null);

  let handleGoHomeClick = () => {
    router.push("/");
  };

  const handleCopyClick = () => {
    let currentNode = textAreaRef.current;
    if (document.body.createTextRange) {
      const range = document.body.createTextRange();
      range.moveToElementText(currentNode);
      range.select();
      document.execCommand("copy");
      range.remove();
    } else if (window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(currentNode);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();
    } else {
      alert("Could not select text, Unsupported browser");
    }

    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 1000);
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
          {displayQuoteSection && <QuoteSection className="quote-text" />}
          <a href="mailto:jakecduncan@gmail.com">
            <span ref={textAreaRef}>jakecduncan@gmail.com</span>
          </a>
          <FileCopyIcon
            onClick={handleCopyClick}
            style={{
              color: "var(--secondary-text)",
              fontSize: "1rem",
              marginLeft: "10px",
              cursor: "pointer",
            }}
          />
          {showCopied && (
            <span
              style={{
                color: "var(--secondary-text",
                fontStyle: "italic",
                margin: "0 0 0 10px",
              }}
            >
              Copied to clipboard!
            </span>
          )}
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
        <a className="footer-link first" href="mailto:jakecduncan@gmail.com">
          Email
        </a>
        &middot;
        <a className="footer-link" href="www.linkedin.com/in/jakeduncan222">
          Linkedin
        </a>
        &middot;
        <a className="footer-link" href="https://github.com/Jaked222">
          Github
        </a>
      </footer>
    </div>
  );
}
