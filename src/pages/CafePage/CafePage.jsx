import './CafePage.css';

const CafePage = () => {
    const menuItems = [
        { name: 'Espresso', price: '$3.50', description: 'Rich, bold, and perfectly extracted' },
        { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk and foam' },
        { name: 'Latte', price: '$5.00', description: 'Smooth espresso with creamy milk' },
        { name: 'Mocha', price: '$5.50', description: 'Chocolate and espresso harmony' },
        { name: 'Cold Brew', price: '$4.00', description: '18-hour steeped perfection' },
        { name: 'Affogato', price: '$6.00', description: 'Espresso over vanilla gelato' },
    ];

    const pastries = [
        { name: 'Croissant', price: '$3.00' },
        { name: 'Danish Pastry', price: '$3.50' },
        { name: 'Chocolate Muffin', price: '$3.00' },
        { name: 'Cinnamon Roll', price: '$4.00' },
    ];

    return (
        <div className="cafe-page">
            {/* Hero Section */}
            <section className="cafe-hero">
                <div className="cafe-hero__overlay"></div>
                <div className="cafe-hero__content">
                    <h1 className="cafe-hero__title">Where Fashion Meets Coffee</h1>
                    <p className="cafe-hero__subtitle">
                        Experience the perfect blend of premium fashion browsing and artisan coffee in our exclusive café
                    </p>
                </div>
            </section>

            {/* Menu Section */}
            <section className="cafe-menu">
                <div className="container">
                    <div className="cafe-menu__header">
                        <h2 className="cafe-menu__title">Our <span className="text-gradient">Menu</span></h2>
                        <p className="cafe-menu__subtitle">Crafted with passion, served with style</p>
                    </div>

                    <div className="cafe-menu__grid">
                        {/* Coffee Section */}
                        <div className="cafe-menu__category">
                            <h3 className="cafe-menu__category-title">Coffee Selection</h3>
                            <div className="cafe-menu__items">
                                {menuItems.map((item, index) => (
                                    <div key={index} className="cafe-menu__item">
                                        <div className="cafe-menu__item-header">
                                            <span className="cafe-menu__item-name">{item.name}</span>
                                            <span className="cafe-menu__item-price">{item.price}</span>
                                        </div>
                                        <p className="cafe-menu__item-desc">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pastries Section */}
                        <div className="cafe-menu__category">
                            <h3 className="cafe-menu__category-title">Fresh Pastries</h3>
                            <div className="cafe-menu__items">
                                {pastries.map((item, index) => (
                                    <div key={index} className="cafe-menu__item cafe-menu__item--simple">
                                        <span className="cafe-menu__item-name">{item.name}</span>
                                        <span className="cafe-menu__item-price">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="cafe-info">
                <div className="container">
                    <div className="cafe-info__grid">
                        <div className="cafe-info__card">
                            <div className="cafe-info__icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h3>Opening Hours</h3>
                            <p>Monday - Friday: 7AM - 9PM</p>
                            <p>Saturday - Sunday: 8AM - 10PM</p>
                        </div>

                        <div className="cafe-info__card">
                            <div className="cafe-info__icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <h3>Location</h3>
                            <p>123 Fashion Avenue</p>
                            <p>Downtown District</p>
                        </div>

                        <div className="cafe-info__card">
                            <div className="cafe-info__icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                </svg>
                            </div>
                            <h3>Contact</h3>
                            <p>+1 (555) 123-4567</p>
                            <p>cafe@ecnoor.com</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Home Link */}
            <div className="cafe-back">
                <a href="/" className="btn btn-secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default CafePage;
