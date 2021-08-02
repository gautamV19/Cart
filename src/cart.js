import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 9999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id: '9999Mobile'
                },
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: '99Watch'
                },
                {
                    price: 99990,
                    title: 'Laptop',
                    qty: 13,
                    img: '',
                    id: '99990Laptop'
                },
                {
                    price: 49,
                    title: 'Ear Phone',
                    qty: 7,
                    img: '',
                    id: '49Ear'
                }
            ]
        }
        // this.increaseQuantity= this.increaseQuantity.bind(this);
    }
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {/* <CartItem qty={1} price={799} title={'Watch'} img={''} /> */}
                {/* {this.state.products.map((item) => {
                   return <CartItem qty={item.qty} price={item.price} title={item.title} img={item.img} />
                })} */}
                {
                    products.map((pdt) => {
                        return (
                            <CartItem
                                product={pdt}
                                key={pdt.id}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Cart;