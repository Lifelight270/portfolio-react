import React from "react";
import { useCountUp } from "react-countup";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  useCountUp({
    ref: "counter",
    end: 100,
    scrollSpyDelay: 1000,
    enableScrollSpy: true,
    suffix: "+",
  });
  const [text] = useTypewriter({
    words: ["Janak.", "a Developer.", "a Freelancer."],
    loop:0,
    delaySpeed:2000,
    typeSpeed:60,
    deleteSpeed:60,
    
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  }); 

  return (
    <div className="App">
      <div className="container-fluid home-p">
        <div class="row main-bar">
          <div class="col col-lg-3 Title d-lg-flex justify-content-start align-items-center">
            <h2 className="animate__animated animate__pulse">Janak</h2>
          </div>

          <div class="col col-lg-6 menu-bar d-lg-flex justify-content-center align-items-center">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ">
                  <li class="nav-item">
                    <a
                      class="nav-link text-white active"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      What I do
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      Resume
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      Portfolio
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      Client
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div class="col col-lg-3 d-flex justify-content-end  align-items-center social-media">
            <a
              className="px-2"
              target="_blank"
              href="https://www.facebook.com/jeevan.tharu.948/"
            >
              <i class="fa fa-facebook px-2" aria-hidden="true"></i>
            </a>
            <a className="px-2" target="_blank" href="#">
              <i class="fa fa-twitter px-2" aria-hidden="true"></i>
            </a>
            <a
              className="px-2"
              target="_blank"
              href="https://www.instagram.com/jeevan_270t/"
            >
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="description">
          <div className="desp-box">
            <h2>Welcome</h2>
            <h2 className="developer">I am {text}<Cursor/></h2>
            
            <p>based in Kapilvastu, Nepal</p>
            <button className="hire-me">Hire me</button>
          </div>
        </div>

        <span></span>
      </div>

      <div className="container margin">
        <div className="about-me">
          <h2 className="title">Know Me More</h2>

          <div className="row descriptoion-2">
            <div className="col desp-2 col-lg-9 ">
              <h2>
                I'm <span>Janak Bahadur Tharu</span>, a Web Developer
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                hic omnis quae alias ipsum ullam fuga perspiciatis distinctio
                cupiditate quod cum beatae atque, voluptatem nostrum rerum,
                laudantium illum! Ullam, odit? Sequi earum impedit, in
                voluptatum dolorem minus nesciunt, temporibus doloremque eos
                inventore, cum vitae nisi amet alias.
              </p>
              <p>
                consequuntur veniam! Rem veritatis at nisi ipsa illum autem
                reiciendis dolorum iusto voluptatum sed soluta magni sint magnam
                blanditiis dolores ipsum temporibus totam quibusdam, provident
                expedita possimus non cumque qui! Dolorum, beatae!
              </p>
            </div>
            <div className="col col-lg-3 detail">
              <p>
                {" "}
                <span> Name :</span> Janak Bahadur Tharu
              </p>
              <p>
                {" "}
                <span>Email :</span>{" "}
                <span className="email">lightlife908@gmail.com</span>{" "}
              </p>
              <p>
                {" "}
                <span>Age :</span> 22
              </p>
              <p>
                {" "}
                <span>From :</span> Shivaraj, Kapilvastu
              </p>
              <button className="download-cv">Download CV</button>
            </div>
          </div>
        </div>

        <div className="counter">
          <span id="counter" />
          
        </div>
      </div>
    </div>
  );
}

export default App;
