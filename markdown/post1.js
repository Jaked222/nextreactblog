import MDXDocument from "./post1.mdx";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

export default function Post1({ className, post }) {
  const [MarkDown, setMarkDown] = useState(null);

  useEffect(() => {
    console.log(post);
    setMarkDown(dynamic(() => import(`./${post}.mdx`)));
  }, [post]);

  return (
    <div className={className}>
      {MarkDown && <MarkDown />}
      <style jsx>{`
        .postBody {
          margin: 20px 0 0 0;
        }
      `}</style>
    </div>
  );
}
