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
            display: flex;
          }
          .text {
            margin-left: 10px;
            text-align: center;
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
