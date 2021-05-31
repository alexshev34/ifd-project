import React from 'react';


const Footer = () => {
    return (
        <>
            <footer className="theme-footer">
                <img src="images/shape/31.png" alt="" className="shape" />
                <div className="container">
                    <div className="inner-wrapper">
                        <div className="top-footer-data-wrapper">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6 footer-logo">
                                    <div className="logo"><a href="index.html"><img src="https://i.ibb.co/F8nfbKL/logo.png" alt="Logo" /></a></div>
                                    <a href="mailto:invest-for@gmail.com" className="email">invest-for@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="bottom-footer clearfix">
                            <p className="copyright">&copy; 2021 Investing For Dummies</p>
                            <ul>
                                <li><p>Не является инвестиционной рекомендацией</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;