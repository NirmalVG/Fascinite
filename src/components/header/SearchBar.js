import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "bootstrap-social/bootstrap-social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
    const [show, setShow] = useState(false);
    return (
        <>
            <FontAwesomeIcon
                className="icon cart text-reset me-5"
                icon={faSearch}
                variant="primary"
                onClick={() => setShow(true)}
                dialogClassName="my-modal"
            />
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body>
                    <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-1">
                        <div class="input-group">
                            <input
                                type="search"
                                placeholder="What're you searching for?"
                                aria-describedby="button-addon1"
                                class="form-control border-0 bg-light"
                            />
                            <div class="input-group-append">
                                <button
                                    id="button-addon1"
                                    type="submit"
                                    class="btn btn-link text-primary"
                                >
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default SearchBar;
