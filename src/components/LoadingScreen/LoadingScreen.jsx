import { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadComplete }) => {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('loading'); // loading -> revealing -> done

    useEffect(() => {
        // Loading progress - complete in ~800ms
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 12;
            });
        }, 70);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            // Start reveal animation
            setTimeout(() => setPhase('revealing'), 200);
            // Complete and hide after transition
            setTimeout(() => {
                setPhase('done');
                onLoadComplete?.();
            }, 800);
        }
    }, [progress, onLoadComplete]);

    if (phase === 'done') return null;

    const brandName = 'FORECASTLE';

    return (
        <div className={`loading-screen ${phase}`}>
            {/* Animated Background with Aurora Effect */}
            <div className="loading-screen__bg">
                <div className="loading-screen__aurora"></div>
                <div className="loading-screen__particles">
                    {[...Array(30)].map((_, i) => (
                        <div key={i} className="loading-screen__particle" style={{ '--i': i }}></div>
                    ))}
                </div>
                <div className="loading-screen__grid"></div>
            </div>

            {/* Main Content */}
            <div className="loading-screen__content">
                {/* Outer Orbital Rings */}
                <div className="loading-screen__orbits">
                    <div className="loading-screen__orbit loading-screen__orbit--1"></div>
                    <div className="loading-screen__orbit loading-screen__orbit--2"></div>
                    <div className="loading-screen__orbit loading-screen__orbit--3"></div>
                </div>

                {/* Main Logo Container with Glow */}
                <div className="loading-screen__logo-container">
                    {/* Hexagon Frame */}
                    <div className="loading-screen__hexagon">
                        <svg viewBox="0 0 100 100">
                            <defs>
                                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#c9a876" />
                                    <stop offset="50%" stopColor="#f5e6c8" />
                                    <stop offset="100%" stopColor="#8b7355" />
                                </linearGradient>
                            </defs>
                            <polygon
                                className="loading-screen__hexagon-path"
                                points="50,2 95,25 95,75 50,98 5,75 5,25"
                                fill="none"
                                stroke="url(#hexGradient)"
                                strokeWidth="0.5"
                            />
                            <polygon
                                className="loading-screen__hexagon-fill"
                                points="50,2 95,25 95,75 50,98 5,75 5,25"
                                fill="none"
                                stroke="url(#hexGradient)"
                                strokeWidth="1.5"
                                strokeDasharray="400"
                                strokeDashoffset={400 - (progress * 4)}
                            />
                        </svg>
                    </div>

                    {/* Anchor Icon - Nautical Theme for "Forecastle" */}
                    <div className="loading-screen__icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="5" r="2" />
                            <line x1="12" y1="7" x2="12" y2="21" />
                            <path d="M5 12c0 4 3 7 7 9 4-2 7-5 7-9" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <path d="M9 18l3 5 3-5" />
                        </svg>
                    </div>
                </div>

                {/* Brand Name with Staggered Animation */}
                <div className="loading-screen__brand">
                    {brandName.split('').map((letter, index) => (
                        <span
                            key={index}
                            className="loading-screen__letter"
                            style={{ '--delay': index }}
                        >
                            {letter}
                        </span>
                    ))}
                </div>

                {/* Animated Tagline */}
                <div className="loading-screen__tagline">
                    <span className="loading-screen__tagline-text">Premium Fashion & Coffee</span>
                    <div className="loading-screen__tagline-line"></div>
                </div>

                {/* Premium Loading Bar */}
                <div className="loading-screen__loader">
                    <div className="loading-screen__loader-track">
                        <div
                            className="loading-screen__loader-fill"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        >
                            <div className="loading-screen__loader-glow"></div>
                        </div>
                    </div>
                    <div className="loading-screen__loader-info">
                        <span className="loading-screen__loader-label">Loading Experience</span>
                        <span className="loading-screen__loader-percent">{Math.round(Math.min(progress, 100))}%</span>
                    </div>
                </div>
            </div>

            {/* Decorative Corner Frames */}
            <div className="loading-screen__frame loading-screen__frame--tl"></div>
            <div className="loading-screen__frame loading-screen__frame--tr"></div>
            <div className="loading-screen__frame loading-screen__frame--bl"></div>
            <div className="loading-screen__frame loading-screen__frame--br"></div>
        </div>
    );
};

export default LoadingScreen;
