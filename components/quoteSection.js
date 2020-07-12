import { quotes } from "../site-config";
import { useState, useEffect } from "react";

export default function QuoteSection({ className }) {
  const [quoteToShowIndex, setQuoteToShowIndex] = useState(0);

  useEffect(() => {
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    let comparisonDate = new Date("2020", "6", "9");
    let currentDate = new Date();

    // get difference between dates in milliseconds then convert back to days
    let quoteToShowIndexTemp = Math.round(
      Math.abs((currentDate - comparisonDate) / millisecondsInDay)
    );

    while (quoteToShowIndexTemp > quotes.length - 1) {
      quoteToShowIndexTemp -= quotes.length;
    }

    setQuoteToShowIndex(quoteToShowIndexTemp);
  }, []);

  return <div className={className}>{quotes[quoteToShowIndex]}</div>;
}
