import React from 'react';

//** Changing nav class to function  */
const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartConatiner}>
                <img style={styles.cartIcon}
                    src="https://image.flaticon.com/icons/png/512/1170/1170678.png"
                    alt="cart-icon"
                />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}


const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartConatiner: {
        position: 'relative'
    }
}

export default Navbar;
