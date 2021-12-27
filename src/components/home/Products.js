import React, { Component } from "react";
import "./Products.css";
import "bootstrap-social/bootstrap-social.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

class Products extends Component {
    render() {
        return (
            <div className="container product-section bg-white">
                <h2>Latest Products</h2>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                        <div className="product">
                            <img src="images/4-1.jpg" alt="Playsuit" />
                            <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                <li className="icon mx-3">
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        size="fa-xs"
                                        data-tip="Quick views"
                                    >
                                        <ReactTooltip />
                                    </FontAwesomeIcon>
                                </li>
                                <li className="icon mx-3">
                                    <FontAwesomeIcon
                                        icon={faShoppingCart}
                                        size="fa-xs"
                                        data-tip="Add to cart"
                                    />
                                    <ReactTooltip />
                                </li>
                            </ul>
                        </div>
                        <div className="tag bg-red">Best Selling</div>
                        <div className="title pt-4 pb-1">
                            Botanical Print Playsuit
                        </div>
                        <div className="d-flex align-content-center justify-content-center">
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                        </div>
                        <div className="price">₹ 5000.0</div>
                    </div>
                    <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                        <div className="product">
                            <img src="images/6-1.jpg" alt="Polo" />
                            <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                <li className="icon mx-3">
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        size="fa-xs"
                                        data-tip="Quick views"
                                    >
                                        <ReactTooltip />
                                    </FontAwesomeIcon>
                                </li>
                                <li className="icon mx-3">
                                    <FontAwesomeIcon
                                        icon={faShoppingCart}
                                        size="fa-xs"
                                        data-tip="Add to cart"
                                    ></FontAwesomeIcon>
                                    <ReactTooltip />
                                </li>
                            </ul>
                        </div>
                        <div className="tag bg-warning">out of stock</div>
                        <div className="title pt-4 pb-1">
                            All-Over Printed Polo
                        </div>
                        <div className="d-flex align-content-center justify-content-center">
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                        </div>
                        <div className="price">₹ 4000.0</div>
                    </div>
                    <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                        <div className="product">
                            <img src="images/3-1.jpg" alt="" />
                            <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                <li className="icon mx-3">
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        size="fa-xs"
                                        data-tip="Quick views"
                                    >
                                        <ReactTooltip />
                                    </FontAwesomeIcon>
                                </li>
                                <li className="icon">
                                    <FontAwesomeIcon
                                        icon={faShoppingCart}
                                        size="fa-xs"
                                        data-tip="Add to cart"
                                    ></FontAwesomeIcon>
                                    <ReactTooltip />
                                </li>
                            </ul>
                        </div>
                        <div className="tag bg-green">latest</div>
                        <div className="title pt-4 pb-1">
                            Pleated Shoulder Top
                        </div>
                        <div className="d-flex align-content-center justify-content-center">
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                        </div>
                        <div className="price">₹ 5000.0</div>
                    </div>
                    <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                        <div className="product">
                            <img src="images/5-1.jpg" alt="Tye" />
                            <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                <li className="icon mx-3">
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        size="fa-xs"
                                        data-tip="Quick views"
                                    >
                                        <ReactTooltip />
                                    </FontAwesomeIcon>
                                </li>
                                <li className="icon">
                                    <FontAwesomeIcon
                                        icon={faShoppingCart}
                                        size="fa-xs"
                                        data-tip="Add to cart"
                                    ></FontAwesomeIcon>
                                    <ReactTooltip />
                                </li>
                            </ul>
                        </div>
                        <div className="title pt-4 pb-1">Tye Shorts</div>
                        <div className="d-flex align-content-center justify-content-center">
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                        </div>
                        <div className="price">₹ 1000.0</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                        <div className="product">
                            <img src="images/2-1.jpg" alt="Suede" />
                            <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                <li className="icon mx-3">
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        size="fa-xs"
                                        data-tip="Quick views"
                                    >
                                        <ReactTooltip />
                                    </FontAwesomeIcon>
                                </li>
                                <li className="icon">
                                    <FontAwesomeIcon
                                        icon={faShoppingCart}
                                        size="fa-xs"
                                        data-tip="Add to cart"
                                    ></FontAwesomeIcon>
                                    <ReactTooltip />
                                </li>
                            </ul>
                        </div>
                        <div className="tag bg-red">Best Selling</div>
                        <div className="title pt-4 pb-1">
                            Suede Trucker Jacket
                        </div>
                        <div className="d-flex align-content-center justify-content-center">
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                        </div>
                        <div className="price">₹ 3000.0</div>
                    </div>
                    <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                        <div className="product">
                            <img src="images/1-1.jpg" alt=" leeveless" />
                            <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                <li className="icon mx-3">
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        size="fa-xs"
                                        data-tip="Quick views"
                                    >
                                        <ReactTooltip />
                                    </FontAwesomeIcon>
                                </li>
                                <li className="icon">
                                    <FontAwesomeIcon
                                        icon={faShoppingCart}
                                        size="fa-xs"
                                        data-tip="Add to cart"
                                    ></FontAwesomeIcon>
                                    <ReactTooltip />
                                </li>
                            </ul>
                        </div>
                        <div className="tag bg-warning">out of stock</div>
                        <div className="title pt-4 pb-1">
                            Sleeveless Pleated Top
                        </div>
                        <div className="d-flex align-content-center justify-content-center">
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                        </div>
                        <div className="price">₹ 5000.00</div>
                    </div>
                    <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                        <div className="product">
                            <img src="images/7-1.jpg" alt="red dress" />
                            <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                <li className="icon mx-3">
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        size="fa-xs"
                                        data-tip="Quick views"
                                    >
                                        <ReactTooltip />
                                    </FontAwesomeIcon>
                                </li>
                                <li className="icon">
                                    <FontAwesomeIcon
                                        icon={faShoppingCart}
                                        size="fa-xs"
                                        data-tip="Add to cart"
                                    ></FontAwesomeIcon>
                                    <ReactTooltip />
                                </li>
                            </ul>
                        </div>
                        <div className="title pt-4 pb-1">
                            Artwork Hawaii Shirt Brutus
                        </div>
                        <div className="d-flex align-content-center justify-content-center">
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                        </div>
                        <div className="price">₹ 10000.00</div>
                    </div>
                    <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                        <div className="product">
                            <img src="images/8-1.jpg" alt="" />
                            <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                <li className="icon mx-3">
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        size="fa-xs"
                                        data-tip="Quick views"
                                    >
                                        <ReactTooltip />
                                    </FontAwesomeIcon>
                                </li>
                                <li className="icon">
                                    <FontAwesomeIcon
                                        icon={faShoppingCart}
                                        size="fa-xs"
                                        data-tip="Add to cart"
                                    ></FontAwesomeIcon>
                                    <ReactTooltip />
                                </li>
                            </ul>
                        </div>
                        <div className="tag bg-green">new</div>
                        <div className="title pt-4 pb-1">Tie Front Blouse</div>
                        <div className="d-flex align-content-center justify-content-center">
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                            <span className="fas fa-star"></span>
                        </div>
                        <div className="price">₹ 2000</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
