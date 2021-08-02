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

    handleIncreaseQuantity = (product) => {
        // console.log('hey increase quantity', product);
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState(
            {
                // products: products // this is working 
                products // this is shorthand to use when both are same
            }
        )

        // console.log('hey increase quantity', product.qty);
        // // console.log('hey increase quantity', qty);
        // this.setState(() => {
        //     product.qty = product.qty + 1;
        //     this.qty = product.qty;
        // })
    }
    //**My try to impliment the function */
    // increaseQuantity = (product) => {
    //     console.log('From cart function  ', product);
    //     // console.log(product.qty);
    //     // product.qty++;
    //     // Above was wrong we get product in another way...
    //     console.log(product.props.product.qty, 'before');
    //     this.setState(
    //         () => {
    //             product.props.product.qty = product.props.product.qty + 1;
    //         }
    //     )
    //     console.log(product.props.product.qty, 'after');
    // }


    //** Decrease Quantity */
    decreaseQuantity = (product) => {
        const { products } = this.state;
        var index = products.indexOf(product);

        if (products[index].qty > 0) {
            products[index].qty -= 1;
            this.setState(
                { products }
            )
        }
    }

    handleDelete = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id);
        // above filter function will return an array of filtered elements
        this.setState(
            {
                products: items
            }
        )
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
                                increaseQuantity={this.handleIncreaseQuantity}
                                decreaseQuantity={this.decreaseQuantity}
                                deleteQuantity={this.handleDelete}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Cart;