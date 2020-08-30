import "../styles.css";
import { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { setSiteColors } from "../helperFunctions";
import { useRouter } from "next/router";
import {
  appHeaderText,
  footerEmailLink,
  footerLinkedinLink,
  footerGithubLink,
} from "../site-config";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [isDarkMode, setIsDarkMode] = useState(true);

  let handleGoHomeClick = () => {
    router.push("/");
  };

  let handleDarkModeToggle = (e) => {
    setSiteColors(isDarkMode);
    setIsDarkMode(e);
  };

  return (
    <div className="container">
      <main>
        <div className="wrapper-header">
          <h1 onClick={handleGoHomeClick}>{appHeaderText}</h1>
          <div className="flex">
            <DarkModeToggle
              onChange={handleDarkModeToggle}
              speed={2}
              checked={isDarkMode}
            />
          </div>
        </div>

        <Component {...pageProps} />
      </main>

      <footer>
        <div>
          <a className="footer-link first" href={footerEmailLink}>
            Email
          </a>
          &middot;
          <a className="footer-link" href={footerLinkedinLink}>
            Linkedin
          </a>
          &middot;
          <a className="footer-link" href={footerGithubLink}>
            Github
          </a>
        </div>
      </footer>
      <style jsx>{`
        .wrapper-header {
          width: 80%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .flex {
          display: flex;
        }

        @media only screen and (max-width: 768px) {
          .wrapper-header {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
