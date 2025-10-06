import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
}

const DiagnosticIcon = (props: IconProps) => {
    return (
        <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle
                cx="28"
                cy="28"
                r="24.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <ellipse
                cx="9.33333"
                cy="9.33333"
                rx="9.33333"
                ry="9.33333"
                transform="matrix(-1 0 0 1 39.9911 15.75)"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M23.4162 31.5L16.0833 38.833C16.0833 38.833 15.1667 39.7496 16.1979 40.7808C17.2291 41.812 18.1457 40.8954 18.1457 40.8954L25.4786 33.5624"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default DiagnosticIcon;