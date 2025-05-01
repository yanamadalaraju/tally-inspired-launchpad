import React, { useRef, useState, useEffect, ReactNode } from 'react';

interface ScrollAnimateWrapperProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in' | 'none';
  delay?: number;
  className?: string;
  threshold?: number;
}

const ScrollAnimateWrapper: React.FC<ScrollAnimateWrapperProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.1,
}) => {
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
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (animation === 'none') return '';
    
    const baseClass = 'transition-all duration-700';
    const delayClass = delay ? `delay-${delay}` : '';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClass} ${delayClass} opacity-0 translate-y-10`;
        case 'fade-left':
          return `${baseClass} ${delayClass} opacity-0 -translate-x-10`;
        case 'fade-right':
          return `${baseClass} ${delayClass} opacity-0 translate-x-10`;
        case 'zoom-in':
          return `${baseClass} ${delayClass} opacity-0 scale-95`;
        default:
          return '';
      }
    }
    
    return `${baseClass} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimateWrapper;