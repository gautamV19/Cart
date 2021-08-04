import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const { products } = props;
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
                            increaseQuantity={props.increaseQuantity}
                            decreaseQuantity={props.decreaseQuantity}
                            deleteQuantity={props.deleteQuantity}
                        />
                    )
                })
            }
        </div>
    );
}


export default Cart;