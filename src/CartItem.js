import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity= this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        // this.state.qty += 1;
        // this above line won't work because for showing the change page has to be 
        // refreshed and if we refresh the page qty will go to 1
        console.log(this, this.state);
        // we have to use setState function here 2 ways are there to use that
        //** way 1 */
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        //** way 2 */
        //here both normal and arrow function works
        // this.setState((prevState) => {
        // return { qty: prevState.qty + 1 }
        // })
        this.setState(function (prevState) {
            return { qty: prevState.qty + 1 }
        })
    }

    render() {
        // const qty1 = this.state.qty; this is one way to do
        //** Objective structuring */
        const { price, title, qty } = this.state;
        console.log(price, title, qty);
        // const { price, title, qty2 } = this.state;
        //** qty2 is undefined  =>  Always give exactly same names of property. All of the below are undefined*/
        // const { a, b, c } = this.state;
        // console.log(a, b, c);
        // const { d, e } = this.state;
        // console.log(d, e);
        // const { f } = this.state;
        // console.log(f);

        return (
            <div className="cart-item">
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{ fontFamily: 'cursive', fontSize: 26 }}>{this.state.title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt='increase'
                            className='action-icons'
                            src='https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg'
                            // onClick={this.increaseQuantity} this is wrong (with normal function)
                            // onClick={this.increaseQuantity.bind(this)} this is right
                            onClick={this.increaseQuantity} // this will work with arrow function
                        />
                        <img
                            alt='decrease'
                            className='action-icons'
                            src='https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg'
                            onClick
                        />
                        <img
                            alt='delete'
                            className='action-icons'
                            src='https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg'
                            onClick
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;