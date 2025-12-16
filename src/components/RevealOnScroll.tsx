'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './RevealOnScroll.module.css';

interface RevealOnScrollProps {
    children: React.ReactNode;
    width?: '100%' | 'auto';
    delay?: number;
}

const RevealOnScroll = ({ children, width = '100%', delay = 0 }: RevealOnScrollProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`${styles.reveal} ${isVisible ? styles.visible : ''}`}
            style={{ width, transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;
