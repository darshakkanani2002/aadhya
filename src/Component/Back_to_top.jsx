import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`back-to-top-container ${isVisible ? 'active' : ''}`}
            onClick={scrollToTop}
        >
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path
                        className='back-to-top-button'
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.03516 0.416666L7.03516 15H8.28516L8.28516 0.416666H7.03516Z"
                    ></path>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.28516 1.04115C8.28516 3.98115 5.70016 6.38281 2.94349 6.38281H2.31849V5.13281H2.94349C5.03599 5.13281 7.03516 3.26448 7.03516 1.04115V0.416979H8.28516V1.04115Z"
                    ></path>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.03333 1.04115C7.03333 3.98115 9.61833 6.38281 12.375 6.38281H13V5.13281H12.375C10.2817 5.13281 8.28333 3.26448 8.28333 1.04115V0.416979H7.03333V1.04115Z"
                    ></path>
                </g>
            </svg>
        </div>
    );
};

export default BackToTopButton;
