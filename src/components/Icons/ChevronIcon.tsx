import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
}

const ArrowLeftIcon = (props: IconProps) => {
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M17.5 22.1667L9.33333 14L17.5 5.83332"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowLeftIcon;