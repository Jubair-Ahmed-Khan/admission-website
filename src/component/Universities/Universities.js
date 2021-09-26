import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import University from '../University/University';

const Universities = () => {
    const [universities, setUniversities] = useState([]); //hook for fetch data
    const [cart, setCart] = useState([]);  // hook for add universities to cart
    const [price, setPrice] = useState(0); // hook for calculate total price

    // fetch data from fake data stored in public folder 
    useEffect(() => {
        fetch('./university.json')
            .then(res => res.json())
            .then(data => setUniversities(data))

    }, [])

    // button click handler function 
    const handleBtn = (university) => {
        const newUniversity = [...cart, university]; // add universities to array
        setCart(newUniversity);
        let newPrice = price + university.formFillupFee; // calculate total price
        setPrice(newPrice);

    };

    return (
        <div className="container-fluid my-5">
            <div className="row mt-3">
                {/* display universities  */}
                <div className="col-md-9">
                    <div className="row row-cols-1 row-cols-lg-3 g-4">
                        {/* mapping universities  */}
                        {universities.map((university) => (
                            <University key={university.key} university={university} handleBtn={handleBtn}></University>
                        ))}
                    </div>
                </div>

                {/* display cart  */}
                <div className="col-md-3 bg-info my-5 my-lg-0 pt-3">
                    <h5 className="text-center text-white">
                        Selected Items: {cart.length}
                    </h5>
                    <h5 className="text-center text-white">
                        Total Cost: {price}
                    </h5>
                    <hr />
                    {/* mapping cart  */}
                    {cart.map((universities) => (
                        <Cart cart={cart} info={universities} key={universities.key}></Cart>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Universities;