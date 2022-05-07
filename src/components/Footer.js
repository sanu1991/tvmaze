import React from 'react'
import { FaFacebook, FaTwitter, FaGooglePlus, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer class="bg-dark text-white">

                <hr class="mb-4" />

                <div className="container-fluid">
                    <div class="row row-cols-1 row-cols-lg-2 mx-auto">
                        <div class="col-12 col-lg-6 ">
                            <div class="text-center text-lg-start">
                                <p>Copyright © 2022 - All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 ">
                            <div class="text-center text-lg-end">
                                <ul className="list-unstyled list-inline">
                                    <li class="list-inline-item"><h4><FaFacebook /></h4></li>
                                    <li class="list-inline-item"><h4><FaTwitter /></h4></li>
                                    <li class="list-inline-item"><h4><FaGooglePlus /></h4></li>
                                    <li class="list-inline-item"><h4><FaLinkedin /></h4></li>
                                    <li class="list-inline-item"><h4><FaYoutube /></h4></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer