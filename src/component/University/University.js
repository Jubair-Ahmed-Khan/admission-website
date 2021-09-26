import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const University = (props) => {

    // destructuring 
    const { img, name, established, address, area, formFillupFee } = props.university;

    // image link
    const url = "./images/" + img;

    // cart icon font-awesome
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

    return (
        <div>
            {/* single university  */}
            <div className="col">
                <div className="card h-100" style={{ backgroundColor: "lightgray" }}>
                    {/* card image  */}
                    <img src={url} className="card-img-top  p-3" alt="..." style={{ height: "200px" }} />

                    {/* card info */}
                    <div className="card-body">
                        <p><span className="fw-bolder text-primary">Name: </span>{name}</p>
                        <p><span className="fw-bolder text-primary">Established: </span>{established}</p>
                        <p><span className="fw-bolder text-primary">Address: </span>{address}</p>
                        <p><span className="fw-bolder text-primary">Area: </span>{area}</p>
                        <p><span className="fw-bolder text-primary">Form Fillup Cost: </span>{formFillupFee} TK</p>
                        <br />
                        <p>
                            <i class="fab fa-facebook-square fa-3x text-primary me-4"></i>
                            <i class="fas fa-envelope-square fa-3x text-primary me-4"></i>
                            <i class="fab fa-twitter-square fa-3x text-primary me-4"></i>
                            <i class="fab fa-youtube-square fa-3x text-primary me-4"></i>
                        </p>
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