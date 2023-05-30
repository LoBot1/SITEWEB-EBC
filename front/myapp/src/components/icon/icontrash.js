import * as React from "react";

const IconTrash = ({ size = 25, color = "#000000", ...props }) => (
    <svg
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M9.48 9.48a.6.6 0 0 1 .6.6v7.2a.6.6 0 1 1-1.2 0v-7.2a.6.6 0 0 1 .6-.6Zm3 0a.6.6 0 0 1 .6.6v7.2a.6.6 0 1 1-1.2 0v-7.2a.6.6 0 0 1 .6-.6Zm3.6.6a.6.6 0 1 0-1.2 0v7.2a.6.6 0 1 0 1.2 0v-7.2Z" />
        <path
            fillRule="evenodd"
            d="M20.28 6.48a1.2 1.2 0 0 1-1.2 1.2h-.6v10.8a2.4 2.4 0 0 1-2.4 2.4h-7.2a2.4 2.4 0 0 1-2.4-2.4V7.68h-.6a1.2 1.2 0 0 1-1.2-1.2v-1.2a1.2 1.2 0 0 1 1.2-1.2h4.2a1.2 1.2 0 0 1 1.2-1.2h2.4a1.2 1.2 0 0 1 1.2 1.2h4.2a1.2 1.2 0 0 1 1.2 1.2v1.2ZM7.82 7.68l-.141.07v10.73a1.2 1.2 0 0 0 1.2 1.2h7.2a1.2 1.2 0 0 0 1.2-1.2V7.75l-.142-.07H7.821Zm-1.94-1.2v-1.2h13.2v1.2H5.88Z"
            clipRule="evenodd"
        />
    </svg>
);

export default IconTrash;