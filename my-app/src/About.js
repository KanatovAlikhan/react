import React from "react";
import "./App.css"; 

function About() {
  return (
    <section className="about-section">
      <div className="container-fluid p-0">
        <div className="row no-gutters position-relative">
          <div className="left-header d-none d-lg-block col-lg-3 col-xl-4">
            <div className="v-center-box d-flex align-items-end text-uppercase">
              <h2 className="mb-0">About Us</h2>
            </div>
          </div>
          <div className="col-lg-9 col-xl-8">
            <div className="main-content p-5">
              <div className="main-header mb-4">
                <h6 className="sub-heading text-uppercase d-block mb-2">Who we are</h6>
                <h1 className="main-heading d-inline-block text-uppercase pb-3 border-bottom">
                  &lt; About &gt;
                </h1>
              </div>

              <div className="row mb-5">
                <div className="mb-5 mb-sm-4 col-md-4">
                  <img
                    src="https://source.unsplash.com/35sVnCCynWA/784x1250"
                    alt="Team"
                  />
                </div>
                <div className="col-md-8">
                  <div className="about__text mb-5 mb-sm-4 mb-md-4">
                    <h3>Sigma.matem</h3>
                    <p className="m-0">
                      Мы занимаемся подготовкой школьников к ЕНТ по математике.
                      Наши преподаватели помогают добиваться высоких результатов,
                      делая обучение доступным и интересным.
                    </p>
                  </div>
                  <div className="about__skills">
                    <div className="row no-gutters mb-0 mb-sm-4">
                      <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                        <div className="media">
                          <i className="fab fa-js-square icon-18 mr-3"></i>
                          <div className="media-body">
                            <h4 className="m-0">Mathematics</h4>
                            <p className="m-0">
                              Подготовка к ЕНТ.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4 mb-sm-0 pl-sm-3 col-sm-6 ">
                        <div className="media">
                          <i className="fab fa-react icon-18 mr-3"></i>
                          <div className="media-body">
                            <h4 className="m-0">Online Lessons</h4>
                            <p className="m-0">
                              Занятия проводятся в удобном формате онлайн.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row no-gutters mb-0 mb-sm-4">
                      <div className="mb-4 mb-sm-0 pr-sm-3 col-sm-6">
                        <div className="media">
                          <i className="fab fa-sass icon-18 mr-2"></i>
                          <div className="media-body">
                            <h4 className="m-0">Support</h4>
                            <p className="m-0">
                              Мы всегда на связи и отвечаем на все вопросы.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-0 pl-sm-3 col-sm-6">
                        <div className="media">
                          <i className="fab fa-node-js icon-18 mr-3"></i>
                          <div className="media-body">
                            <h4 className="m-0">Results</h4>
                            <p className="m-0">
                              Более 95% наших учеников поступают в ВУЗы мечты.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-data">
                <div className="row no-gutters pt-5 border-top">
                  <div className="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
                    <div className="media">
                      <i className="fas fa-mug-hot icon-18 mr-2"></i>
                      <div className="media-body">
                        <p className="data-number m-0 font-weight-bold">500+</p>
                        <p className="m-0 text-uppercase">Ученики</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
                    <div className="media">
                      <i className="fas fa-code icon-18 mr-2"></i>
                      <div className="media-body">
                        <p className="data-number m-0 font-weight-bold">100%</p>
                        <p className="m-0 text-uppercase">Поддержка</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 mb-md-0 pr-sm-3 p-md-0 col-sm-6 col-md-3">
                    <div className="media">
                      <i className="fas fa-bus icon-18 mr-2"></i>
                      <div className="media-body">
                        <p className="data-number m-0 font-weight-bold">95%</p>
                        <p className="m-0 text-uppercase">Поступление</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 mb-md-0 pl-sm-3 p-md-0 col-sm-6 col-md-3">
                    <div className="media">
                      <i className="far fa-smile-wink icon-18 mr-2"></i>
                      <div className="media-body">
                        <p className="data-number m-0 font-weight-bold">100%</p>
                        <p className="m-0 text-uppercase">Удовлетворённость</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
