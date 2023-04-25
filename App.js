import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="bg-white">

        <div className="p-3 text-center top-navbar border-bottom">
          <div className="container">
            <div className="row">

              <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                <a href="#!" className="ms-md-2">
                  <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" />
                </a>
              </div>



              <div className="col-md-4">
                <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                  <input autocomplete="off" type="search" className="form-control rounded" placeholder="Search" />
                  <span className="input-group-text border-0 d-none d-lg-flex"><i className="fas fa-search"></i></span>
                </form>
              </div>

              <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
                <div className="d-flex">

                  <a className="text-reset me-3" href="#">
                    <span><i className="fas fa-shopping-cart"></i></span>
                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                  </a>

                  <div className="dropdown">
                    <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
                      role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                      <i className="fas fa-bell"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">Some news</a></li>
                      <li><a className="dropdown-item" href="#">Another news</a></li>
                      <li>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown">
                    <a className="text-reset dropdown-toggle me-3 hidden-arrow" href="#" id="navbarDropdown" role="button"
                      data-mdb-toggle="dropdown" aria-expanded="false">
                      <i className="flag flag-united-kingdom m-0"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                      <li>
                        <a className="dropdown-item" href="#"><i className="flag flag-united-kingdom"></i>English
                          <i className="fa fa-check text-success ms-2"></i></a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#"><i className="flag flag-poland"></i>Polski</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#"><i className="flag flag-china"></i>中文</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#"><i className="flag flag-japan"></i>日本語</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#"><i className="flag flag-germany"></i>Deutsch</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#"><i className="flag flag-france"></i>Français</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#"><i className="flag flag-spain"></i>Español</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#"><i className="flag flag-russia"></i>Русский</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#"><i className="flag flag-portugal"></i>Português</a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown">
                    <a className="text-reset dropdown-toggle d-flex align-items-center hidden-arrow" href="#"
                      id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                      <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22"
                        alt="" loading="lazy" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="#">My profile</a></li>
                      <li><a className="dropdown-item" href="#">Settings</a></li>
                      <li><a className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container justify-content-center justify-content-md-between">
            <ul className="navbar-nav flex-row">
              <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                <a className="nav-link" href="#">Bestsellers</a>
              </li>
              <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                <a className="nav-link" href="#">Inspirations</a>
              </li>
              <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <button className="btn btn-outline-primary" data-mdb-ripple-color="dark" type="button">
              Download app<i className="fas fa-download ms-2"></i>
            </button>
          </div>
        </nav>


      </header>

      <div id="intro" className="bg-image shadow-1-strong">
        <div className="mask text-white">
          <div className="container d-flex align-items-center h-100">
            <div className="row w-100">
              <div className="col-md-6">
                <div className="text-white">
                  <h1 className="mb-3 heading">Shortlease</h1>
                  <h1 className="mb-3 suheadingheading">Make your Trip Relishable</h1>
                  <a className="btn btn-outline-light btn-lg mb-3 button-blue" href="#!" role="button">See the promotional offer
                    <i className="fas fa-gem ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-car-engine">
        <form action="" method="get" id="findCarNowForm">
          <div className="home-search-fields">
            <div className="vc-auto-search hsearch_style_2">
              <div className="col-md-3 me-3">
                <div className="home-search-label">PICK-UP DATE</div>
                <input type="datetime" name="" id="" />
              </div>
              <div className="col-md-3 me-3">
                <div className="home-search-label">DROP-OFF DATE</div>
                <input type="datetime" name="" id="" />

              </div>
              <div className="col-md-3 me-3">
                <div className="home-search-label">Makers of Vehicle</div>
                <select name="" id="">
                  <option value="">Vehicle</option>
                </select>
              </div>
              <div className="col-md-3">
                <div className="home-search-label text-white">Makers of Vehicle</div>
                <button type="button" className="btn btn-outline-light btn-lg button-blue-border">Find It Now</button>
              </div>
            </div>
          </div>
        </form>
      </div >
      <div className="find-car">
        <div className="container">
          <div className="section-heading text-center mt-md-5">
            Find your drive
          </div>
          <div className="section-suheadingheading text-center">
            Explore the world's largest car sharing marketplace
          </div>
        </div>
      </div>

      <section className="mt-md-5">

        <div className="container">
          <div id="owl-demo-2" className="owl-carousel owl-theme py-3">
            <article className="thumbnail item">
              <a href="#!">
                <img src="subaru.webp" className="img-responsive" />
              </a>
              <div className="caption fw-bolder my-3">
                Subaru
              </div>
            </article>
            <article className="thumbnail item">
              <a href="#!">
                <img src="subaru.webp" className="img-responsive" />
              </a>
              <div className="caption fw-bolder my-3">
                Subaru
              </div>
            </article>
            <article className="thumbnail item">
              <a href="#!">
                <img src="subaru.webp" className="img-responsive" />
              </a>
              <div className="caption fw-bolder my-3">
                Subaru
              </div>
            </article>
            <article className="thumbnail item">
              <a href="#!">
                <img src="subaru.webp" className="img-responsive" />
              </a>
              <div className="caption fw-bolder my-3">
                Subaru
              </div>
            </article>
            <article className="thumbnail item">
              <a href="#!">
                <img src="subaru.webp" className="img-responsive" />
              </a>
              <div className="caption fw-bolder my-3">
                Subaru
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-area section_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-left">
                <h4>about us</h4>
                <h2 className="section-heading">Welcome to gauto</h2>
                <p className="mt-md-2 mb-md-5">Horem Ipsum passages, and more recently with desktop publishing software like
                  aldus
                  pageMaker including
                  versions of all the Rorem Ipsum generators</p>
                <div className="about-list">
                  <ul>
                    <li><i className="fa fa-check"></i>We are a trusted name</li>
                    <li><i className="fa fa-check"></i>we deal in have all brands</li>
                    <li><i className="fa fa-check"></i>have a larger stock of vehicles</li>
                    <li><i className="fa fa-check"></i>we are at worldwide locations</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right">
                <img src="pngfind.com-jaguar-png-1653143.png" className="d-block w-100" alt="car" />
              </div>
            </div>
          </div>
        </div>
      </section>



      <div className="feat bg-gray pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="section-head col-sm-12">
              <h4><span>Why Choose</span> Us?</h4>
              <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the
                digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"></i></span>
                <h6>Modern Design</h6>
                <p>We use latest technology for the latest world because we know the demand of peoples.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item"> <span className="icon feature_box_col_two"><i className="fa fa-anchor"></i></span>
                <h6>Creative Design</h6>
                <p>We are always creative and and always lisen our costomers and we mix these two things and make beast
                  design.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item"> <span className="icon feature_box_col_three"><i className="fa fa-hourglass-half"></i></span>
                <h6>24 x 7 User Support</h6>
                <p>If our customer has any problem and any query we are always happy to help then.</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <footer className="gauto-footer-area">
        <div className="footer-top-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-footer">
                  <div className="footer-logo">
                    <a href="#">
                      <img src="assets/img/footer-logo.png" alt="footer-logo" />
                    </a>
                  </div>
                  <p>sed do eiusmod tempor incididunt ut labore et dolore magna as aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco.</p>
                  <div className="footer-address">
                    <h3>Head office</h3>
                    <p>125 Big fella St. Road, <span>New York, Hi 5654775</span></p>
                    <ul>
                      <li>Phone: 326487652 </li>
                      <li>Email: example@mail.com</li>
                      <li>Office Time: 9AM- 4PM</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-md-1">
                <div className="single-footer quick_links">
                  <h3>Quick Links</h3>
                  <ul className="quick-links">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                  <ul className="quick-links">
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">latest News</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 offset-md-1">
                <div className="single-footer newsletter_box">
                  <h3>newsletter</h3>
                  <form>
                    <input type="email" placeholder="Email Address" />
                    <button type="submit"><i className="fa fa-paper-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright">
                  <p>Designed by professionals</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-social">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa fa-skype"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}

export default App;
