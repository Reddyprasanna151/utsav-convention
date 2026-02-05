import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseGsapOptions {
    trigger?: string | Element | null;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    pin?: boolean;
    markers?: boolean;
    toggleActions?: string;
    once?: boolean;
}

export function useGsap<T extends Element>(
    animation: (element: T, gsapInstance: typeof gsap) => gsap.core.Timeline | gsap.core.Tween | void,
    deps: React.DependencyList = [],
    options?: UseGsapOptions
) {
    const elementRef = useRef<T>(null);
    const timelineRef = useRef<gsap.core.Timeline | gsap.core.Tween | null>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const ctx = gsap.context(() => {
            if (options?.trigger) {
                const scrollTrigger: ScrollTrigger.Vars = {
                    trigger: options.trigger || element,
                    start: options.start || 'top 80%',
                    end: options.end || 'bottom 20%',
                    scrub: options.scrub,
                    pin: options.pin,
                    markers: options.markers,
                    toggleActions: options.toggleActions || 'play none none reverse',
                    once: options.once,
                };

                const tl = gsap.timeline({ scrollTrigger });
                timelineRef.current = tl;
                animation(element, gsap);
            } else {
                const result = animation(element, gsap);
                if (result) timelineRef.current = result;
            }
        }, element);

        return () => {
            ctx.revert();
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
        };
    }, deps);

    return elementRef;
}

export function useScrollProgress() {
    const ref = useRef<HTMLElement>(null);
    const progressRef = useRef(0);

    useEffect(() => {
        if (!ref.current) return;

        ScrollTrigger.create({
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            onUpdate: (self) => {
                progressRef.current = self.progress;
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return { ref, progress: progressRef };
}

export function useParallax(speed: number = 0.5) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        gsap.to(ref.current, {
            yPercent: -50 * speed,
            ease: 'none',
            scrollTrigger: {
                trigger: ref.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [speed]);

    return ref;
}

export function useMagneticEffect(strength: number = 0.3) {
    const ref = useRef<HTMLElement>(null);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            const element = ref.current;
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) * strength;
            const deltaY = (e.clientY - centerY) * strength;

            gsap.to(element, {
                x: deltaX,
                y: deltaY,
                duration: 0.3,
                ease: 'power2.out',
            });
        },
        [strength]
    );

    const handleMouseLeave = useCallback(() => {
        const element = ref.current;
        if (!element) return;

        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
        });
    }, []);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [handleMouseMove, handleMouseLeave]);

    return ref;
}

export function useInView(threshold: number = 0.2) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                isInView.current = entry.isIntersecting;
            },
            { threshold }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold]);

    return { ref, isInView };
}

export function useReducedMotion() {
    const mediaQuery = typeof window !== 'undefined'
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;

    return mediaQuery?.matches ?? false;
}
