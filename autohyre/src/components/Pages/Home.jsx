import React from 'react'

const Home = () => {
  let database = [
    {
      name: 'Lexus/Toyota',
      image: 'lexus',
    },
    {
      name: 'Mercedes Benz/BMW',
      image: 'Mercedes-Benz-CLA-651.jpg',
    },
    {
      name: 'Acura/Honda',
      image: 'honda.png',
    },
    {
      name: 'Infiniti/Nissan',
      image: 'nissan.jpg',
    }
  ];
  let places = [
    {
      name: 'Lagos',
      image: 'url(https://i.ibb.co/g4mT3K5/html-Css-Js.jpg)',
    },
    {
      name: 'Abuja',
      image: 'url(https://i.ibb.co/g4mT3K5/html-Css-Js.jpg)',
    },
    {
      name: ' Port Harcourt',
      image: 'url(https://i.ibb.co/g4mT3K5/html-Css-Js.jpg)',
    },
    {
      name: ' Kano',
      image: 'url(https://i.ibb.co/g4mT3K5/html-Css-Js.jpg)',
    },
    {
      name: ' Kano',
      image: 'url(https://i.ibb.co/g4mT3K5/html-Css-Js.jpg)',
    },
    {
      name: ' Kano',
      image: 'url(https://i.ibb.co/g4mT3K5/html-Css-Js.jpg)',
    }
  ]
  return (
    <>
      <div className="search-bar mt-5 p-3 p-lg-1 ps-lg-4">
        <form action="/">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-center form-group">
              <input className="form-control border-0 shadow-0" type="text" name="search"
                placeholder="What are you searching for?" />
            </div>
            <div className="col-lg-3 d-flex align-items-center form-group">
              <div className="input-label-absolute input-label-absolute-right w-100">
                <label className="label-absolute" htmlFor="location"><i className="fa fa-crosshairs"></i><span
                  className="sr-only">City</span></label>
                <input className="form-control border-0 shadow-0" type="text" name="location" placeholder="Location"
                  id="location" />
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center form-group">
              <div className="input-label-absolute input-label-absolute-right w-100">
                <label className="label-absolute" htmlFor="location"><span className="sr-only">City</span></label>
                <input className="form-control border-0 shadow-0" type="text" name="location" placeholder="Date and Time"
                  id="location" />
              </div>
            </div>
            <div className="col-lg-2 d-grid">
              <button className="btn btn-primary rounded-pill h-100" type="submit">Search </button>
            </div>
          </div>
        </form>
      </div>

      <div id="intro" className="bg-image shadow-1-strong">
        <div className="mask h-100 text-white">
          <div id="carouselExampleIndicators" className="carousel slide h-100">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner h-100">
              <div className="carousel-item h-100 active">
                <img src={require('../../images/slide_2.jpg')} className="w-100" alt="" />
                <div className="container d-flex h-100 align-items-center">

                  <div className="row w-100 ">
                    <div className="col-md-7">

                    </div>
                    <div className="col-md-5">
                      <div className="text-white">
                        <h1 className="heading mb-0">Shortlease</h1>
                        <h3 className="subheading mb-3">Make your Trip Relishable</h3>
                        <a className="btn btn-outline-light btn-lg button-blue" href="#!" role="button">See the promotional
                          offer
                          <i className="fas fa-gem ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item h-100 ">
                <img src={require('../../images/bmw-m2-f87-blue-wallpaper.jpg')} className="w-100" alt="" />
                <div className="container d-flex align-items-center h-100">
                  <div className="row w-100">
                    <div className="col-md-7">

                    </div>
                    <div className="col-md-5">
                      <div className="text-white">
                        <h1 className="heading mb-0">Shortlease</h1>
                        <h3 className="subheading mb-3">Make your Trip Relishable</h3>
                        <a className="btn btn-outline-light btn-lg button-blue" href="#!" role="button">See the promotional
                          offer
                          <i className="fas fa-gem ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="find-car">
        <div className="container">
          <div className="section-heading text-center mt-md-5">
            Find your drive
          </div>
          <div className="section-subheading text-center">
            Explore the world's largest car sharing marketplace
          </div>
        </div>
      </div>

      <section className="mt-md-5 browsebymake">
        <div className="container">
          <b className="fs-4 d-block section-subheading">Browse by Make</b>

          <div id="owl-demo-2" className="owl-carousel owl-theme py-3">

            {database.map(function (object, i) {
              return (<div className='projects-grid'>
                <article className="thumbnail item">
                  <a href="/rentbycar.html">
                    <img src='../../images/{{}}' className="img-responsive" alt='' />

                    <div className="caption fw-bolder my-3">
                      {object.name}
                    </div>
                  </a>
                </article>
              </div>)
            })}

          </div>
        </div>
      </section>

      <section className="image-text mt-md-5">
        <div className="container">
          <div className="row justify-content-center py-md-5">
            <div className="col-md-5">
              <img src={require('../../images/Group19625424.png')} className="img-fluid" alt="" />
            </div>
            <div className="col-md-5">
              <div className="subheading  fs-3 mb-3">
                Find the perfect car <span className="text-red">to unwind for the weekend</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis illo veritatis sed saepe corrupti
                nesciunt quas porro suscipit sequi quia, consequatur, quibusdam minus itaque, facilis alias necessitatibus!
                Quas, vero?.</p>
              <a className="btn btn-outline-light btn-lg button-blue" href="/productpage.html" role="button"> browse all cars
              </a>

            </div>
          </div>
        </div>
      </section>

      <section className="mt-md-5">
        <div className="container">
          <b className="fs-4 d-block section-subheading">Browse by destination</b>
          <div id="location-owl-carousel" className="owl-carousel owl-theme py-3">


            {places.map(function (object, i) {
              return (<div className='projects-grid'>
                <article className="thumbnail item">
                  <a href="/rentbylocation.html">
                    <img src={require('../../images/place-1.png')} className="img-responsive" alt='' />
                  </a>
                  <div className="caption fw-bolder my-3">
                    {object.name}
                  </div>
                </article>
              </div>)
            })}


          </div>
        </div>
      </section>


      <div className="text-center">
        <div className="section-heading text-center mt-md-5">
          Meet the hosts
        </div>
      </div>

      <section className="hosts">
        <div className="container">
          <img
            src="https://unused-css.com/tools/clip-path-generator?p=22IwJgXCCsA0DskRgDgGxgMwBYB09qrDykJlDBR2AE4BuOgYgDMlnmg"
            alt="" />
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4">
              <div className="text-block">
                <div className="subheading  fs-3 mb-3">
                  Book a car
                </div>
                <p> With Flexible Bookings and No Hidden Fees Car hire is worthwhile</p>
              </div>
            </div>
            <div className="col-md-4">
              <img src={require('../../images/output-onlinegiftools(2).gif')} alt="" width="400px" />
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4">
              <img src={require('../../images/output-onlinegiftools.gif')} alt="" width="400px" className="movingcar" />
            </div>
            <div className="col-md-4 ms-5">
              <div className="text-block">
                <div className="subheading  fs-3 mb-3">
                  Become a host
                </div>
                <p>Car hire is worthwhile for extra freedom with time and destinations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home