import * as React from "react";

const Iconlogout = ({ size = 25, color = "#ffffff", ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M14.4 17.4a.6.6 0 0 1-.6.6H4.2a.6.6 0 0 1-.6-.6V6.6a.6.6 0 0 1 .6-.6h9.6a.6.6 0 0 1 .6.6V9a.6.6 0 1 0 1.2 0V6.6a1.8 1.8 0 0 0-1.8-1.8H4.2a1.8 1.8 0 0 0-1.8 1.8v10.8a1.8 1.8 0 0 0 1.8 1.8h9.6a1.8 1.8 0 0 0 1.8-1.8V15a.6.6 0 1 0-1.2 0v2.4Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M21.425 12.424a.6.6 0 0 0 0-.85l-3.6-3.6a.6.6 0 0 0-.85.85l2.577 2.576H9a.6.6 0 1 0 0 1.2h10.552l-2.576 2.575a.6.6 0 1 0 .85.85l3.6-3.6Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Iconlogout;