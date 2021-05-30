import React from 'react';
import './../responsive.css';
import './responsive2.css';
const Main = () => {
    return(
        <body>
		<div className="main-page-wrapper">
			<div id="loader-wrapper">
				<div id="loader"></div>
			</div>

			<div className="html-top-content">
				
				<div className="theme-top-section">
					
					
					<div id="theme-banner" className="theme-banner-three">
						<img src="https://i.ibb.co/z5w6PcT/16.png" alt="" className="shape-one"/>
						<img src="https://i.ibb.co/4Nn8VdF/17.png" alt="" className="shape-two"/>
						<img src="https://i.ibb.co/9qHggcP/19.png" alt="" className="shape-four"/>
						<div className="container">
							<div className="main-text-wrapper">
								<h1>Хочешь инвестировать, <br/>но не знаешь как?</h1>
								<p>Investing For Dummies поможет тебе в этом!</p>
								<ul className="button-group clearfix">
									<li><a href="https://www.sberbank.ru/ru/person/investments/sber_invest">Хочу инвестировать</a></li>
									{/* <!-- <li>
										<div className="btn-group">
										  <a href="#" className="download-button">Download For OS X</a>
										  <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										    <span className="sr-only">Toggle Dropdown</span>
										  </button>
										  <div className="dropdown-menu dropdown-menu-right">
										    <a className="download-win" href="#">Download For Windows</a>
										  </div>
										</div>
									</li> --> */}
								</ul>
								<img src="https://i.ibb.co/7jNjfZY/18.png" alt="" className="shape-three"/>
								<img src="https://i.ibb.co/5nh4HmK/3.png" alt="" className="shape-five"/>
							</div>
						</div>
					</div> 
				</div> 
				
				<div className="about-cryto style-two flg2" id="about">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 order-lg-last">
								<div className="theme-title">
									{/* <!-- <div className="upper-heading">What is crypto?</div> --> */}
									<h2>Что такое Investing for Dummies?</h2>
								</div> 
								<p className="sub-text">Наш сервис предназначен для помощи начинающим инвесторам и людям, желающим узнать о вариантах пассивного заработка на бирже</p>
								{/* <!-- <p className="text">Lorem ipsum dolor sit amet, has at lorem utin mucius,  elitro dicam sit malorum. Fugit convenire adhuc putant eam. scripta iudicabit, dicit le persius ponderum id nec.</p> --> */}
								<a href="#" className="learn-more">Узнать больше</a>
								{/* <!-- <p className="know-more">Want to learn more about us? <a href="#">Clieck here</a></p> --> */}
							</div>
							<div className="col-lg-6 order-lg-first flg">
								<div className="icon-data">
									<div className="single-box" data-aos="fade-right" data-aos-duration="1100">
										<img src="https://i.ibb.co/7QzZTGv/14.png" alt=""/>
										{/* <!-- <h3>Strong Security</h3> -->
										<!-- <p>Lorem ipsum dolor sit amet, has at lorem sit.</p> --> */}
									</div> 
									<div className="single-box" data-aos="fade-down" data-aos-duration="1100">
										<img src="https://i.ibb.co/tYhgqvw/15.png" alt=""/>
										{/* <!-- <h3>Digital Money</h3> -->
										<!-- <p>Lorem ipsum dolor sit amet, has at lorem sit.</p> --> */}
									</div> 
									<div className="single-box" data-aos="fade-up" data-aos-duration="1100">
										<img src="https://i.ibb.co/z5w6PcT/16.png" alt=""/>
										{/* <!-- <h3>Most Populer</h3> -->
										<!-- <p>Lorem ipsum dolor sit amet, has at lorem sit.</p> --> */}
									</div> 
								</div> 
							</div>
						</div>
					</div> 
				</div>

				<div className="our-features-four" id="features">
					<img src="https://i.ibb.co/gVN285Z/27.png" alt="" className="shape"/>
					<div className="container">
						<div className="theme-title text-center">
							<h2 className="fcc">Возможности</h2>
						</div>
						<div className="row">
							<div className="col-md-4 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-duration="900">
								<div className="single-feature">
									<div className="icon-box">
										<img src="https://i.ibb.co/n6hc6Jr/20.png" alt="" className="primary-icon"/>
									</div>
									<h3>Оценка показателей <br/> акций</h3>
									<p>Наш алгоритм проводит анализ предыдущих периодов, на основе этого составляя оценку по совокупности факторов.</p>
									<a href="#"><i className="flaticon-right-thin"></i></a>
								</div> 
							</div> 
							<div className="col-md-4 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-duration="1200">
								<div className="single-feature">
									<div className="icon-box">
										<img src="https://i.ibb.co/fXfh54Y/21.png" alt="" className="primary-icon"/>
									</div>
									<h3>Оценка риск-портфеля профиля</h3>
									<p>Сервис поможет разработать оптимальную инвестиционную программу, отвечающую Вашим целям.</p>
									<a href="#"><i className="flaticon-right-thin"></i></a>
								</div> 
							</div> 
							<div className="col-md-4 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-duration="1500">
								<div className="single-feature">
									<div className="icon-box">
										<img src="https://i.ibb.co/qxmJWgN/22.png" alt="" className="primary-icon"/>
									</div>
									<h3>Справочник полезных терминов</h3>
									<p>Новичкам сложно разобраться в изобилии терминов, интерактивные подсказки помогут войти в курс дела</p>
									<a href="#"><i className="flaticon-right-thin"></i></a>
								</div> 
							</div> 
						</div> 
					</div> 
				</div> 

				{/* <!-- <div className="our-feature-five" id="services">
					<img src="images/shape/28.png" alt="" className="shape">
					<div className="container">
						<div className="row single-block">
							<div className="col-lg-6">
								<div className="text">
									<div className="icon-box"><img src="images/icon/17.png" alt=""></div>
									<h2 className="title">Untraceable transfer & Fast processing .</h2>
									<p>Mining should be fair & easy! We do not allow ASICs on our network. The development team is wholy commited to with keeping it that way.</p>
									<a href="#" className="learn-more">Learn More <i className="flaticon-right-thin"></i></a>
								</div> 
							</div> 
							<div className="col-lg-6 img-box"><div><img src="images/shape/23.png" alt=""></div></div>
						</div> 

						<div className="row single-block">
							<div className="col-lg-6 order-lg-last">
								<div className="text">
									<div className="icon-box"><img src="images/icon/18.png" alt=""></div>
									<h2 className="title">Populer Money and Smart wallet.</h2>
									<p>Mining should be fair & easy! We do not allow ASICs on our network. The development team is wholy commited to with keeping it that way.</p>
									<a href="#" className="learn-more">Learn More <i className="flaticon-right-thin"></i></a>
								</div> 
							</div> 
							<div className="col-lg-6 order-lg-first img-box"><div><img src="images/shape/24.png" alt=""></div></div>
						</div> 

						<div className="row single-block">
							<div className="col-lg-6">
								<div className="text">
									<div className="icon-box"><img src="images/icon/19.png" alt=""></div>
									<h2 className="title">Upholding Confidentialit & Strong Security.</h2>
									<p>Mining should be fair & easy! We do not allow ASICs on our network. The development team is wholy commited to with keeping it that way.</p>
									<a href="#" className="learn-more">Learn More <i className="flaticon-right-thin"></i></a>
								</div> 
							</div> 
							<div className="col-lg-6 img-box"><div><img src="images/shape/25.png" alt=""></div></div>
						</div> 
					</div>
				</div>  --> */}
				
				{/* <!-- <div className="apps-overview color-three" id="apps-review">
					<img src="images/shape/29.png" alt="" className="shape">
					<div className="overlay-bg">
						<div className="container">
							<div className="inner-wrapper">
								<img src="images/home/s8.png" alt="" className="s8-mockup" data-aos="fade-down" data-aos-duration="2500">
								<img src="images/home/x.png" alt="" className="x-mockup" data-aos="fade-up" data-aos-duration="2500">
								<div className="row">
									<div className="col-lg-5 offset-lg-7">
										<div className="text">
											<h3>don’t miss our apps</h3>
											<h2>Mobile Application for Faster Access.</h2>
											<h6>Now you can control dashboard from the mobile!</h6>
											<p>Mining should be fair & easy! We dose not allow ASIC on our network. The development team is who commited to with keeping it that way.</p>
											<ul className="button-group">
												<li><a href="#"><i className="flaticon-apple"></i> Apple Store</a></li>
												<li><a href="#"><img src="images/icon/playstore.png" alt=""> Google Play</a></li>
											</ul>
										</div> 
									</div>
								</div>
							</div> 
						</div>
					</div> 
				</div>  --> */}


				{/* <!-- <div className="testimonial-section">
					<div className="full-width">
						<div className="theme-title text-center">
							<h2>Отзывы</h2>
						</div>
						<div className="testimonial-slider-two">
							<div className="item">
								<div className="single-block clearfix">
									<div className="img-block"><img src="images/home/1.jpg" alt=""></div>
									<div className="text">
										<h3 className="name">Rashed Kabir</h3>
										<span>CEO, Creativegigs</span>
										<p>“Success is making our clients succeed. Nothing else matters how we work.”</p>
										<img src="images/home/sign.png" alt="" className="sign">
									</div> 
								</div> 
							</div>
							<div className="item">
								<div className="single-block clearfix">
									<div className="img-block"><img src="images/home/2.jpg" alt=""></div>
									<div className="text">
										<h3 className="name">Jannatul Fa.</h3>
										<span>MD. Tourisom Group</span>
										<p>“Success is making our clients succeed. Nothing else matters how we work.”</p>
										<img src="images/home/sign.png" alt="" className="sign">
									</div> 
								</div> 
							</div>
							<div className="item">
								<div className="single-block clearfix">
									<div className="img-block"><img src="images/home/1.jpg" alt=""></div>
									<div className="text">
										<h3 className="name">Rashed Kabir</h3>
										<span>CEO, Creativegigs</span>
										<p>“Success is making our clients succeed. Nothing else matters how we work.”</p>
										<img src="images/home/sign.png" alt="" className="sign">
									</div> 
								</div> 
							</div>
							<div className="item">
								<div className="single-block clearfix">
									<div className="img-block"><img src="images/home/2.jpg" alt=""></div>
									<div className="text">
										<h3 className="name">Jannatul Fa.</h3>
										<span>MD. Tourisom Group</span>
										<p>“Success is making our clients succeed. Nothing else matters how we work.”</p>
										<img src="images/home/sign.png" alt="" className="sign">
									</div> 
								</div> 
							</div>
							<div className="item">
								<div className="single-block clearfix">
									<div className="img-block"><img src="images/home/1.jpg" alt=""></div>
									<div className="text">
										<h3 className="name">Rashed Kabir</h3>
										<span>CEO, Creativegigs</span>
										<p>“Success is making our clients succeed. Nothing else matters how we work.”</p>
										<img src="images/home/sign.png" alt="" className="sign">
									</div> 
								</div> 
							</div>
							<div className="item">
								<div className="single-block clearfix">
									<div className="img-block"><img src="images/home/2.jpg" alt=""></div>
									<div className="text">
										<h3 className="name">Jannatul Fa.</h3>
										<span>MD. Tourisom Group</span>
										<p>“Success is making our clients succeed. Nothing else matters how we work.”</p>
										<img src="images/home/sign.png" alt="" className="sign">
									</div> 
								</div> 
							</div>
							<div className="item">
								<div className="single-block clearfix">
									<div className="img-block"><img src="images/home/1.jpg" alt=""></div>
									<div className="text">
										<h3 className="name">Rashed Kabir</h3>
										<span>CEO, Creativegigs</span>
										<p>“Success is making our clients succeed. Nothing else matters how we work.”</p>
										<img src="images/home/sign.png" alt="" className="sign">
									</div> 
								</div> 
							</div>
						</div> 
					</div> 
				</div> 


				
				<div className="faq-section">
					<div className="container">
						<div className="theme-title text-center">
							<h2>Crypto FAQ’s</h2>
						</div>

						<div className="row">
							<div className="col-lg-6">
								<div className="accordion-one">
									<div className="panel-group theme-accordion" id="accordion">
									  <div className="panel">
									    <div className="panel-heading active-panel">
									      <h6 className="panel-title">
									        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
									        How can i get help by bitro wallet?</a>
									      </h6>
									    </div>
									    <div id="collapse1" className="panel-collapse collapse show">
									      <div className="panel-body">
									      	<p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem.</p>
									      </div>
									    </div>
									  </div> 
									  <div className="panel">
									    <div className="panel-heading">
									      <h6 className="panel-title">
									        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
									        I have questions about the updated Terms of Service and Privacy Policy</a>
									      </h6>
									    </div>
									    <div id="collapse2" className="panel-collapse collapse">
									      <div className="panel-body">
									      	<p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem.</p>
									      </div>
									    </div>
									  </div> 
									  <div className="panel">
									    <div className="panel-heading">
									      <h6 className="panel-title">
									        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
									        User Guide: Getting Started</a>
									      </h6>
									    </div>
									    <div id="collapse3" className="panel-collapse collapse">
									      <div className="panel-body">
									      	<p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem.</p>
									      </div>
									    </div>
									  </div> 
									  <div className="panel">
									    <div className="panel-heading">
									      <h6 className="panel-title">
									        <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
									       Are you plan to open a brance on Dhaka?</a>
									      </h6>
									    </div>
									    <div id="collapse4" className="panel-collapse collapse">
									      <div className="panel-body">
									      	<p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem.</p>
									      </div>
									    </div>
									  </div> 
									</div> 
								</div> 
							</div>

							<div className="col-lg-6">
								<div className="accordion-one">
									<div className="panel-group theme-accordion" id="accordion-two">
									  <div className="panel">
									    <div className="panel-heading">
									      <h6 className="panel-title">
									        <a data-toggle="collapse" data-parent="#accordion-two" href="#collapse11">
									        How can i get help by x company?</a>
									      </h6>
									    </div>
									    <div id="collapse11" className="panel-collapse collapse">
									      <div className="panel-body">
									      	<p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem.</p>
									      </div>
									    </div>
									  </div> 
									  <div className="panel">
									    <div className="panel-heading">
									      <h6 className="panel-title">
									        <a data-toggle="collapse" data-parent="#accordion-two" href="#collapse22">
									        What about loan programs & after bank loan advantage?</a>
									      </h6>
									    </div>
									    <div id="collapse22" className="panel-collapse collapse">
									      <div className="panel-body">
									      	<p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem.</p>
									      </div>
									    </div>
									  </div> 
									  <div className="panel">
									    <div className="panel-heading">
									      <h6 className="panel-title">
									        <a data-toggle="collapse" data-parent="#accordion-two" href="#collapse33">
									        How long your contract terms?</a>
									      </h6>
									    </div>
									    <div id="collapse33" className="panel-collapse collapse">
									      <div className="panel-body">
									      	<p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem.</p>
									      </div>
									    </div>
									  </div> 
									  <div className="panel">
									    <div className="panel-heading">
									      <h6 className="panel-title">
									        <a data-toggle="collapse" data-parent="#accordion-two" href="#collapse44">
									       How can i become a contributer with compress as partner?</a>
									      </h6>
									    </div>
									    <div id="collapse44" className="panel-collapse collapse">
									      <div className="panel-body">
									      	<p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem.</p>
									      </div>
									    </div>
									  </div> 
									  <div className="panel">
									    <div className="panel-heading">
									      <h6 className="panel-title">
									        <a data-toggle="collapse" data-parent="#accordion-two" href="#collapse45">
									       Are you plan to open a brance on Dhaka?</a>
									      </h6>
									    </div>
									    <div id="collapse45" className="panel-collapse collapse">
									      <div className="panel-body">
									      	<p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem.</p>
									      </div>
									    </div>
									  </div> 
									</div> 
								</div> 
							</div>
						</div>
					</div>
				</div>  --> */}


				{/* <!-- <div className="contact-us-one bg-color m0" id="contact">
					<img src="images/shape/26.png" alt="" className="shape">
					<img src="images/shape/30.png" alt="" className="shape-two">
					<div className="container">
						<div className="theme-title text-center">
							<h2>Get In Touch</h2>
							<p>vel modus honestatis ad, vim an vidit aliquam instructior. Alii efficiendi <br> intellegebat nec ea, mea elitr interesset ea</p>
						</div>
						<form action="#" className="form-validation" autocomplete="off">
							<div className="row">
								<div className="col-md-6">
									<label>First Name*</label>
									<input type="text" placeholder="First Name" name="firstName">
								</div>
								<div className="col-md-6">
									<label>Last Name*</label>
									<input type="text" placeholder="Last Name" name="lastName">
								</div>
								<div className="col-md-6">
									<label>Email*</label>
									<input type="email" placeholder="Email Address" name="email">
								</div>
								<div className="col-md-6">
									<label>Phone</label>
									<input type="text" placeholder="Phone Number" name="phone">
								</div>
								<div className="col-12">
									<label>I would like to discuss*</label>
									<input type="text" name="message">
								</div>
							</div>
							<button>Send Message</button>
						</form>
	
						<div className="alert-wrapper" id="alert-success">
							<div id="success">
								<button className="closeAlert"><i className="fa fa-times" aria-hidden="true"></i></button>
								<div className="wrapper">
					               	<p>Your message was sent successfully.</p>
					             </div>
					        </div>
					    </div> 
					    <div className="alert-wrapper" id="alert-error">
					        <div id="error">
					           	<button className="closeAlert"><i className="fa fa-times" aria-hidden="true"></i></button>
					           	<div className="wrapper">
					               	<p>Sorry!Something Went Wrong.</p>
					            </div>
					        </div>
					    </div> 
					</div>
				</div>  --> */}


				{/* <!-- <div className="partner-section">
					<div className="container">
						<div className="partner-slider">
							<div className="item"><a href="#"><img src="images/logo/p-1.png" alt=""></a></div>
							<div className="item"><a href="#"><img src="images/logo/p-2.png" alt=""></a></div>
							<div className="item"><a href="#"><img src="images/logo/p-3.png" alt=""></a></div>
							<div className="item"><a href="#"><img src="images/logo/p-4.png" alt=""></a></div>
							<div className="item"><a href="#"><img src="images/logo/p-5.png" alt=""></a></div>
						</div>
					</div>
				</div> --> */}
			</div> 
            
			<button className="scroll-top tran3s color-one-bg">
				<i className="fa fa-long-arrow-up" aria-hidden="true"></i>
			</button>
		</div> 
	</body>
    )
}

export default Main;