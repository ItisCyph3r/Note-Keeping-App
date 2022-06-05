import React from 'react';
import './footer.css';
export default function Footer() {
    const date = new Date().getFullYear();
    return (
        <>
            <footer>
                <p>
                    🏋️‍♀️ {date}
                </p>
            </footer>
        </>
    );
}
