import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="gauto-footer-area">
        <div className="footer-top-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-footer">
                  <div className="footer-logo">
                    <a href="/">
                      <img src="images/output-onlinepngtools.png" className="w-75" alt="footer-logo" />
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
                    <li><a href="/">About us</a></li>
                    <li><a href="/">Our Services</a></li>
                    <li><a href="/">Case Studies</a></li>
                    <li><a href="/">Contact us</a></li>
                  </ul>
                  <ul className="quick-links">
                    <li><a href="/">Testimonials</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">latest News</a></li>
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
                    <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="/"><i className="fa fa-skype"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer