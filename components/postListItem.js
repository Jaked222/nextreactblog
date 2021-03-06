import StarRateIcon from "@material-ui/icons/StarRate";
import Link from "next/link";
import { cardEnabled } from "../site-config";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export default function PostListItem({ className, details }) {
  className = cardEnabled ? className + " withCard" : className;
  return (
    <div className={className}>
      <Link href="/posts/[post]" as={`${details.url}`}>
        <h2>
          {details.featured && (
            <StarRateIcon style={{ color: "var(--call-to-action)" }} />
          )}
          {details.title}
        </h2>
      </Link>
      <div className="italic">
        {details.datePublished} &middot; {details.readTimeMinutes}m read time
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum
        tortor, dignissim nec lectus vitae, dapibus venenatis mi...
      </p>
      <Link href="/posts/[post]" as={`${details.url}`}>
        <a
          style={{
            color: "var(--call-to-action)",
            padding: "0",
            display: "flex",
            justifyContent: "left",
          }}
        >
          Read more <ArrowRightAltIcon style={{ marginLeft: "8px" }} />
        </a>
      </Link>
      <style jsx>
        {`
          button {
            color: var(--call-to-action);
            padding: 0;
            display: flex;
            justify-content: left;
            margin-top: 10px;
          }

          h2 {
            margin: 10px 0 0 0;
            color: var(--primary-text);
            cursor: pointer;
          }

          div {
            color: var(--primary-text);
          }

          .italic {
            font-style: italic;
          }

          .post {
            width: 80%;
            display: flex;
            flex-direction: column;
            margin: 20px 0;
          }

          .post.withCard {
            background: var(--post-background);
            border-radius: 5px;
            padding: 20px 40px;
          }

          @media only screen and (max-width: 768px) {
            .post {
              width: 90%;
              margin-left: 5%;
            }
          }
        `}
      </style>
    </div>
  );
}
