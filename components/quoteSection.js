import { quotes } from "../site-config";
import { useState, useEffect } from "react";

export default function QuoteSection({ className }) {
  const millisecondsInDay = 24 * 60 * 60 * 1000;
  let comparisonDate = new Date("2020", "6", "9");
  let currentDate = new Date();

  // get difference between dates in milliseconds then convert back to days
  let quoteToShowIndex = Math.round(
    Math.abs((currentDate - comparisonDate) / millisecondsInDay)
  );

  while (quoteToShowIndex > quotes.length - 1) {
    quoteToShowIndex -= quotes.length;
  }

  return <div className={className}>{quotes[quoteToShowIndex]}</div>;
}
