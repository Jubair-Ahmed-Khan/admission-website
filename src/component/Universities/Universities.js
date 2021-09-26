import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import University from '../University/University';

const Universities = () => {
    const [universities, setUniversities] = useState([]);
    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        fetch('./university.json')
            .then(res => res.json())
            .then(data => setUniversities(data))

    }, [])

    const handleBtn = (university) => {

        const newUniversity = [...cart, university];
        setCart(newUniversity);
        let newPrice = price + university.formFillupFee;
        setPrice(newPrice);

    };

    return (
        <div className="container-fluid my-5">
            <div className="row mt-3">
                <div className="col-md-9 border-end">
                    <div className="row row-cols-1 row-cols-lg-3 g-4">
                        {universities.map((university) => (
                            <University key={university.key} university={university} handleBtn={handleBtn}></University>
                        ))}
                    </div>
                </div>
                <div className="col-md-3">
                    <h5 className="text-center text-primary">
                        Selected Items: {cart.length}
                    </h5>
                    <h5 className="text-center text-primary">
                        Total Cost: {price}
                    </h5>
                    <hr />
                    {cart.map((universities) => (
                        <Cart cart={cart} info={universities} key={universities.key}></Cart>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Universities;