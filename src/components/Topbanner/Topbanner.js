import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Topbanner.css";
import { useForm, ValidationError } from "@formspree/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
const Topbanner = () => {
  const [state, handleSubmit] = useForm("mqknzbon");
  const notify = () => toast("Thank you for contacting me!!!!");
  useEffect(() => {
    if (state.succeeded) {
      notify();
    }
  }, [state]);

  return (
    <div>
      <header>
        <h2>
          <a href='#'>Portfolio</a>
        </h2>
        <nav>
          <li>
            <a href='#'>Projects()</a>
          </li>
          <li>
            <a href='#'>Skills()</a>
          </li>
          <li>
            <a href='#'>Contact()</a>
          </li>
        </nav>
      </header>

      <section class='hero'>
        <div class='background-image'></div>
        <div class='hero-content-area'>
          <h1>Hi, My name is </h1>
          <h2>Gourab Kumar Ghosh</h2>
          <h6>Full Stack Web Developer</h6>
          <a
            href='https://drive.google.com/uc?export=download&id=1-ScwFlp8a4kDHaopBZDbyN638vKBx8gw'
            class='btn'
          >
            Download My Resume
          </a>
        </div>
      </section>

      <section class='packages'>
        <h3 class='title'>Projects</h3>
        <Projects></Projects>
      </section>

      <section class='testimonials'>
        <Skills></Skills>
      </section>
      {/* contact me */}
      <section id='contact'>
        <div class='contact-box'>
          <div class='contact-links'>
            <h2>CONTACT</h2>
            <div class='links'>
              <div class='link'>
                <a href='www.linkedin.com/in/gourab997'>
                  <img
                    src='https://i.postimg.cc/m2mg2Hjm/linkedin.png'
                    alt='linkedin'
                  />
                </a>
              </div>
              <div class='link'>
                <a href='https://github.com/Gourab997'>
                  <img
                    src='https://i.postimg.cc/YCV2QBJg/github.png'
                    alt='github'
                  />
                </a>
              </div>

              {/* <div class='link'>
                <a href='Gourabg998@gmail.com'>
                  <img
                    src='https://i.postimg.cc/NjLfyjPB/email.png'
                    alt='email'
                  />
                </a>
              </div> */}
            </div>
          </div>
          <div class='contact-form-wrapper'>
            <form onSubmit={handleSubmit}>
              <div class='form-item'>
                <input type='text' id='name' name='name' required='' />
                <label>Name:</label>
                <ValidationError
                  prefix='name'
                  field='name'
                  errors={state.errors}
                />
              </div>
              <div class='form-item'>
                <input type='email' id='email' name='email' required='' />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
                <label>Email:</label>
              </div>
              <div class='form-item'>
                <textarea
                  class=''
                  id='message'
                  name='message'
                  required=''
                ></textarea>
                <label>Message:</label>
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </div>
              <button class='submit-btn' disabled={state.submitting}>
                Send
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </section>

      <footer>
        <p>© Gourab Kumar Ghosh || 2021</p>
        <ul>
          <li>
            <a href='#'>
              <i class='fa fa-twitter-square fa-2x'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fa fa-facebook-square fa-2x'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fa fa-snapchat-square fa-2x'></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Topbanner;
