import "../styles.css";
import { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { setSiteColors } from "../helperFunctions";
import { useRouter } from "next/router";

// This default export is required in a new `pages/_app.js` file.
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
          <h1 onClick={handleGoHomeClick}>Jake Duncan &middot; Developer</h1>
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
