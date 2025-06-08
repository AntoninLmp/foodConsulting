import React from 'react';

const Footer = () => (
    <footer style={{
        background: '#222',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem 0',
        left: 0,
        bottom: 0,
        width: '100%',
    }}>
        <p>&copy; {new Date().getFullYear()} Food Consulting. All rights reserved.</p>
    </footer>
);

export default Footer;