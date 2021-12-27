import React, { Component } from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js/dist/popper.min.js";
import "jquery/dist/jquery.min.js";

class About extends Component {
    render() {
        return (
            <main>
                <div class="bg-light">
                    <div class="container py-5">
                        <div class="row h-100 align-items-center py-5">
                            <div class="col-lg-6">
                                <h1 class="display-4">About Us</h1>
                                <p class="lead text-muted">
                                    Keeping you effortlessly stylish throughout
                                    the day lies at the core of what we do. At
                                    Fascinite, we’ve made it our mission to
                                    provide simple, affordable wardrobe staples
                                    to people who love to live. We’ve got the
                                    looks you want, from the brands you love, in
                                    the colors and sizes you need.
                                </p>
                            </div>
                            <div class="col-lg-6 d-none d-lg-block">
                                <img
                                    src="images/About-us.png"
                                    alt=""
                                    class="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white py-5">
                    <div class="container py-5">
                        <div class="row align-items-center mb-5">
                            <div class="col-lg-6 order-2 order-lg-1">
                                <i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                                <h3 class="font-weight-light text-muted">
                                    With a motivated team, we strive to be the
                                    creative minds that bring a smile to your
                                    face. That’s why we’re always looking for
                                    innovative new ways to get the best to you.
                                </h3>
                            </div>
                            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                                <img
                                    src="images/us.jpg"
                                    alt=""
                                    class="img-fluid mb-4 mb-lg-0"
                                />
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-lg-5 px-5 mx-auto">
                                <img
                                    src="images/our-products.jpg"
                                    alt=""
                                    class="img-fluid mb-4 mb-lg-0"
                                />
                            </div>
                            <div class="col-lg-6">
                                <i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                                <h3 class="font-weight-light text-muted">
                                    The interests of our customers are always
                                    top priority for us, so we hope you will
                                    enjoy our products as much as we enjoy
                                    making them available to you.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default About;
