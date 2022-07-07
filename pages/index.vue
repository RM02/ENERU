<template>
  <div>
    <header id="header">
      <div class="container-fluid">
        <div id="logo" class="pull-left">
          <a href="#intro"><img src="/logo.png" width="60" height="40"/></a>
        </div>

        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li class="menu-active"><a href="#intro">Inicio</a></li>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#portfolio">Proyectos</a></li>
            <li><a href="#team">Equipo</a></li>
            <li><a href="#contact">Contactos</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <section id="intro">
      <div class="intro-container">
        <div id="introCarousel" class="carousel slide carousel-fade" data-ride="carousel">

          <ol class="carousel-indicators"></ol>

          <div class="carousel-inner" role="listbox">

            <div class="carousel-item active">
              <div class="carousel-background"><img src="home-media/image-1.jpg" alt=""></div>
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2>Evolución Visión Acción</h2>
                  <p>Aumenta el crecimiento de tu emprea con el mejor equipo de desarollo</p>
                  <a href="#featured-services" class="btn-get-started scrollto">Ver más</a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="carousel-background"><img src="img/intro-carousel/2.jpg" alt=""></div>
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2>At vero eos et accusamus</h2>
                  <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
                  <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="carousel-background"><img src="img/intro-carousel/3.jpg" alt=""></div>
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2>Temporibus autem quibusdam</h2>
                  <p>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
                  <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="carousel-background"><img src="img/intro-carousel/4.jpg" alt=""></div>
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2>Nam libero tempore</h2>
                  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.</p>
                  <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="carousel-background"><img src="img/intro-carousel/5.jpg" alt=""></div>
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2>Magnam aliquam quaerat</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <a href="#featured-services" class="btn-get-started scrollto">Get Started</a>
                </div>
              </div>
            </div>

          </div>

          <a class="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>

          <a class="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>

        </div>
      </div>
    </section>

    <main id="main">
      <section id="featured-services">
        <div class="container">
          <div class="row">

            <div class="col-lg-4 box">
              <i class="ion-ios-bookmarks-outline"></i>
              <h4 class="title"><a href="">Interoperatividad</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>

            <div class="col-lg-4 box box-bg">
              <i class="ion-ios-stopwatch-outline"></i>
              <h4 class="title"><a href="">Gestión de calidad</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
            </div>

            <div class="col-lg-4 box">
              <i class="ion-ios-heart-outline"></i>
              <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>

          </div>
        </div>
      </section><!-- #featured-services -->

      <!--==========================
        About Us Section
      ============================-->
      <section id="about">
        <div class="container">

          <header class="section-header">
            <h3>Quienes somos?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </header>

          <div class="row about-cols text-justify">

            <div class="col-md-6 wow fadeInUp">
              <div class="about-col">
                <div class="img">
                  <img src="img/about-mission.jpg" alt="" class="img-fluid">
                  <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                </div>
                <h2 class="title"><a href="#">Misión</a></h2>
                <p>
                  Proporcionar productos y servicios en el ambito digital a través de los estándares de alta calidad con base en la estructura ISO 9001: 2015, sumando valor en el desarrollo de software y soluciones integrales.
                </p>
              </div>
            </div>

            <div class="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div class="about-col">
                <div class="img">
                  <img src="img/about-vision.jpg" alt="" class="img-fluid">
                  <div class="icon"><i class="ion-ios-eye-outline"></i></div>
                </div>
                <h2 class="title"><a href="#">Visión</a></h2>
                <p>
                  Visualiza ser una organización de referencia a nivel nacional e internacional, dejando una huella a traves de sus productos y servicios. Fomentando el lema, una evolución visualizada en la acción.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section><!-- #about -->

      <!--==========================
        Services Section
      ============================-->
      <section id="services">
        <div class="container">

          <header class="section-header wow fadeInUp text-justify">
            <h3>Servicios</h3>
            <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.</p>
          </header>

          <div class="row">

            <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
              <div class="icon"><i class="ion-ios-analytics-outline"></i></div>
              <h4 class="title"><a href="">Desarrollo de software</a></h4>
              <p class="description text-justify">Nos preocupamos por garantizar un servicio de calidad, es por ello que todos nuestros productos comerciales e industriales están diseñados bajo los estandares de alta calidad esto através ISO-IEC:30000, 25000, 27000.</p>
            </div>
            <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
              <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
              <h4 class="title"><a href="">Diseño e ilustración</a></h4>
              <p class="description text-justify">Observamos la ilustración como una manera de crear un nuevo arte hacia la innovación de tus marcas. Enerü Technology aborda cada detalle convirtiendo en oportunidades de transmitir lo que quieres proyectar.</p>
            </div>
            <div class="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
              <div class="icon"><i class="ion-ios-paper-outline"></i></div>
              <h4 class="title"><a href="">Gestión de proyectos</a></h4>
              <p class="description text-justify">Visualizamos oportunidades en situaciones de alta complejidad para dar soluciones, esto a través de la gestión de proyectos el cual forma parte de uno de nuestros pilares dentro de Enerü Technology, abordando los requerimiento de nuestros clientes con un equipo multidisciplinario.</p>
            </div>

          </div>

        </div>
      </section><!-- #services -->

      <!--==========================
        Call To Action Section
      ============================-->
      <section id="call-to-action" class="wow fadeIn">
        <div class="container text-center">
          <h3>Call To Action</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a class="cta-btn" href="#">Call To Action</a>
        </div>
      </section><!-- #call-to-action -->

      <!--==========================
        Skills Section
      ============================-->
      <section id="skills">
        <div class="container">

          <header class="section-header">
            <h3>Our Skills</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
          </header>

          <div class="skills-content">

            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <span class="skill">HTML <i class="val">100%</i></span>
              </div>
            </div>

            <div class="progress">
              <div class="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                <span class="skill">CSS <i class="val">90%</i></span>
              </div>
            </div>

            <div class="progress">
              <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <span class="skill">JavaScript <i class="val">75%</i></span>
              </div>
            </div>

            <div class="progress">
              <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                <span class="skill">Photoshop <i class="val">55%</i></span>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!--==========================
        Facts Section
      ============================-->
      <section id="facts"  class="wow fadeIn">
        <div class="container">

          <header class="section-header">
            <h3>Facts</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
          </header>

          <div class="row counters">

            <div class="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">274</span>
              <p>Clients</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">421</span>
              <p>Projects</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">1,364</span>
              <p>Hours Of Support</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">18</span>
              <p>Hard Workers</p>
            </div>

          </div>

          <div class="facts-img">
            <img src="img/facts-img.png" alt="" class="img-fluid">
          </div>

        </div>
      </section><!-- #facts -->

      <!--==========================
        Portfolio Section
      ============================-->
      <section id="portfolio"  class="section-bg" >
        <div class="container">

          <header class="section-header">
            <h3 class="section-title">Proyectos</h3>
          </header>

          <div class="row">
            <div class="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div class="row portfolio-container">

            <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
              <div class="portfolio-wrap">
                <figure>
                  <img src="img/portfolio/app1.jpg" class="img-fluid" alt="">
                  <a href="img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </figure>

                <div class="portfolio-info">
                  <h4><a href="#">App 1</a></h4>
                  <p>App</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
              <div class="portfolio-wrap">
                <figure>
                  <img src="img/portfolio/web3.jpg" class="img-fluid" alt="">
                  <a href="img/portfolio/web3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </figure>

                <div class="portfolio-info">
                  <h4><a href="#">Web 3</a></h4>
                  <p>Web</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
              <div class="portfolio-wrap">
                <figure>
                  <img src="img/portfolio/app2.jpg" class="img-fluid" alt="">
                  <a href="img/portfolio/app2.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </figure>

                <div class="portfolio-info">
                  <h4><a href="#">App 2</a></h4>
                  <p>App</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
              <div class="portfolio-wrap">
                <figure>
                  <img src="img/portfolio/card2.jpg" class="img-fluid" alt="">
                  <a href="img/portfolio/card2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </figure>

                <div class="portfolio-info">
                  <h4><a href="#">Card 2</a></h4>
                  <p>Card</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
              <div class="portfolio-wrap">
                <figure>
                  <img src="img/portfolio/web2.jpg" class="img-fluid" alt="">
                  <a href="img/portfolio/web2.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </figure>

                <div class="portfolio-info">
                  <h4><a href="#">Web 2</a></h4>
                  <p>Web</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
              <div class="portfolio-wrap">
                <figure>
                  <img src="img/portfolio/app3.jpg" class="img-fluid" alt="">
                  <a href="img/portfolio/app3.jpg" class="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </figure>

                <div class="portfolio-info">
                  <h4><a href="#">App 3</a></h4>
                  <p>App</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp">
              <div class="portfolio-wrap">
                <figure>
                  <img src="img/portfolio/card1.jpg" class="img-fluid" alt="">
                  <a href="img/portfolio/card1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </figure>

                <div class="portfolio-info">
                  <h4><a href="#">Card 1</a></h4>
                  <p>Card</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card wow fadeInUp" data-wow-delay="0.1s">
              <div class="portfolio-wrap">
                <figure>
                  <img src="img/portfolio/card3.jpg" class="img-fluid" alt="">
                  <a href="img/portfolio/card3.jpg" class="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </figure>

                <div class="portfolio-info">
                  <h4><a href="#">Card 3</a></h4>
                  <p>Card</p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
              <div class="portfolio-wrap">
                <figure>
                  <img src="img/portfolio/web1.jpg" class="img-fluid" alt="">
                  <a href="img/portfolio/web1.jpg" class="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i class="ion ion-eye"></i></a>
                  <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
                </figure>

                <div class="portfolio-info">
                  <h4><a href="#">Web 1</a></h4>
                  <p>Web</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section><!-- #portfolio -->

      <section id="team">
        <div class="container">
          <div class="section-header wow fadeInUp">
            <h3>Nuestro equipo</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
          </div>

          <div class="row">

            <div class="col-lg-3 col-md-6 wow fadeInUp">
              <div class="member">
                <img src="img/team-1.jpg" class="img-fluid" alt="">
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Rafael Marcano</h4>
                    <span>Chief Executive Officer</span>
                    <div class="social">
                      <a href=""><i class="fa fa-twitter"></i></a>
                      <a href=""><i class="fa fa-facebook"></i></a>
                      <a href=""><i class="fa fa-google-plus"></i></a>
                      <a href=""><i class="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div class="member">
                <img src="img/team-3.jpg" class="img-fluid" alt="">
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Gregory Barreto</h4>
                    <span>Project Management</span>
                    <div class="social">
                      <a href=""><i class="fa fa-twitter"></i></a>
                      <a href=""><i class="fa fa-facebook"></i></a>
                      <a href=""><i class="fa fa-google-plus"></i></a>
                      <a href=""><i class="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="member">
                <img src="img/team-4.jpg" class="img-fluid" alt="">
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>Estefanía Elista</h4>
                    <span>Diseñadora Gráfica</span>
                    <div class="social">
                      <a href=""><i class="fa fa-twitter"></i></a>
                      <a href=""><i class="fa fa-facebook"></i></a>
                      <a href=""><i class="fa fa-google-plus"></i></a>
                      <a href=""><i class="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section><!-- #team -->

      <!--==========================
        Contact Section
      ============================-->
      <section id="contact" class="section-bg wow fadeInUp">
        <div class="container">

          <div class="section-header">
            <h3>Contactos</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
          </div>

          <div class="row contact-info">

            <div class="col-md-4">
              <div class="contact-address">
                <i class="ion-ios-location-outline"></i>
                <h3>Address</h3>
                <address>Centro Empresarial Sur 2 <br> Caracas, Venezuela</address>
              </div>
            </div>

            <div class="col-md-4">
              <div class="contact-phone">
                <i class="ion-ios-telephone-outline"></i>
                <h3>Phone Number</h3>
                <p><a href="tel:+584248216040">+58 4248216040</a></p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="contact-email">
                <i class="ion-ios-email-outline"></i>
                <h3>Email</h3>
                <p><a href="mailto:info@example.com">ceo@eva-eneru.com</a></p>
              </div>
            </div>

          </div>

          <div class="form">
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage"></div>
            <form action="" method="post" role="form" class="contactForm">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group col-md-6">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div class="validation"></div>
              </div>
              <div class="text-center"><button type="submit">Enviar</button></div>
            </form>
          </div>

        </div>
      </section><!-- #contact -->

    </main>

    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">

            <div class="col-lg-3 col-md-6 footer-info">
              <h3>ENERÜ</h3>
              <p>Enerü significa Visión, en el idioma Kariña. Derivado de un grupo étnico, descendientes directos de los Caribes.</p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Enlaces</h4>
              <ul>
                <li><i class="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#">About us</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#">Services</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#">Terms of service</a></li>
                <li><i class="ion-ios-arrow-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contactos</h4>
              <p>
                Centro Empresarial Sur 2<br>
                Caracas, Venezuela<br>
                <strong>Teléfono:</strong> +58 4248216040 <br>
                <strong>Correo:</strong> ceo@eva-eneru.com<br>
              </p>

              <div class="social-links">
                <a href="#" class="twitter"><i class="fa fa-whatsapp"></i></a>
                <a href="#" class="instagram"><i class="fa fa-telegram"></i></a>
                <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
              </div>

            </div>

            <div class="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
              <form action="" method="post">
                <input type="email" name="email"><input type="submit"  value="Subscribe">
              </form>
            </div>

          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong>Enerü Technology</strong>. Todos los derechos reservados
        </div>
        <div class="credits">
          <!--
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=BizPage
          -->

        </div>
      </div>
    </footer>

  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  layout: 'default',
  methods: {
    navigate(route) {
      this.$router.push({name: route})
    }
  }
}
</script>
