export default function QuoteSection({ className }) {
  return (
    <div className={className}>
      <h2>A quote that I like</h2>
      <div>quote text something wise something very very wise....</div>
      <style jsx>
        {`
          .post {
            width: 50%;
            display: flex;
            flex-direction: column;
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
            margin: 10px 0;
            color: hsla(0, 0%, 100%, 0.88);
          }
        `}
      </style>
    </div>
  );
}
