import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15,
            ...options,
        };

        const observer = new IntersectionObserver(([entry]) => {
            // Once it's intersecting, we set it to true and keep it that way for entering animations
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                if (targetRef.current) {
                    observer.unobserve(targetRef.current);
                }
            }
        }, observerOptions);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [options]);

    return [targetRef, isIntersecting];
};
