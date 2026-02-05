import './AboutPage.css';

const AboutPage = () => {
    const team = [
        { name: 'Alex Johnson', role: 'Founder & CEO', emoji: '👔' },
        { name: 'Sarah Chen', role: 'Creative Director', emoji: '🎨' },
        { name: 'Marcus Williams', role: 'Head of Operations', emoji: '⚙️' },
        { name: 'Emma Rodriguez', role: 'Customer Experience', emoji: '💬' },
    ];

    const values = [
        { icon: '✨', title: 'Quality First', description: 'We source only authentic, premium products from trusted suppliers worldwide.' },
        { icon: '🌍', title: 'Sustainability', description: 'Committed to eco-friendly practices and sustainable fashion choices.' },
        { icon: '🤝', title: 'Community', description: 'Building a community of fashion enthusiasts who share our passion.' },
        { icon: '💎', title: 'Excellence', description: 'Every detail matters, from product selection to customer service.' },
    ];

    const milestones = [
        { year: '2020', event: 'ECNOOR Founded' },
        { year: '2021', event: 'Launched Coffee House' },
        { year: '2022', event: 'Expanded Jersey Collection' },
        { year: '2023', event: '10,000+ Happy Customers' },
        { year: '2024', event: 'International Shipping' },
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero__content">
                    <span className="about-hero__badge">Our Story</span>
                    <h1 className="about-hero__title">
                        About <span className="text-gradient">ECNOOR</span>
                    </h1>
                    <p className="about-hero__subtitle">
                        Where premium fashion meets exceptional coffee experiences.
                        We're more than a store — we're a destination.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="about-story">
                <div className="container">
                    <div className="about-story__grid">
                        <div className="about-story__content">
                            <h2>Our Journey</h2>
                            <p>
                                ECNOOR was born from a simple idea: create a space where fashion enthusiasts
                                could discover authentic premium products while enjoying artisan coffee.
                            </p>
                            <p>
                                What started as a small boutique has grown into a destination for those who
                                appreciate quality, authenticity, and style. Every sneaker, jersey, and
                                coffee blend we offer is carefully curated to meet our high standards.
                            </p>
                            <p>
                                Today, ECNOOR serves customers worldwide, bringing together a community
                                united by their love for fashion and quality experiences.
                            </p>
                        </div>
                        <div className="about-story__stats">
                            <div className="about-story__stat">
                                <span className="about-story__stat-value">10K+</span>
                                <span className="about-story__stat-label">Happy Customers</span>
                            </div>
                            <div className="about-story__stat">
                                <span className="about-story__stat-value">500+</span>
                                <span className="about-story__stat-label">Products</span>
                            </div>
                            <div className="about-story__stat">
                                <span className="about-story__stat-value">25+</span>
                                <span className="about-story__stat-label">Countries</span>
                            </div>
                            <div className="about-story__stat">
                                <span className="about-story__stat-value">100%</span>
                                <span className="about-story__stat-label">Authentic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values">
                <div className="container">
                    <h2 className="about-section-title">Our Values</h2>
                    <div className="about-values__grid">
                        {values.map((value, index) => (
                            <div key={index} className="about-value-card">
                                <span className="about-value-card__icon">{value.icon}</span>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="about-timeline">
                <div className="container">
                    <h2 className="about-section-title">Our Milestones</h2>
                    <div className="about-timeline__track">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="about-timeline__item">
                                <span className="about-timeline__year">{milestone.year}</span>
                                <span className="about-timeline__event">{milestone.event}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="about-team">
                <div className="container">
                    <h2 className="about-section-title">Meet Our Team</h2>
                    <div className="about-team__grid">
                        {team.map((member, index) => (
                            <div key={index} className="about-team-card">
                                <div className="about-team-card__avatar">{member.emoji}</div>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="container">
                    <h2>Ready to Experience ECNOOR?</h2>
                    <p>Discover our collection and visit our coffee house</p>
                    <div className="about-cta__buttons">
                        <a href="/products" className="btn btn-primary">Shop Now</a>
                        <a href="/cafe" className="btn btn-secondary">Visit Café</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
