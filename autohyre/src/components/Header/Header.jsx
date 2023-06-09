import React, { useState } from 'react'
import logo from "../../images/output-onlinepngtools.png";

const Header = () => {
  let navigation = document.querySelector(".navigation");

  const handleClick = event => {
    navigation.classList.toggle('active');
  };
  return (
    <>
      <header className="bg-white">
        <div className="p-3 text-center top-navbar border-bottom">
          <div className="container position-relative">
            <div className="row justify-content-md-between">
              <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                <a href="/index.html" className="ms-md-2">
                  <img  src={logo} alt='' height="50" />
                </a>
              </div>
              <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
                <div className='navigation'>
                  <div className="menuToggle"  onClick={handleClick}></div>
                  <ul className="menu">
                    <li id="userNavbarDropdown-item-0" role="option" aria-selected="false" className="seo-pages-q2fcui e1ihn8vx2 mt-0"><a
                      href="/us/en/login" className="mt-0">
                      <div className="seo-pages-94h48-StyledNavbarLinkTitle e17kfdq0">
                        <div><span>Log in</span></div>
                      </div>
                    </a></li>
                    <li id="userNavbarDropdown-item-1" role="option" aria-selected="false" className="seo-pages-q2fcui e1ihn8vx2"><a
                      href="/us/en/sign-up">
                      <div className="seo-pages-94h48-StyledNavbarLinkTitle e17kfdq0">
                        <div><span>Sign up</span></div>
                      </div>
                    </a></li>
                    <li id="userNavbarDropdown-item-2" role="option" aria-selected="false" className="seo-pages-q2fcui e1ihn8vx2"><a
                      href="/us/en/list-your-car"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                        fill="none" viewBox="0 0 24 24" className="seo-pages-0" role="img" version="1.1">
                        <path fill="#121214"
                          d="M18.86 7.3c.1.24.33.38.57.38.09 0 .17-.02.24-.06.32-.14.47-.5.33-.82l-1.42-3.29a2.285 2.285 0 0 0-2.1-1.38H7.51c-.92 0-1.74.54-2.1 1.38L3.99 6.8c-.13.32.02.68.33.82.31.14.68 0 .82-.32l1.42-3.29c.16-.37.54-.62.95-.62h8.98c.41 0 .79.24.95.62l1.42 3.29ZM19.49 13.92a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0ZM6.11 15.52a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z">
                        </path>
                        <path fill="#121214" fill-rule="evenodd"
                          d="M15.43 18.69H8.55v2.4c.02.69-.54 1.25-1.23 1.25H4.91c-.69 0-1.25-.56-1.25-1.25v-2.413a2.545 2.545 0 0 1-2.28-2.527V11.7c0-1.4 1.14-2.54 2.54-2.54h16.17c1.4 0 2.54 1.14 2.54 2.54v4.45a2.552 2.552 0 0 1-2.3 2.528v2.412c.02.69-.54 1.25-1.24 1.25h-2.41c-.69 0-1.25-.56-1.25-1.25v-2.4Zm3.66 0h-2.42v2.4h2.42v-2.4Zm-14.19 0h2.41v2.4H4.9v-2.4Zm-2.27-7c0-.71.58-1.29 1.29-1.29v.01h16.17c.71 0 1.29.58 1.29 1.29v4.44c0 .71-.58 1.29-1.29 1.29H3.92c-.71 0-1.29-.58-1.29-1.29v-4.45Z"
                          clip-rule="evenodd"></path>
                      </svg>
                      <div className="seo-pages-94h48-StyledNavbarLinkTitle e17kfdq0">
                        <div><span>Become a host</span></div>
                      </div>
                    </a></li>
                    <hr data-testid="navbarDropdown-horizontal-rule" className="seo-pages-1184qmk e1ihn8vx0" />
                      <li id="userNavbarDropdown-item-0" role="option" aria-selected="false" className="seo-pages-q2fcui e1ihn8vx2"><a
                        href="/us/en/car-rental/united-states"><svg xmlns="http://www.w3.org/2000/svg" width="24px"
                          height="24px" fill="none" viewBox="0 0 24 24" className="seo-pages-0" role="img" version="1.1">
                          <path fill="#121214"
                            d="M9.022 8.73c-.37.38-.369 1 .02 1.38a.978.978 0 0 0 1.362.01c.369-.381.368-1-.021-1.38a.969.969 0 0 0-1.361-.01ZM10.405 10.118l.018-.018-.018.018ZM9.021 8.732l-.018.018.018-.018ZM6.473 12.74c-.39-.38-.39-1-.021-1.38a.969.969 0 0 1 1.36.01c.39.38.39.999.022 1.38a.978.978 0 0 1-1.361-.01Z">
                          </path>
                          <path fill="#121214"
                            d="M7.835 12.748a.944.944 0 0 0 .018-.018l-.018.018ZM6.451 11.362l-.018.018a.989.989 0 0 1 .018-.018Z">
                          </path>
                          <path fill="#121214" fill-rule="evenodd"
                            d="M14.07 8.18a3 3 0 0 0 3.232-2.99c0-1.65-1.34-2.99-2.99-2.99a3 3 0 0 0-2.99 2.984 4.135 4.135 0 0 0-1.75-.304c-1.24.02-2.4.51-3.27 1.4l-2.38 2.44a4.642 4.642 0 0 0 .07 6.56c.88.85 2.03 1.32 3.25 1.32h.04c1.24-.02 2.4-.51 3.27-1.4l2.39-2.44a4.643 4.643 0 0 0 1.129-4.58Zm-1.986-.988.072.078a3.393 3.393 0 0 1-.103 4.63l-2.38 2.43a3.37 3.37 0 0 1-2.39 1.02c-.93-.01-1.76-.34-2.41-.97a3.392 3.392 0 0 1-.06-4.79l2.38-2.44c.64-.64 1.49-1.01 2.4-1.01a3.386 3.386 0 0 1 2.49 1.052Zm1.006-.765a1.741 1.741 0 1 0 1.223-2.977 1.741 1.741 0 0 0-1.33 2.861l.107.116Z"
                            clip-rule="evenodd"></path>
                          <path fill="#121214"
                            d="M15.823 9.26c.49.33 1.06.5 1.65.5 1.65 0 2.99-1.34 2.99-3.01 0-1.21-.72-2.29-1.84-2.76a.63.63 0 0 0-.82.34c-.13.32.02.69.34.82.65.27 1.07.9 1.07 1.61a1.741 1.741 0 0 1-2.7 1.45.629.629 0 0 0-.69 1.05Z">
                          </path>
                          <path fill="#121214" fill-rule="evenodd"
                            d="M21.243 15.81a1.408 1.408 0 0 1-1.31 1.406v3.144c0 .55-.38 1.05-.96 1.28-.23.09-.47.13-.71.13-.58 0-1.13-.25-1.44-.7-.16-.23-.24-.48-.24-.73v-3.123a1.408 1.408 0 0 1-1.32-1.407v-1.58c0-1.21.99-2.2 2.2-2.2h.18v-1.19c0-.35.28-.62.62-.62.34 0 .63.28.63.62v1.19h.15c1.21 0 2.2.99 2.2 2.2v1.58Zm-3.6-2.54v.57c0 .34.28.62.62.62.34 0 .62-.28.63-.62v-.57h.16c.52 0 .95.42.95.95v1.58c0 .09-.07.16-.16.16h-3.16c-.09 0-.16-.07-.16-.16v-1.58c0-.52.42-.95.95-.95h.17Zm.19 3.95v3.13c.1.14.41.24.69.13a.403.403 0 0 0 .17-.12v-3.14h-.86Z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <div className="seo-pages-94h48-StyledNavbarLinkTitle e17kfdq0">
                          <div><span>How Autohyre works</span></div>
                        </div>
                      </a></li>

                      <li id="userNavbarDropdown-item-2" role="option" aria-selected="false" className="seo-pages-q2fcui e1ihn8vx2"><a
                        href="https://support.turo.com"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                          fill="none" viewBox="0 0 24 24" className="seo-pages-0" role="img" version="1.1">
                          <path fill="#121214" fill-rule="evenodd"
                            d="M14.504 20.693h.335a3.316 3.316 0 0 0 3.313-3.313v-.633a4.184 4.184 0 0 0 3.817-4.163A4.185 4.185 0 0 0 18.15 8.42a6.2 6.2 0 0 0-1.87-4.349c-1.206-1.184-2.823-1.844-4.494-1.788-3.29.06-5.983 2.795-6.126 6.153A4.185 4.185 0 0 0 2 12.584a4.183 4.183 0 0 0 4.267 4.18.612.612 0 0 0 .612-.613v-6.55c1.111-.086 3.264-.428 4.573-1.725.127-.126.244-.257.349-.394.553.762 1.624 1.625 3.69 1.974a.615.615 0 0 0 .707-.502.614.614 0 0 0-.503-.706c-2.633-.446-3.15-1.802-3.244-2.175.06-.275.09-.563.09-.864a.612.612 0 1 0-1.225 0c0 .22-.022.427-.066.622a.599.599 0 0 0-.033.132c-.112.393-.32.738-.625 1.041-.985.978-2.726 1.272-3.702 1.36.175-2.66 2.314-4.808 4.918-4.857a5.035 5.035 0 0 1 3.614 1.44 4.984 4.984 0 0 1 1.504 3.583v8.85a2.09 2.09 0 0 1-2.088 2.088h-.335a1.631 1.631 0 0 0-1.51-1.016h-2.181c-.899 0-1.63.73-1.63 1.629a1.63 1.63 0 0 0 1.63 1.629h2.181a1.63 1.63 0 0 0 1.51-1.017ZM5.654 9.675a2.96 2.96 0 0 0-2.43 2.91 2.96 2.96 0 0 0 2.43 2.906V9.675Zm15.09 2.91a2.959 2.959 0 0 1-2.592 2.931V9.651a2.96 2.96 0 0 1 2.593 2.933ZM10.41 20.08a.41.41 0 0 1 .403-.404h2.183a.41.41 0 0 1 .404.404.41.41 0 0 1-.404.405h-2.182a.41.41 0 0 1-.405-.405Z"
                            clip-rule="evenodd"></path>
                          <path fill="#121214"
                            d="M7.997 12.726a.613.613 0 0 1-.554-.873c.213-.454.845-1.22 1.865-1.22 1.014 0 1.656.76 1.876 1.212a.613.613 0 1 1-1.102.537c-.008-.016-.275-.525-.774-.525-.486 0-.739.483-.755.514v.002a.612.612 0 0 1-.556.353ZM15.861 12.726a.611.611 0 0 1-.55-.345l-.002-.001c-.02-.037-.286-.524-.775-.524-.492 0-.747.502-.757.523a.617.617 0 0 1-.817.283.61.61 0 0 1-.29-.81c.213-.453.845-1.22 1.864-1.22 1.015 0 1.658.761 1.877 1.213a.613.613 0 0 1-.55.88Z">
                          </path>
                        </svg>
                        <div className="seo-pages-94h48-StyledNavbarLinkTitle e17kfdq0">
                          <div><span>Contact support</span></div>
                        </div>
                      </a></li>
                      <li id="userNavbarDropdown-item-3" role="option" aria-selected="false" className="seo-pages-q2fcui e1ihn8vx2"><a
                        href="/us/en/policies/terms"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                          fill="none" viewBox="0 0 24 24" className="seo-pages-0" role="img" version="1.1">
                          <path fill="#121214"
                            d="M19.09 22.25H4.87c-.34 0-.62-.28-.62-.63v-20c0-.34.28-.62.62-.62h14.21c.35 0 .62.28.62.62 0 .34-.28.62-.62.62H5.5V21h12.96V4.71c0-.34.28-.62.62-.62.34 0 .62.28.62.62v16.92c.01.34-.27.62-.61.62Z">
                          </path>
                          <path fill="#121214"
                            d="M16.09 10.72H7.87c-.34 0-.62-.28-.62-.62 0-.34.28-.62.62-.62h8.22c.35 0 .62.28.62.62 0 .34-.27.62-.62.62ZM7.87 14.1h8.22c.35 0 .62-.29.62-.63s-.27-.62-.62-.62H7.87c-.34 0-.62.27-.62.62s.28.63.62.63ZM11.18 17.48H7.87c-.34 0-.62-.28-.62-.63s.28-.62.62-.62h3.31c.35 0 .62.28.62.62 0 .34-.28.63-.62.63ZM7.87 7.34h8.22c.35 0 .62-.28.62-.62 0-.34-.27-.62-.62-.62H7.87c-.34 0-.62.28-.62.62 0 .34.28.62.62.62Z">
                          </path>
                        </svg>
                        <div className="seo-pages-94h48-StyledNavbarLinkTitle e17kfdq0">
                          <div><span>Legal</span></div>
                        </div>
                      </a></li>
                      <li id="userNavbarDropdown-item-4" role="option" aria-selected="false" className="seo-pages-q2fcui e1ihn8vx2"><a
                        href="/us/en/insurance"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none"
                          viewBox="0 0 24 24" className="seo-pages-0" role="img" version="1.1">
                          <path fill="#121214" fill-rule="evenodd"
                            d="M12.001 21.958a.625.625 0 0 1-.251-1.197c.081-.036 8.131-3.626 8.131-9.08v-6.86c-1.301.527-4.677 1.307-7.88-1.497C8.867 6.067 5.566 5.38 4.12 4.868v6.813c0 3.326 2.953 5.955 5.43 7.574a.625.625 0 0 1-.683 1.047c-2.736-1.789-5.997-4.737-5.997-8.62v-7.05c0-.347.173-.673.464-.873a1.144 1.144 0 0 1 1.057-.123c1.407.538 4.17 1.083 6.847-1.306a1.147 1.147 0 0 1 1.525 0c2.677 2.39 5.439 1.845 6.848 1.306a1.145 1.145 0 0 1 1.056.123c.291.2.464.526.464.872v7.05c0 6.272-8.518 10.066-8.88 10.224a.621.621 0 0 1-.25.053Z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <div className="seo-pages-94h48-StyledNavbarLinkTitle e17kfdq0">
                          <div><span>Insurance &amp; protection</span></div>
                        </div>
                      </a></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header