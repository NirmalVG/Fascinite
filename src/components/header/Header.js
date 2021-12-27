import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "bootstrap-social/bootstrap-social.css";
import "./Header.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import { FaSignInAlt } from "react-icons/fa";

class Header extends Component {
    render() {
        return (
            <header className="main-nav">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand d-lg-none" href="/">
                            <img
                                src="images/Fascinite.png"
                                alt="Bootstrap"
                                width="120"
                                height="50"
                                class="d-inline-block align-top"
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#toggleMobileMenu"
                            aria-controls="toggleMobileMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="toggleMobileMenu"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-li">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <a className="nav-link" href="/shop">
                                        Shop
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/about">
                                        About
                                    </a>
                                </li>
                            </ul>
                                <a className="d-none d-lg-block mx-auto" href="/">
                                    <img
                                        src="images/Fascinite.png"
                                        alt="Bootstrap"
                                        width="120"
                                        height="50"
                                        class="d-inline-block align-top"
                                    />
                                </a>
                                <SearchBar />
                                <Cart />
                                <Link
                                    className="cart btn-lg text-reset me-3"
                                    to="/login"
                                >
                                    <FaSignInAlt className="icon" />
                                </Link>
                            </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
