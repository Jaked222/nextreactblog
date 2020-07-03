import StarRateIcon from "@material-ui/icons/StarRate";
import { Button } from "@material-ui/core";

export default function Post({ className, details }) {
  return (
    <div className={className}>
      <h2>
        {details.title}
        {details.featured && (
          <StarRateIcon style={{ float: "right", color: "gold" }} />
        )}
      </h2>

      <h5>
        {details.subTitle} - {details.readTimeMinutes}m read time
      </h5>
      <div>
        Preview text. lorem ipsum etc etc etc lalala some text here that's going
        to be some...
      </div>
      <Button
        style={{
          color: "gold",
          padding: "0",
          display: "flex",
          justifyContent: "left",
          margin: "10px 0 0 0",
          width: "30%",
        }}
      >
        Read more...
      </Button>
      <style jsx>
        {`
          .post {
            width: 50%;
            display: flex;
            flex-direction: column;
            margin: 10px 0;
          }

          button {
            color: gold;
            padding: 0;
            display: flex;
            justify-content: left;
            margin-top: 10px;
          }

          h2 {
            margin: 10px 0 0 0;
            color: white;
          }

          h5 {
            margin: 10px 0 0 0;
            color: hsla(0, 0%, 100%, 0.88);
          }

          div {
            margin: 10px 0 0 0;
            color: hsla(0, 0%, 100%, 0.88);
          }
        `}
      </style>
    </div>
  );
}
