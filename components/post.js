import StarRateIcon from "@material-ui/icons/StarRate";
import Link from "next/link";

export default function Post({ className, details }) {
  return (
    <div className={className}>
      <h2>
        {details.featured && (
          <StarRateIcon style={{ color: "var(--call-to-action)" }} />
        )}
        {details.title}
      </h2>
      <div className="italic">
        {details.subTitle} - {details.readTimeMinutes}m read time
      </div>
      <p>
        Preview text. lorem ipsum etc etc etc lalala some text here that's going
        to be some...
      </p>
      <Link href={details.url}>
        <a
          style={{
            color: "var(--call-to-action)",
            padding: "0",
            display: "flex",
            justifyContent: "left",
            margin: "10px 0 0 0",
            width: "30%",
          }}
        >
          Read more...
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
            color: white;
          }

          div {
            margin: 10px 0 0 0;
            color: hsla(0, 0%, 100%, 0.88);
          }

          .italic {
            font-style: italic;
          }

          .post {
            width: 80%;
            display: flex;
            flex-direction: column;
            margin: 30px 0;
          }

          @media only screen and (max-width: 768px) {
            .post {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}
