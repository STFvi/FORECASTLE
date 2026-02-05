import './AboutSection.css';

const AboutSection = () => {
    const values = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                </svg>
            ),
            title: 'Premium Quality',
            description: 'Every product is hand-selected for exceptional quality and craftsmanship.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
            ),
            title: 'Passion Driven',
            description: 'We combine our love for fashion with artisan coffee culture.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
            ),
            title: 'Curated Experience',
            description: 'From browsing to sipping, every moment is designed to delight.'
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
            ),
            title: 'Community First',
            description: 'Building a community of style enthusiasts and coffee lovers.'
        }
    ];

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about__grid">
                    {/* Left Content */}
                    <div className="about__content">
                        <div className="about__badge">Our Story</div>
                        <h2 className="about__title">
                            Where Style Meets <span className="text-gradient">Comfort</span>
                        </h2>
                        <div className="about__text">
                            <p>
                                ECNOOR was born from a simple idea: what if your favorite shopping destination
                                was also your favorite coffee spot? We've created a unique space where premium
                                fashion and artisan coffee culture exist in perfect harmony.
                            </p>
                            <p>
                                Our carefully curated collection features authentic club jerseys from the world's
                                greatest teams, premium footwear from leading brands, and essential apparel crafted
                                from the finest fabrics. Each piece is selected with the same care we put into
                                crafting the perfect cup.
                            </p>
                            <p>
                                Whether you're here to discover the latest in streetwear, find your team's newest kit,
                                or simply enjoy a moment of calm with our signature espresso — welcome to ECNOOR.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="about__stats">
                            <div className="about__stat">
                                <span className="about__stat-number">5+</span>
                                <span className="about__stat-label">Years of Excellence</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-number">10K+</span>
                                <span className="about__stat-label">Happy Customers</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-number">50+</span>
                                <span className="about__stat-label">Premium Brands</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Values Grid */}
                    <div className="about__values">
                        {values.map((value, index) => (
                            <div key={index} className="about__value-card">
                                <div className="about__value-icon">{value.icon}</div>
                                <h3 className="about__value-title">{value.title}</h3>
                                <p className="about__value-desc">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="about__decoration about__decoration--1"></div>
            <div className="about__decoration about__decoration--2"></div>
        </section>
    );
};

export default AboutSection;
