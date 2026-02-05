import { useState, useEffect } from 'react';
import './AdminPanel.css';

const AdminPanel = ({ onClose, onBack }) => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [orders, setOrders] = useState([
        { id: 1001, customer: 'Rahul Ahmed', total: 285, status: 'Pending', date: '2026-02-05' },
        { id: 1002, customer: 'Fatima Khan', total: 190, status: 'Shipped', date: '2026-02-04' },
        { id: 1003, customer: 'Jamal Hassan', total: 95, status: 'Delivered', date: '2026-02-03' },
        { id: 1004, customer: 'Aisha Begum', total: 325, status: 'Pending', date: '2026-02-05' },
        { id: 1005, customer: 'Karim Uddin', total: 150, status: 'Processing', date: '2026-02-04' },
    ]);

    const [products] = useState([
        { id: 1, name: 'Nike Air Jordan 1', stock: 45, price: 189, category: 'Sneakers' },
        { id: 2, name: 'Adidas Yeezy Boost 350', stock: 23, price: 280, category: 'Sneakers' },
        { id: 3, name: 'FC Barcelona Jersey', stock: 67, price: 95, category: 'Jerseys' },
        { id: 4, name: 'Real Madrid Jersey', stock: 52, price: 95, category: 'Jerseys' },
        { id: 5, name: 'Premium Cotton T-Shirt', stock: 120, price: 45, category: 'T-Shirts' },
    ]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const stats = [
        { label: 'Total Orders', value: orders.length, icon: '📦', color: '#10b981' },
        { label: 'Revenue', value: `৳${orders.reduce((sum, o) => sum + o.total, 0)}`, icon: '💰', color: '#f59e0b' },
        { label: 'Products', value: products.length, icon: '🛍️', color: '#6366f1' },
        { label: 'Pending', value: orders.filter(o => o.status === 'Pending').length, icon: '⏳', color: '#ef4444' },
    ];

    const updateOrderStatus = (id, newStatus) => {
        setOrders(orders.map(order =>
            order.id === id ? { ...order, status: newStatus } : order
        ));
    };

    const renderDashboard = () => (
        <div className="admin-panel__dashboard">
            <div className="admin-panel__stats">
                {stats.map((stat, index) => (
                    <div key={index} className="admin-panel__stat-card" style={{ '--accent': stat.color }}>
                        <span className="admin-panel__stat-icon">{stat.icon}</span>
                        <div className="admin-panel__stat-info">
                            <span className="admin-panel__stat-value">{stat.value}</span>
                            <span className="admin-panel__stat-label">{stat.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="admin-panel__recent">
                <h3>Recent Orders</h3>
                <div className="admin-panel__table-wrapper">
                    <table className="admin-panel__table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.slice(0, 3).map(order => (
                                <tr key={order.id}>
                                    <td>#{order.id}</td>
                                    <td>{order.customer}</td>
                                    <td>৳{order.total}</td>
                                    <td>
                                        <span className={`admin-panel__status admin-panel__status--${order.status.toLowerCase()}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const renderOrders = () => (
        <div className="admin-panel__orders">
            <h3>All Orders</h3>
            <div className="admin-panel__table-wrapper">
                <table className="admin-panel__table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td>#{order.id}</td>
                                <td>{order.customer}</td>
                                <td>{order.date}</td>
                                <td>৳{order.total}</td>
                                <td>
                                    <span className={`admin-panel__status admin-panel__status--${order.status.toLowerCase()}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td>
                                    <select
                                        value={order.status}
                                        onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                                        className="admin-panel__select"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Processing">Processing</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Delivered">Delivered</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderProducts = () => (
        <div className="admin-panel__products">
            <h3>Product Inventory</h3>
            <div className="admin-panel__table-wrapper">
                <table className="admin-panel__table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>#{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>৳{product.price}</td>
                                <td>
                                    <span className={`admin-panel__stock ${product.stock < 30 ? 'admin-panel__stock--low' : ''}`}>
                                        {product.stock}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="admin-panel-overlay">
            <div className="admin-panel">
                {/* Header */}
                <div className="admin-panel__header">
                    <div className="admin-panel__header-left">
                        <button className="admin-panel__back" onClick={onBack} aria-label="Back">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="admin-panel__branding">
                            <span className="admin-panel__badge">🔒 ADMIN</span>
                            <h2>Forecastle Control Panel</h2>
                        </div>
                    </div>
                    <button className="admin-panel__close" onClick={onClose} aria-label="Close">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Tabs */}
                <div className="admin-panel__tabs">
                    <button
                        className={`admin-panel__tab ${activeTab === 'dashboard' ? 'active' : ''}`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        📊 Dashboard
                    </button>
                    <button
                        className={`admin-panel__tab ${activeTab === 'orders' ? 'active' : ''}`}
                        onClick={() => setActiveTab('orders')}
                    >
                        📦 Orders
                    </button>
                    <button
                        className={`admin-panel__tab ${activeTab === 'products' ? 'active' : ''}`}
                        onClick={() => setActiveTab('products')}
                    >
                        🛍️ Products
                    </button>
                </div>

                {/* Content */}
                <div className="admin-panel__content">
                    {activeTab === 'dashboard' && renderDashboard()}
                    {activeTab === 'orders' && renderOrders()}
                    {activeTab === 'products' && renderProducts()}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
