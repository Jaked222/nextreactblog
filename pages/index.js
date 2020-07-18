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
import { colors } from "../site-config";

export default function Home() {
  const [showCopied, setShowCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showFileCopyIcon, setShowFileCopyIcon] = useState(false);
  const router = useRouter();
  const textAreaRef = useRef(null);

  useEffect(() => {
    // This use of useEffect is weird. We're doing this because the file copy icon
    // would sometimes be huge on the first render, so we are hiding the icon until
    // the page has already been rendered once. By the time it shows, for whatever reason,
    // the icon is normal size. The better solution to this would be to figure out the cause
    // of the above, but this was quicker.
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

  useEffect(() => {
    setSiteColors(false);
  }, []);

  let setSiteColors = (isDarkModeTemp) => {
    if (!isDarkModeTemp) {
      document.documentElement.style.setProperty(
        colors.darkMode.primaryText.varName,
        colors.darkMode.primaryText.color
      );

      document.documentElement.style.setProperty(
        colors.darkMode.secondaryText.varName,
        colors.darkMode.secondaryText.color
      );

      document.documentElement.style.setProperty(
        colors.darkMode.callToAction.varName,
        colors.darkMode.callToAction.color
      );

      document.documentElement.style.setProperty(
        colors.darkMode.containerBackground.varName,
        colors.darkMode.containerBackground.color
      );

      document.documentElement.style.setProperty(
        colors.darkMode.postBackground.varName,
        colors.darkMode.postBackground.color
      );
    } else {
      document.documentElement.style.setProperty(
        colors.lightMode.primaryText.varName,
        colors.lightMode.primaryText.color
      );

      document.documentElement.style.setProperty(
        colors.lightMode.secondaryText.varName,
        colors.lightMode.secondaryText.color
      );

      document.documentElement.style.setProperty(
        colors.lightMode.callToAction.varName,
        colors.lightMode.callToAction.color
      );

      document.documentElement.style.setProperty(
        colors.lightMode.containerBackground.varName,
        colors.lightMode.containerBackground.color
      );

      document.documentElement.style.setProperty(
        colors.lightMode.postBackground.varName,
        colors.lightMode.postBackground.color
      );
    }
  };

  let handleDarkModeToggle = (e) => {
    setSiteColors(isDarkMode);
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
