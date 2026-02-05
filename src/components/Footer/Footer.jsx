import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        shop: [
            { name: 'All Products', href: '#products' },
            { name: 'Footwear', href: '#shoes' },
            { name: 'Club Jerseys', href: '#jerseys' },
            { name: 'T-Shirts', href: '#tshirts' },
            { name: 'New Arrivals', href: '#new' },
        ],
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'Our Story', href: '#story' },
            { name: 'Careers', href: '#careers' },
            { name: 'Press', href: '#press' },
        ],
        support: [
            { name: 'Contact Us', href: '#contact' },
            { name: 'FAQs', href: '#faq' },
            { name: 'Shipping', href: '#shipping' },
            { name: 'Returns', href: '#returns' },
            { name: 'Size Guide', href: '#sizes' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '#privacy' },
            { name: 'Terms of Service', href: '#terms' },
            { name: 'Cookie Policy', href: '#cookies' },
        ],
    };

    const socialLinks = [
        {
            name: 'Instagram',
            href: 'https://instagram.com',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            )
        },
        {
            name: 'Facebook',
            href: 'https://facebook.com',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
            )
        },
        {
            name: 'YouTube',
            href: 'https://youtube.com',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
            )
        },
    ];

    return (
        <footer className="footer" id="contact">
            <div className="container">
                {/* Newsletter Section */}
                <div className="footer__newsletter">
                    <div className="footer__newsletter-content">
                        <h3 className="footer__newsletter-title">
                            Join the <span className="text-gradient">Forecastle</span> Community
                        </h3>
                        <p className="footer__newsletter-desc">
                            Subscribe for exclusive drops, early access, and special offers.
                        </p>
                    </div>
                    <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="footer__newsletter-input"
                            required
                        />
                        <button type="submit" className="btn btn-primary footer__newsletter-btn">
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Main Footer Content */}
                <div className="footer__main">
                    {/* Brand Column */}
                    <div className="footer__brand">
                        <a href="#home" className="footer__logo">
                            <span className="footer__logo-text">Forecastle</span>
                            <span className="footer__logo-tagline">Fashion & Coffee</span>
                        </a>
                        <p className="footer__brand-desc">
                            Where premium fashion meets artisan coffee. Discover exclusive collections
                            and enjoy the perfect cup in our unique shopping experience.
                        </p>
                        <div className="footer__social">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="footer__social-link"
                                    aria-label={social.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="footer__links-group">
                        <div className="footer__links-column">
                            <h4 className="footer__links-title">Shop</h4>
                            <ul className="footer__links">
                                {footerLinks.shop.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="footer__link">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer__links-column">
                            <h4 className="footer__links-title">Company</h4>
                            <ul className="footer__links">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="footer__link">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer__links-column">
                            <h4 className="footer__links-title">Support</h4>
                            <ul className="footer__links">
                                {footerLinks.support.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="footer__link">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} Forecastle. All rights reserved.
                    </p>
                    <div className="footer__legal-links">
                        {footerLinks.legal.map((link, index) => (
                            <span key={link.name}>
                                <a href={link.href} className="footer__legal-link">{link.name}</a>
                                {index < footerLinks.legal.length - 1 && <span className="footer__legal-divider">•</span>}
                            </span>
                        ))}
                    </div>
                    <div className="footer__payment-icons">
                        <span className="footer__payment-label">Secure Payments</span>
                        <div className="footer__payment-badges">
                            <span className="footer__payment-badge">Visa</span>
                            <span className="footer__payment-badge">Mastercard</span>
                            <span className="footer__payment-badge">bKash</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
