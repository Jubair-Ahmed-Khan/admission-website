import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const University = (props) => {

    // destructuring 
    const { img, name, established, address, area, formFillupFee } = props.university;

    const url = "./images/" + img; // image link

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />; // cart icon font-awesome


    return (
        <div>
            {/* single university  */}
            <div className="col">
                <div className="card h-100" style={{ backgroundColor: "lightgray" }}>
                    {/* card image  */}
                    <img src={url} className="card-img-top" alt="..." style={{ height: "200px" }} />

                    {/* card info */}
                    <div className="card-body">
                        <h5><span className="fw-bolder text-primary">Name: </span>{name}</h5>
                        <p><span className="fw-bolder text-primary">Established: </span>{established}</p>
                        <p><span className="fw-bolder text-primary">Address: </span>{address}</p>
                        <p><span className="fw-bolder text-primary">Area: </span>{area}</p>
                        <p><span className="fw-bolder text-primary">Form Fillup Cost: </span>{formFillupFee} TK</p>
                    </div>

                    {/* card footer  */}
                    <div className="card-footer">
                        {/* card submit button  */}
                        <button
                            onClick={() => props.handleBtn(props.university)}
                            type="button"
                            className="btn btn-success text-white w-100"
                        >
                            {cartIcon} <span className="ms-2">Add To Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default University;