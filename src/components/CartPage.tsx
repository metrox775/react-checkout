import React, { useState } from "react";
import Iframe2 from "./Iframe2";
const CartPage = (): JSX.Element => {
  const [ifram2, setIfrem2] = useState(false);
  const handleSubmit = () => {
    setIfrem2(!ifram2);
  };
  return (
    <div>
      <>
        <span>Check the user Coockies</span>
        <button type="submit" onClick={handleSubmit}>
          Checkout
        </button>
        <div>{ifram2 ? <Iframe2 /> : "Not any set iframes"}</div>
      </>
    </div>
  );
};
export default CartPage;
