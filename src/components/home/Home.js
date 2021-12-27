import React, { Component } from "react";
import Products from "./Products";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js/dist/popper.min.js";
import Timer from "./Timer";
import "./Timer.css";
import { Carousel } from "react-bootstrap";

class Home extends Component {
    render() {
        const startDate = new Date().getTime() + 864000000; // 10 day (Milliseconds Unit)
        return (
            <main>
                <Carousel className="main-carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/banner1.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/banner2.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/banner3.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/banner4.png"
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="fashion-section container-fluid">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <img
                                    className="men"
                                    src="images/MEN.png"
                                    alt="Men's fashion"
                                />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="title text-center">
                                    <h2 className="position-relative d-inline-block">
                                        FOR MEN
                                    </h2>
                                </div>
                                <div className="row g-0">
                                    <div className="d-flex flex-wrap justify-content-center">
                                        <button
                                            type="button"
                                            className="btn m-2 text-dark product-desc hover-underline-animation"
                                            data-filter=".best"
                                        >
                                            Best Sellers
                                        </button>
                                        <button
                                            type="button"
                                            className="btn m-2 text-dark product-desc hover-underline-animation"
                                            data-filter=".new"
                                        >
                                            New Arrival
                                        </button>
                                        <button
                                            type="button"
                                            className="btn m-2 text-dark product-desc hover-underline-animation"
                                            data-filter=".sale"
                                        >
                                            Sale Off
                                        </button>
                                    </div>
                                </div>
                                <div className="collection-list row">
                                    <div className="col-lg-4 col-md-12 mb-4">
                                        <div className="card">
                                            <div
                                                className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                                data-mdb-ripple-color="light"
                                            >
                                                <img
                                                    src="images/9-1.jpg"
                                                    alt="Batik"
                                                    className="w-100"
                                                />
                                                <div className="tag bg-red">
                                                    Best Selling
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <a
                                                    href="!#"
                                                    className="text-reset"
                                                >
                                                    <div className="title pt-1 pb-1">
                                                        Batix Mix Shorts
                                                    </div>
                                                </a>
                                                <h6 className="mb-2">
                                                    ₹ 2000.0
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="card">
                                            <div
                                                className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                                data-mdb-ripple-color="light"
                                            >
                                                <img
                                                    src="images/11-1.jpg"
                                                    alt="Denim"
                                                    className="w-100"
                                                />
                                                <div className="tag bg-red">
                                                    Best Selling
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <a
                                                    href="!#"
                                                    className="text-reset"
                                                >
                                                    <div className="title pt-1 pb-1">
                                                        Denim Worker Jacket
                                                    </div>
                                                </a>
                                                <h6 className="mb-2">
                                                    ₹ 1000.0
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="card">
                                            <div
                                                className="bg-image hover-zoom ripple"
                                                data-mdb-ripple-color="light"
                                            >
                                                <img
                                                    src="images/2-1.jpg"
                                                    alt="Hawaii"
                                                    className="w-100"
                                                />
                                                <div className="tag bg-red">
                                                    Best Selling
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <a
                                                    href="!#"
                                                    className="text-reset"
                                                >
                                                    <div className="title pt-1 pb-1">
                                                        Suede Trucker Jacket
                                                    </div>
                                                </a>
                                                <h6 className="mb-2">
                                                    ₹ 3000.0
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sort-products new col-lg-4 col-md-6 mb-4">
                                        <div className="card">
                                            <div
                                                className="bg-image hover-zoom ripple"
                                                data-mdb-ripple-color="light"
                                            >
                                                <img
                                                    src="images/2-1.jpg"
                                                    alt="Hawaii"
                                                    className="w-100"
                                                />
                                                <div className="tag bg-green">
                                                    New Arrival
                                                </div>
                                            </div>
                                            <div className="card-body new">
                                                <a
                                                    href="!#"
                                                    className="text-reset"
                                                >
                                                    <div className="title pt-1 pb-1">
                                                        Suede Trucker Jacket
                                                    </div>
                                                </a>
                                                <h6 className="mb-2">
                                                    ₹ 3000.0
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="men-head row">
                                    <h3 className="head-pro">FOR WOMEN</h3>
                                </div>
                                <div className="row g-0">
                                    <div className="d-flex flex-wrap justify-content-center">
                                        <button
                                            type="button"
                                            className="btn m-2 text-dark product-desc hover-underline-animation"
                                            data-filter=".best"
                                        >
                                            Best Sellers
                                        </button>
                                        <button
                                            type="button"
                                            className="btn m-2 text-dark product-desc hover-underline-animation"
                                            data-filter=".feat"
                                        >
                                            New Arrival
                                        </button>
                                        <button
                                            type="button"
                                            className="btn m-2 text-dark product-desc hover-underline-animation"
                                            data-filter=".new"
                                        >
                                            Sale Off
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 mb-6">
                                        <div className="card">
                                            <div
                                                className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                                data-mdb-ripple-color="light"
                                            >
                                                <img
                                                    src="images/10-1.jpg"
                                                    alt="Panel Shorts"
                                                    className="w-100"
                                                />
                                                <div className="tag bg-red">
                                                    Best Selling
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <a
                                                    href="!#"
                                                    className="text-reset"
                                                >
                                                    <div className="title pt-1 pb-1">
                                                        Cotton Chino Shorts
                                                    </div>
                                                </a>
                                                <h6 className="mb-2">
                                                    ₹ 3000.0
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="card">
                                            <div
                                                className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                                                data-mdb-ripple-color="light"
                                            >
                                                <img
                                                    src="images/12-1.jpg"
                                                    alt="Chino Shorts"
                                                    className="w-100"
                                                />
                                                <div className="tag bg-red">
                                                    Best Selling
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <a
                                                    href="!#"
                                                    className="text-reset"
                                                >
                                                    <div className="title pt-1 pb-1">
                                                        Contrast Panel Shorts
                                                    </div>
                                                </a>
                                                <h6 className="mb-2">
                                                    ₹ 2000.0
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="card">
                                            <div
                                                className="bg-image hover-zoom ripple"
                                                data-mdb-ripple-color="light"
                                            >
                                                <img
                                                    src="images/4-1.jpg"
                                                    alt="Playsuit"
                                                    className="w-100"
                                                />
                                                <div className="tag bg-red">
                                                    Best Selling
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <a
                                                    href="!#"
                                                    className="text-reset"
                                                >
                                                    <div className="title pt-1 pb-1">
                                                        Botanival Print Playsuit
                                                    </div>
                                                </a>
                                                <h6 className="mb-2">
                                                    ₹ 5000.0
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <img
                                    className="women"
                                    src="images/WOMEN.png"
                                    alt="Women's fashion"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Products />

                <div className="deal-section container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <img
                                className="deal-img"
                                src="images/deal.png"
                                alt="deal"
                            />
                            <div className="caption">
                                <h3 className="deal-head carousel-caption">
                                    DEAL OF THE DAY
                                </h3>
                                <div className="App timer-section carousel-caption">
                                    <Timer startDate={startDate} />
                                </div>
                                <button
                                    type="button"
                                    className="shop-btn btn btn-light"
                                >
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo-section container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <img
                                className="logo-img"
                                src="images/adidas.png"
                                alt="adidas"
                            />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <img
                                className="logo-img"
                                src="images/converse.png"
                                alt="converse"
                            />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <img
                                className="logo-img"
                                src="images/fila.png"
                                alt="fila"
                            />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <img
                                className="logo-img"
                                src="images/levi.png"
                                alt="levi"
                            />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <img
                                className="logo-img"
                                src="images/lee.png"
                                alt="lee"
                            />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <img
                                className="logo-img"
                                src="images/chanel.png"
                                alt="chanel"
                            />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Home;
