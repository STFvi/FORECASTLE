import { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="hero">
            {/* Animated Background Particles */}
            <div className="hero__particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="hero__particle" style={{
                        '--delay': `${i * 0.3}s`,
                        '--x': `${Math.random() * 100}%`,
                        '--duration': `${15 + Math.random() * 10}s`
                    }}></div>
                ))}
            </div>

            <div className="hero__gradient-overlay"></div>

            {/* Simple Background */}
            <div className="hero__interior visible">
                <div className="hero__interior-bg"></div>
                <div className="hero__spotlight"></div>
            </div>

            {/* Hero Content */}
            <div className={`hero__content ${showContent ? 'visible' : ''}`}>
                <h1 className="hero__title">
                    <span className="hero__title-brand">ECNOOR</span>
                </h1>

                <p className="hero__subtitle">
                    Where premium fashion meets artisan coffee. Discover exclusive sneakers,
                    official club jerseys, and premium apparel — all in one exclusive destination.
                </p>

                <div className="hero__cta-group">
                    <a href="/products" className="btn btn-primary hero__cta">
                        Explore Collection
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="/cafe" className="btn btn-secondary hero__cta">
                        Visit Our Café
                    </a>
                </div>

                <div className="hero__stats">
                    <div className="hero__stat">
                        <span className="hero__stat-value">4</span>
                        <span className="hero__stat-label">Premium Sneakers</span>
                    </div>
                    <div className="hero__stat-divider"></div>
                    <div className="hero__stat">
                        <span className="hero__stat-value">5</span>
                        <span className="hero__stat-label">Top Club Jerseys</span>
                    </div>
                    <div className="hero__stat-divider"></div>
                    <div className="hero__stat">
                        <span className="hero__stat-value">100%</span>
                        <span className="hero__stat-label">Authentic</span>
                    </div>
                </div>
            </div>

            <button
                className={`hero__scroll-indicator ${showContent ? 'visible' : ''}`}
                onClick={() => {
                    const heroSection = document.querySelector('.hero');
                    if (heroSection) {
                        window.scrollTo({
                            top: heroSection.offsetHeight,
                            behavior: 'smooth'
                        });
                    }
                }}
            >
                <span>Scroll to explore</span>
                <div className="hero__scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </div>
            </button>
        </section>
    );
};

export default HeroSection;
