import './CoffeeSection.css';
import coffeeImg from '../../assets/images/coffee_ambiance_1769679061641.png';

const CoffeeSection = () => {
    const menuHighlights = [
        { name: 'Signature Espresso', price: 4.50, description: 'Rich, bold, perfectly balanced' },
        { name: 'Artisan Latte', price: 5.50, description: 'Smooth, creamy, handcrafted art' },
        { name: 'Cold Brew Reserve', price: 5.00, description: '12-hour steeped perfection' },
        { name: 'Fresh Pastries', price: 3.50, description: 'Baked fresh daily' },
    ];

    return (
        <section className="coffee" id="coffee">
            <div className="coffee__bg-image">
                <img src={coffeeImg} alt="ECNOOR Coffee House" />
                <div className="coffee__bg-overlay"></div>
            </div>

            <div className="container">
                <div className="coffee__grid">
                    {/* Content Side */}
                    <div className="coffee__content">
                        <div className="coffee__badge">Coffee House</div>
                        <h2 className="coffee__title">
                            More Than <span className="text-gradient">Fashion</span>
                        </h2>
                        <p className="coffee__description">
                            Take a break from shopping and immerse yourself in our artisan coffee experience.
                            Hand-selected beans, expert baristas, and a cozy atmosphere that makes every visit memorable.
                        </p>

                        {/* Menu Highlights */}
                        <div className="coffee__menu">
                            <h3 className="coffee__menu-title">Menu Highlights</h3>
                            <div className="coffee__menu-items">
                                {menuHighlights.map((item, index) => (
                                    <div key={index} className="coffee__menu-item">
                                        <div className="coffee__menu-item-header">
                                            <span className="coffee__menu-item-name">{item.name}</span>
                                            <span className="coffee__menu-item-dots"></span>
                                            <span className="coffee__menu-item-price">${item.price.toFixed(2)}</span>
                                        </div>
                                        <p className="coffee__menu-item-desc">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="coffee__info-cards">
                            <div className="coffee__info-card">
                                <div className="coffee__info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div className="coffee__info-content">
                                    <span className="coffee__info-label">Opening Hours</span>
                                    <span className="coffee__info-value">8:00 AM - 10:00 PM</span>
                                </div>
                            </div>
                            <div className="coffee__info-card">
                                <div className="coffee__info-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className="coffee__info-content">
                                    <span className="coffee__info-label">Location</span>
                                    <span className="coffee__info-value">Downtown, Premium District</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="coffee__cta-group">
                            <a href="#reserve" className="btn btn-primary">
                                Reserve a Table
                            </a>
                            <a href="#menu" className="btn btn-secondary">
                                View Full Menu
                            </a>
                        </div>
                    </div>

                    {/* Image Side - Visual Elements */}
                    <div className="coffee__visual">
                        <div className="coffee__feature-card coffee__feature-card--1">
                            <span className="coffee__feature-number">15+</span>
                            <span className="coffee__feature-label">Coffee Varieties</span>
                        </div>
                        <div className="coffee__feature-card coffee__feature-card--2">
                            <span className="coffee__feature-number">100%</span>
                            <span className="coffee__feature-label">Arabica Beans</span>
                        </div>
                        <div className="coffee__feature-card coffee__feature-card--3">
                            <span className="coffee__feature-number">★ 4.9</span>
                            <span className="coffee__feature-label">Customer Rating</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoffeeSection;
