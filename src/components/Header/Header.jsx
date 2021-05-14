import React from 'react';
import { NavLink } from 'react-router-dom';
import './../responsive.css';
import './../style.css'

const Header = () => {
    return (
        <>
        <header class="theme-main-menu full-width color-white">
            <div class="clearfix">
                <div class="menu-wrapper clearfix">
                    <div class="logo"><NavLink to="/"><img src="https://i.ibb.co/F8nfbKL/logo.png" alt="Logo" /></NavLink></div>

                    <ul class="right-widget celarfix">
                        {/* <!-- <li>
										<div id="polyglotLanguageSwitcher">
											<form action="#">
												<select id="polyglot-language-options">
													<option id="en" value="en" selected>En</option>
													<option id="fr" value="fr">Fr</option>
													<option id="de" value="de">Ger</option>
													<option id="it" value="it">It</option>
													<option id="es" value="es">Sp</option>
												</select>
											</form>
										</div> 
									</li> --> */}
                        <li class="login-button" style={{marginRight: 10 + 'px'}}><NavLink to="/login">Вход <i class="flaticon-right-thin"></i></NavLink></li>
                        <li class="login-button"><NavLink to="/registration" class="login-button2" style={{width: 200 + 'px'}}>Регистрация <i class="flaticon-right-thin"></i></NavLink></li>
                    </ul>

                    <nav class="navbar navbar-expand-lg dark-bg" id="mega-menu-holder">
                        <div class="clearfix">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link js-scroll-trigger" href="#about">О нас</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link js-scroll-trigger" href="#features">Возможности</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link js-scroll-trigger" href="#services">ТОП компаний</a>
                                    </li>
                                    {/* <!-- <li class="nav-item">
							    		  	  <a class="nav-link js-scroll-trigger" href="#apps-review">Apps Review</a>
							    		  	</li>
							    		  	<li class="nav-item">
							    		  	  <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
							    		  	</li> --> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;