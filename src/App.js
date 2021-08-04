import React from "react";
import Cart from "./cart";
import Navbar from "./Navbar";
import * as firebase from 'firebase';

class App extends React.Component {
  // var products = [1, 2, 3, 4];


  constructor() {
    super();
    // console.log('contr');
    this.state = {
      products: [],
      loading: true
    }
    // this.increaseQuantity= this.increaseQuantity.bind(this);
  }

  componentDidMount() {
    console.log('monted');
    // console.log(firebase);
    // console.log(firebase.default);
    // console.log('FIRESTORE');
    // console.log(firebase.default.firestore().collection('products'));
    firebase.default
      .firestore()
      .collection('Products')
      .get()
      .then((snapshot) => {
        // console.log(snapshot);
        // console.log(snapshot.docs);

        const products = [];
        // const productsId = [];
        snapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          products.push(data);
          console.log(data);
          // productsId.push(doc.id);
        })
        this.setState(
          {
            products,
            loading: false
          }
          // () => {
          //   this.products = products;
          //   // for (let i = 0; i < productsId.length; i++) {
          //   //   this.products.id = productsId[i];
          //   // }
          // }
        )
      })
    // console.log(firebase.default.app);
    // console.log(firebase.app);
    // console.log(firebase.app());
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

  countQty = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((p) => {
      count += p.qty;
    })
    return count;
  }

  totalP = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((p) => {
      count += p.price * p.qty;
    })
    return count;
  }


  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar
          count={this.countQty()}
          total={this.totalP()}
        />
        <Cart
          products={products}
          increaseQuantity={this.handleIncreaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          deleteQuantity={this.handleDelete}
        />
        <div className="totalPrice" style={{ fontSize: 26, padding: 10, fontFamily: 'cursive' }}>Total Price: {this.totalP()}</div>
        {(loading && <h1>Loading...</h1>)}
        {/* this below lines are interesting */}
        {/* {products} */}
        {/* {products+7} */}
        {/* {products+'jsn'} */}

        {/* {products.map((item) => {
        return item + 7;
      })} */}


      </div>
    );
  }
}



export default App;










// junk
/*

{
  price: 9999,
  title: 'Mobile Phone',
  qty: 10,
  img: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80',
  id: '9999Mobile'
},
{
  price: 99,
  title: 'Watch',
  qty: 1,
  img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  id: '99Watch'
},
{
  price: 99990,
  title: 'Laptop',
  qty: 13,
  img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1007&q=80',
  id: '99990Laptop'
},
{
  price: 49,
  title: 'Ear Phone',
  qty: 7,
  img: 'https://images.unsplash.com/photo-1520186994231-6ea0019d8d51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80',
  id: '49Ear'
}

*/