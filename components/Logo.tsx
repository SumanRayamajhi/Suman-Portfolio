import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/" className="group">
      <svg
        width="300"
        viewBox="0 -10 300 50"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer h-auto"
      >
        <text
          x="27%"
          y="59%"
          fontFamily="Arial, sans-serif"
          fontSize="35"
          fontWeight="bold"
          fill="#4A4D4E"
          textAnchor="middle"
          className="group-hover:fill-green-600 transition-colors duration-300"
        >
          P
        </text>
        <text
          x="50%"
          y="49%"
          font-family="Arial, sans-serif"
          font-size="27"
          font-weight="bold"
          fill="#4A4D4E"
          text-anchor="middle"
          letterSpacing="-0.6"
          className="group-hover:fill-green-600 transition-colors duration-300"
        >
          ORTFOLI
        </text>
        <text
          x="74%"
          y="58%"
          font-family="Arial, sans-serif"
          font-size="35"
          font-weight="bold"
          fill="#4A4D4E"
          text-anchor="middle"
          className="group-hover:fill-green-600 transition-colors duration-300"
        >
          O
        </text>
        <line
          x1="30%"
          y1="55%"
          x2="70%"
          y2="55%"
          stroke="#4A4D4E"
          strokeWidth="1"
          className="group-hover:stroke-green-500 transition-colors duration-300"
        />
        <text
          x="50%"
          y="74%"
          font-family="Arial, sans-serif"
          font-size="10"
          font-weight="bold"
          fill="#4A4D4E"
          letter-spacing="2"
          text-anchor="middle"
          className="group-hover:fill-green-500 transition-colors duration-300"
        >
          SUMAN RAYAMAJHI
        </text>
      </svg>
    </Link>
    /*  <Link href="/" className="inline-block group">
      <svg
        width="auto"
        viewBox="0 -10 300 100"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer h-auto"
      >
        <text
          x="27%"
          y="50%"
          fontFamily="Arial, sans-serif"
          fontSize="35"
          fontWeight="bold"
          fill="#4A4D4E"
          textAnchor="middle"
          className="group-hover:fill-green-600 transition-colors duration-300"
        >
          P
        </text>
        <text
          x="50%"
          y="46%"
          fontFamily="Arial, sans-serif"
          fontSize="27"
          fontWeight="bold"
          fill="#4A4D4E"
          textAnchor="middle"
          letterSpacing="-0.6"
          className="group-hover:fill-green-600 transition-colors duration-300"
        >
          ORTFOLI
        </text>
        <text
          x="74%"
          y="50%"
          fontFamily="Arial, sans-serif"
          fontSize="35"
          fontWeight="bold"
          fill="#4A4D4E"
          textAnchor="middle"
          className="group-hover:fill-green-600 transition-colors duration-300"
        >
          O
        </text>
        <line
          x1="38%"
          y1="52%"
          x2="62%"
          y2="52%"
          stroke="#4A4D4E"
          strokeWidth="1.5"
          className="group-hover:stroke-green-500 transition-colors duration-300"
        />
        <text
          x="50%"
          y="65%"
          fontFamily="Arial, sans-serif"
          fontSize="10"
          fontWeight="bold"
          fill="#4A4D4E"
          letterSpacing="2"
          textAnchor="middle"
          className="group-hover:fill-green-500 transition-colors duration-300"
        >
          SUMAN RAYAMAJHI
        </text>
      </svg>
    </Link> */
  );
}

export default Logo;
