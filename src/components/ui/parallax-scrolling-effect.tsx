import React, { useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
    children: React.ReactNode;
    backgroundImage: string;
}

export const ParallaxSection = ({ children, backgroundImage }: ParallaxSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const featureRef = useRef<HTMLDivElement>(null);
    const opaqueRef = useRef<HTMLDivElement>(null);
    const [showOpaque, setShowOpaque] = useState(false);

    useEffect(() => {
        const featureEl = featureRef.current;
        const containerEl = containerRef.current;
        if (!featureEl || !containerEl) return;

        // 1) Compute initial zoom factor (e.g. 250% → 2.5)
        const computedBgSize = window
            .getComputedStyle(featureEl)
            .getPropertyValue('background-size'); // e.g. "250%"
        // Fallback if computedBgSize is not a percentage
        let zoomFactor = 2.5;
        if (computedBgSize.includes('%')) {
            zoomFactor = parseFloat(computedBgSize) / 100;
        }

        // 2) Measure the element's width in px
        const featureWidth = featureEl.clientWidth; // in px

        // 3) Calculate the "size" in px that corresponds to zoomFactor × width
        const initialSizePx = zoomFactor * featureWidth;

        // 4) Detect browser for the opaque overlay logic
        const isChrome =
            /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        const isSafari =
            /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

        if (!isChrome && !isSafari) {
            // Only show opaque overlay on non‐Chrome/Safari
            setShowOpaque(true);
        }

        // Scroll handler
        const onScroll = () => {
            // Get the container's distance from the top of the viewport
            const rect = containerEl.getBoundingClientRect();

            // Calculate how far we've scrolled past the top of the container
            // (If it's at the top of the window, scrolled is 0. If it's halfway up, scrolled is positive).
            // We only want the effect when the section is near or in the viewport.
            const scrollOffset = window.innerHeight - rect.top;

            if (scrollOffset < 0) return; // Not in view yet

            // Adjust the divisor to control the speed of the zoom effect
            const newSize = initialSizePx - scrollOffset / 3;

            // Only update if the new size is still larger than the element's width
            if (newSize > featureWidth) {
                featureEl.style.backgroundSize = `${newSize}px`;
                const blurAmount = Math.max(0, scrollOffset / 200 - 2); // delay the blur slightly
                featureEl.style.filter = `blur(${blurAmount}px)`;

                // Use a relative fade based on the container's height instead of document.documentElement.scrollHeight
                const fadeRatio = scrollOffset / (containerEl.scrollHeight + window.innerHeight);
                featureEl.style.opacity = `${1 - fadeRatio * 1.5}`;
            }

            // If opaque overlay exists, update its opacity
            if (opaqueRef.current) {
                const opacity = Math.min(1, scrollOffset / 3000);
                opaqueRef.current.style.opacity = Math.max(0, opacity).toString();
            }
        };

        // Attach listener
        window.addEventListener('scroll', onScroll, { passive: true });
        // Trigger once on mount
        onScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full text-white min-h-screen">
            {/* Background Feature section (Sticky instead of fixed so it flows with the page) */}
            <div className="absolute inset-0 overflow-hidden z-0 clip-path-bounds" style={{ clipPath: 'inset(0 0 0 0)' }}>
                <div
                    ref={featureRef}
                    className="fixed top-0 left-0 right-0 w-full h-screen z-0 opacity-100"
                    style={{
                        backgroundImage: `url('${backgroundImage}')`,
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '250%',
                        backgroundColor: 'transparent',
                    }}
                >
                    {showOpaque && (
                        <div
                            ref={opaqueRef}
                            className="absolute inset-0 bg-[#d2d6f1]"
                            style={{ opacity: 0 }}
                        />
                    )}
                    {/* Gradient overlay to ensure text is readable, but lightened for better visibility */}
                    <div className="absolute inset-0 bg-background-dark/40 bg-gradient-to-b from-background-dark/80 via-transparent to-background-dark/80"></div>
                </div>
            </div>

            {/* Content section */}
            <div className="relative z-10 w-full h-full pt-16">
                {children}
            </div>
        </div>
    );
};

export default ParallaxSection;
