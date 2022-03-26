import React from "react";
import NavBar from "../components/NavBar";
import "../styles/index.css";

const About = () => {
  return (
    <div>
      <NavBar />
      <div class="aboutus-area text-center">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="aboutus-image float-left hidden-sm">
                  <img
                    src="https://cdn.dribbble.com/users/808627/screenshots/2492559/media/96f51db6dc7c24bac586c949d48f1bad.png?compress=1&resize=800x600&vertical=top"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-12">
                <div class="aboutus-content ">
                  <h1>
                    about us <span>Grocery App</span>
                  </h1>
                  <h4>Property Details</h4>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has oots in a piece of classitin literature from 45
                    BC, making it over 2000 years old. Richard McClint professor
                    at Hamden dney College irginia, looked up one of the more
                    obscure Latin words, consectetur, from a Lorem Ipsum
                    passage, and going through the cites of the word in
                    classical literature.
                  </p>

                  <div class="counter ">
                    <div class="single-counter text-center">
                      <h2 class="counter">1500</h2>
                      <p>Fruits</p>
                    </div>

                    <div class="single-counter text-center">
                      <h2 class="counter">10</h2>
                      <p>Fried Items</p>
                    </div>

                    <div class="single-counter text-center">
                      <h2 class="counter">5</h2>
                      <p>Chicken Items</p>
                    </div>

                    <div class="single-counter text-center">
                      <h2 class="counter">6</h2>
                      <p>Combo Offers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
