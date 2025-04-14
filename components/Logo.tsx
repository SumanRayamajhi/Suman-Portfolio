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
          fill="#43A047"
          textAnchor="middle"
          className="group-hover:fill-green-600 transition-colors duration-300"
        >
          P
        </text>
        <text
          x="50%"
          y="49%"
          fontFamily="Arial, sans-serif"
          fontSize="27"
          fontWeight="bold"
          fill="#43A047"
          textAnchor="middle"
          letterSpacing="-0.6"
          className="group-hover:fill-green-600 transition-colors duration-300"
        >
          ORTFOLI
        </text>
        <text
          x="74%"
          y="58%"
          fontFamily="Arial, sans-serif"
          fontSize="35"
          fontWeight="bold"
          fill="#43A047"
          textAnchor="middle"
          className="group-hover:fill-green-600 transition-colors duration-300"
        >
          O
        </text>
        <line
          x1="30%"
          y1="55%"
          x2="70%"
          y2="55%"
          stroke="#43A047"
          strokeWidth="1"
          className="group-hover:stroke-green-500 transition-colors duration-300"
        />
        <text
          x="50%"
          y="74%"
          fontFamily="Arial, sans-serif"
          fontSize="10"
          fontWeight="bold"
          fill="#43A047"
          letterSpacing="2"
          textAnchor="middle"
          className="group-hover:fill-green-500 transition-colors duration-300"
        >
          SUMAN RAYAMAJHI
        </text>
      </svg>
    </Link>
  );
}

export default Logo;
