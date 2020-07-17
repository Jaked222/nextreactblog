import Head from "next/head";
import Bio from "../components/bio";
import Post from "../components/post";
import posts from "../post-config";
import { useRouter } from "next/router";
import QuoteSection from "../components/quoteSection";
import { displayQuoteSection } from "../site-config";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import DarkModeToggle from "react-dark-mode-toggle";

export default function Home() {
  const [showCopied, setShowCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showFileCopyIcon, setShowFileCopyIcon] = useState(false);
  const router = useRouter();
  const textAreaRef = useRef(null);

  useEffect(() => {
    setShowFileCopyIcon(true);
  }, []);

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
  };

  let handleDarkModeToggle = (e) => {
    if (!isDarkMode) {
      document.documentElement.style.setProperty("--primary-text", "white");
      document.documentElement.style.setProperty(
        "--secondary-text",
        "hsla(0, 0%, 100%, 0.6)"
      );
      document.documentElement.style.setProperty(
        "--call-to-action",
        "goldenrod"
      );
      document.documentElement.style.setProperty(
        "--container-background",
        "#141317"
      );
      document.documentElement.style.setProperty(
        "--post-background",
        "#23212a"
      );
    } else {
      document.documentElement.style.setProperty("--primary-text", "#000000");
      document.documentElement.style.setProperty("--secondary-text", "#6D6A6F");
      document.documentElement.style.setProperty("--call-to-action", "#7C20D8");
      document.documentElement.style.setProperty(
        "--container-background",
        "white"
      );
      document.documentElement.style.setProperty(
        "--post-background",
        "#F5F5F5"
      );
    }
    setIsDarkMode(e);
  };

  return (
    <div className="container">
      <Head>
        <title>jakeduncan.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="page-title">
          <h1 onClick={handleGoHomeClick}>Jake Duncan &middot; Developer</h1>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            {displayQuoteSection && <QuoteSection className="quote-text" />}
            <DarkModeToggle
              onChange={handleDarkModeToggle}
              checked={isDarkMode}
            />
          </div>
          <div>
            <a href="mailto:jakecduncan@gmail.com">
              <span ref={textAreaRef}>jakecduncan@gmail.com</span>
            </a>
            {showFileCopyIcon && (
              <FileCopyIcon
                onClick={handleCopyClick}
                style={{
                  color: "var(--secondary-text)",
                  fontSize: "1rem",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              />
            )}
            {showCopied && (
              <motion.span
                style={{
                  color: "var(--secondary-text",
                  fontStyle: "italic",
                  margin: "0 0 0 10px",
                }}
                initial="visible"
                animate="hidden"
                onAnimationComplete={() => setShowCopied(false)}
                transition={{ duration: 1.5 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                Copied to clipboard
              </motion.span>
            )}
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
