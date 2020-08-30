import Head from "next/head";
import Bio from "../components/bio";
import PostListItem from "../components/postListItem";
import posts from "../post-config";
import QuoteSection from "../components/quoteSection";
import { displayQuoteSection } from "../site-config";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [showCopied, setShowCopied] = useState(false);
  const [showFileCopyIcon, setShowFileCopyIcon] = useState(false);
  const textAreaRef = useRef(null);

  useEffect(() => {
    // This use of useEffect is weird. We're doing this because the file copy icon
    // would sometimes be huge on the first render, so we are hiding the icon until
    // the page has already been rendered once. By the time it shows, for whatever reason,
    // the icon is normal size. The better solution to this would be to figure out the cause
    // of the above, but this was quicker.
    setShowFileCopyIcon(true);
  }, []);

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

  return (
    <>
      <Head>
        <title>jakeduncan.dev</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="page-title">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {displayQuoteSection && <QuoteSection className="quote-text" />}
        </div>
        <div>
          <a onClick={handleCopyClick} style={{ cursor: "pointer" }}>
            <span ref={textAreaRef}>jakecduncan@gmail.com</span>
            {showFileCopyIcon && (
              <FileCopyIcon
                style={{
                  color: "var(--secondary-text)",
                  fontSize: "1rem",
                  marginLeft: "8px",
                }}
              />
            )}
          </a>

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
          <PostListItem
            key={postDetail.title}
            className="post"
            details={postDetail}
          />
        );
      })}
    </>
  );
}
