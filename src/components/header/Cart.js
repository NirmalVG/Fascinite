import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "./Cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "bootstrap-social/bootstrap-social.css";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <a className="cart btn-lg text-reset me-3" href="#!">
                <FontAwesomeIcon
                    className="icon me-2"
                    icon={faShoppingBag}
                    variant="primary"
                    onClick={handleShow}
                />
            </a>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart (0)</Offcanvas.Title>
                </Offcanvas.Header>   
                <Offcanvas.Body>
                    <span className="cart-text">Your cart is empty.</span>
                    &nbsp;&nbsp;&nbsp;{" "}
                    <a href="#!" className="cart-link">
                        Shop Now!
                    </a>
                    <img
                        src="images/empty-cart.png"
                        alt="empty-cart"
                        className="empty-cart"
                    />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Cart() {
    return (
        <>
            {["end"].map((placement, idx) => (
                <OffCanvasExample
                    key={idx}
                    placement={placement}
                    name={placement}
                />
            ))}
        </>
    );
}

export default Cart;
