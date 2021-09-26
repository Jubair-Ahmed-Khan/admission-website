import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const University = (props) => {
    const { img, name, established, address, area, formFillupFee } = props.university;

    const url = "./images/" + img;

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;


    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={url} className="card-img-top" alt="..." style={{ height: "200px" }} />
                    <div className="card-body">
                        <h5><span className="fw-bolder text-primary">Name: </span>{name}</h5>
                        <p><span className="fw-bolder text-primary">Established: </span>{established}</p>
                        <p><span className="fw-bolder text-primary">Address: </span>{address}</p>
                        <p><span className="fw-bolder text-primary">Area: </span>{area}</p>
                        <p><span className="fw-bolder text-primary">Form Fillup Cost: </span>{formFillupFee} TK</p>
                    </div>
                    <div className="card-footer">
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