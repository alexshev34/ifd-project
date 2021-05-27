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
                                    <a href="#" className="email">ifd@investfor.com</a>
                                    {/* <!-- <a href="#" className="mobile">648-xxx-xxxx</a> --> */}
                                </div>
                                <div className="col-lg-2 col-sm-6 footer-list">
                                    <h4 className="title">FAQ</h4>
                                    <ul>
                                        <li><a href="#">Как это работает</a></li>
                                        <li><a href="#">Гарантии</a></li>
                                        <li><a href="#">Безопасность</a></li>
                                        {/* <!-- <li><a href="#">Report Bug</a></li> -->
											<!-- <li><a href="#">Pricing</a></li> --> */}
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-sm-6 footer-list">
                                    <h4 className="title">О нас</h4>
                                    <ul>
                                        {/*  <li><a href="#">About Singleton</a></li> */}
                                        <li><a href="#">Вакансии</a></li>
                                        <li><a href="#">Команда</a></li>
                                        <li><a href="#">Отзывы</a></li>
                                        <li><a href="#">Блог</a></li>
                                    </ul>
                                </div>
                                {/* <div className="col-lg-3 col-sm-6 footer-list">
										<h4 className="title">Become A Member</h4>
										<ul>
											<li><a href="#">Contributor</a></li>
											<li><a href="#">Union Member</a></li>
											<li><a href="#">Processing</a></li>
											<li><a href="#">Legal Action</a></li>
										</ul>
									</div>   */}
                            </div>
                        </div>

                        <div className="bottom-footer clearfix">
                            <p className="copyright">&copy; 2021 Investing For Dummies</p>
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;