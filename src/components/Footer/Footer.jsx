import React from 'react';


const Footer = () => {
    return (
        <>
            <footer class="theme-footer">
                <img src="images/shape/31.png" alt="" class="shape" />
                <div class="container">
                    <div class="inner-wrapper">
                        <div class="top-footer-data-wrapper">
                            <div class="row">
                                <div class="col-lg-4 col-sm-6 footer-logo">
                                    <div class="logo"><a href="index.html"><img src="https://i.ibb.co/F8nfbKL/logo.png" alt="Logo" /></a></div>
                                    <a href="#" class="email">ifd@investfor.com</a>
                                    {/* <!-- <a href="#" class="mobile">648-xxx-xxxx</a> --> */}
                                </div>
                                <div class="col-lg-2 col-sm-6 footer-list">
                                    <h4 class="title">FAQ</h4>
                                    <ul>
                                        <li><a href="#">Как это работает</a></li>
                                        <li><a href="#">Гарантии</a></li>
                                        <li><a href="#">Безопасность</a></li>
                                        {/* <!-- <li><a href="#">Report Bug</a></li> -->
											<!-- <li><a href="#">Pricing</a></li> --> */}
                                    </ul>
                                </div>
                                <div class="col-lg-3 col-sm-6 footer-list">
                                    <h4 class="title">О нас</h4>
                                    <ul>
                                        {/*  <li><a href="#">About Singleton</a></li> */}
                                        <li><a href="#">Вакансии</a></li>
                                        <li><a href="#">Команда</a></li>
                                        <li><a href="#">Отзывы</a></li>
                                        <li><a href="#">Блог</a></li>
                                    </ul>
                                </div>
                                {/* <div class="col-lg-3 col-sm-6 footer-list">
										<h4 class="title">Become A Member</h4>
										<ul>
											<li><a href="#">Contributor</a></li>
											<li><a href="#">Union Member</a></li>
											<li><a href="#">Processing</a></li>
											<li><a href="#">Legal Action</a></li>
										</ul>
									</div>   */}
                            </div>
                        </div>

                        <div class="bottom-footer clearfix">
                            <p class="copyright">&copy; 2021 Investing For Dummies</p>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;