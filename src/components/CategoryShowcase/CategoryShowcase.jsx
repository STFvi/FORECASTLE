import { Link } from 'react-router-dom';
import './CategoryShowcase.css';

const CategoryShowcase = () => {
    const categories = [
        {
            id: 'sneakers',
            name: 'Sneakers',
            tagline: 'Step Into Style',
            description: 'Premium footwear from top brands. Air Jordans, Yeezys, Nike Dunks and more.',
            link: '/products?category=sneakers',
            icon: '👟',
            accentColor: '#C9A876'
        },
        {
            id: 'tshirts',
            name: 'T-Shirts',
            tagline: 'Wear Your Statement',
            description: 'Premium cotton tees and oversized streetwear. Quality meets comfort.',
            link: '/products?category=tshirts',
            icon: '👕',
            accentColor: '#2180A5'
        },
        {
            id: 'jerseys',
            name: 'Jerseys',
            tagline: 'Represent Your Club',
            description: 'Official club jerseys from Barcelona, Real Madrid, Manchester United and more.',
            link: '/products?category=jerseys',
            icon: '⚽',
            accentColor: '#2D5F3F'
        }
    ];

    return (
        <section className="category-showcase">
            {categories.map((category, index) => (
                <div
                    key={category.id}
                    className={`category-showcase__section category-showcase__section--${category.id}`}
                    style={{ '--accent-color': category.accentColor }}
                >
                    {/* Animated Background */}
                    <div className="category-showcase__bg">
                        <div className="category-showcase__particles">
                            {[...Array(15)].map((_, i) => (
                                <div
                                    key={i}
                                    className="category-showcase__particle"
                                    style={{
                                        '--i': i,
                                        '--x': `${Math.random() * 100}%`,
                                        '--y': `${Math.random() * 100}%`,
                                        '--delay': `${Math.random() * 5}s`,
                                        '--duration': `${10 + Math.random() * 10}s`
                                    }}
                                />
                            ))}
                        </div>
                        <div className="category-showcase__gradient" />
                        <div className="category-showcase__floating-icon">
                            <span>{category.icon}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="category-showcase__content">
                        <span className="category-showcase__number">0{index + 1}</span>
                        <h2 className="category-showcase__title">{category.name}</h2>
                        <p className="category-showcase__tagline">{category.tagline}</p>
                        <p className="category-showcase__description">{category.description}</p>
                        <Link
                            to={category.link}
                            className="category-showcase__btn"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Explore {category.name}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Decorative Elements */}
                    <div className="category-showcase__decor">
                        <div className="category-showcase__line category-showcase__line--1" />
                        <div className="category-showcase__line category-showcase__line--2" />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default CategoryShowcase;
