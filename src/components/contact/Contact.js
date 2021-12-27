import React, { Component } from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "jquery-validation/dist/jquery.validate.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import $ from "jquery";


class Contact extends Component {
    render() {
        $(document).ready(function () {
            $("#contactForm").validate({
                rules: {
                    name: {
                        required: true,
                        maxlength: 50,
                    },
                    email_id: {
                        required: true,
                        maxlength: 50,
                    },
                    message: {
                        required: true,
                        maxlength: 50,
                    },
                },
                messages: {
                    name: "This is a required field",
                    email_id: "This is a required field",
                    message: "This is a required field",
                },
                submitHandler: function (form) {
                    form.submit();
                },
            });
        });
        return (
            <main className="contact-main">
                <div className="container-fluid px-5 my-5">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="card border-0 rounded-3 shadow-lg overflow-hidden">
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div
                                            className="col-sm-6 d-none d-sm-block bg-image"
                                            style={{
                                                backgroundImage:
                                                    "url('images/online-shopping.png')",
                                            }}
                                        ></div>
                                        <div className="col-sm-6 p-4">
                                            <div className="text-center">
                                                <div className="h3 fw-light">
                                                    Contact Us
                                                </div>
                                            </div>
                                            <form id="contactForm">
                                                <div className="form-floating mb-3">
                                                    <input
                                                        className="form-control"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Name"
                                                    />
                                                    <label for="name">
                                                        Name
                                                    </label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input
                                                        className="form-control"
                                                        id="emailAddress"
                                                        type="email"
                                                        placeholder="Email Address"
                                                    />
                                                    <label for="emailAddress">
                                                        Email Address
                                                    </label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <textarea
                                                        className="text-area form-control"
                                                        id="message"
                                                        type="text"
                                                        placeholder="Message"
                                                    ></textarea>
                                                    <label for="message">
                                                        Message
                                                    </label>
                                                </div>
                                                <div className="d-grid">
                                                    <button
                                                        className="btn btn-primary btn-lg"
                                                        id="submitButton"
                                                        type="submit"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Contact;
