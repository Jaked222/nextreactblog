export default function Bio({ className }) {
  return (
    <div className={className}>
      <img src="https://picsum.photos/56/56"></img>
      <div className="text">
        A place for writing about things that I find interesting
      </div>
      <style jsx>
        {`
          .post {
            width: 50%;
            margin: 20px 0 0 0;
            display: flex;
          }
          .text {
            margin-left: 10px;
            text-align: center;
            display: flex;
            align-items: center;
          }

          h2 {
            margin: 10px 0 0 0;
            color: white;
          }

          h6 {
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
