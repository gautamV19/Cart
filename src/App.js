import React from "react";
import Cart from "./cart";

function App() {
  // var arr = [1, 2, 3, 4];
  return (
    <div className="App">
      <Cart />
      {/* this below lines are interesting */}
      {/* {arr} */}
      {/* {arr+7} */}
      {/* {arr+'jsn'} */}

      {/* {arr.map((item) => {
        return item + 7;
      })} */}


    </div>
  );
}



export default App;
