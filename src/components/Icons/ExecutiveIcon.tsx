import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
}

const ExecutiveIcon = (props: IconProps) => {
    return (
        <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx="28" cy="28" r="24.5" stroke="currentColor" />
            <circle
                cx="7"
                cy="7"
                r="7"
                transform="matrix(-1 0 0 1 35 16.3333)"
                stroke="currentColor"
            />
            <path
                d="M28 30.3333C19.5151 30.3333 16.3333 40.0256 16.3333 40.0256C16.3333 40.0256 20.0454 44.3333 28 44.3333C35.9545 44.3333 39.6667 40.0256 39.6667 40.0256C39.6667 40.0256 36.4848 30.3333 28 30.3333Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M25.0833 38.2083L28 30.3333L30.9167 38.2083L28 40.8333L25.0833 38.2083Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ExecutiveIcon;