import React from "react";

const Cart = (props) => {

    //destructuring
    const { info } = props;

    return (
        <div>
            {/* show selected universities  */}
            <ul>
                <li className="fw-bold">{info.name}</li>
            </ul>
        </div>
    );
};

export default Cart;